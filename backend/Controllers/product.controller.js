import { Product } from '../models/Products/index.js';
import { uploadOnCloudinary, uploadAllOnCloudinary, ApiResponse,ApiError,asyncHandler} from '../Utils/index.js';

import slugify from 'slugify';

const createProductCollection = asyncHandler(async (req, res, next) => {
  console.log('Received request body:', req.body);

  const {
    name,
    description = 'Default description',
    colour,
    type,
    category,
    subCategory,
    boardSpecifications
  } = req.body;

  // Validate all required fields
  if (!name || !description || !colour || !type || !category || !subCategory) {
    return next(new ApiError(400, 'Required fields are missing: name, description, colour, type, category, subCategory'));
  }

  if (!boardSpecifications || !Array.isArray(boardSpecifications)) {
    return next(new ApiError(400, 'Board specifications are required and must be an array.'));
  }

  // Validate each board specification and check for missing fields
  const missingFields = [];
  const skuList = boardSpecifications.map((spec) => spec.sku.toUpperCase());

  boardSpecifications.forEach((spec, index) => {
    const { boardWidth, weight, fixing, numberOfBoards, sku, length, breadth, height } = spec;
    if (!boardWidth) missingFields.push(`boardWidth in boardSpecifications[${index}]`);
    if (!weight) missingFields.push(`weight in boardSpecifications[${index}]`);
    if (!fixing) missingFields.push(`fixing in boardSpecifications[${index}]`);
    if (!numberOfBoards) missingFields.push(`numberOfBoards in boardSpecifications[${index}]`);
    if (!sku) missingFields.push(`sku in boardSpecifications[${index}]`);
    if (!length) missingFields.push(`length in boardSpecifications[${index}]`);
    if (!breadth) missingFields.push(`breadth in boardSpecifications[${index}]`);
    if (!height) missingFields.push(`height in boardSpecifications[${index}]`);
  });

  if (missingFields.length > 0) {
    return next(new ApiError(401, `The following required fields are missing: ${missingFields.join(', ')}`));
  }

  // Check for duplicate SKUs in the database
  const existingSKUs = await Product.find(
    {
      boardSpecifications: { $elemMatch: { sku: { $in: skuList } } },
    },
    {
      'boardSpecifications.sku': 1,
    }
  );

  if (existingSKUs.length > 0) {
    const duplicateSKUs = existingSKUs.map((product) => product.boardSpecifications[0].sku);
    return next(new ApiError(409, `The following SKUs already exist: ${duplicateSKUs.join(', ')}`));
  }

  // Handle file uploads
  const titleImageLocalPath = req.files?.titleImage?.[0]?.path;
  const boardImageLocalPath = req.files?.boardImage?.[0]?.path;
  const productImageLocalPaths = req.files?.productImage?.map((file) => file.path);
  const inspirationGalleryLocalPaths = req.files?.inspirationGallery?.map((file) => file.path);

  if (!titleImageLocalPath || !boardImageLocalPath || !productImageLocalPaths || !inspirationGalleryLocalPaths) {
    return next(new ApiError(407, 'All required images must be provided'));
  }

  const folderPath = `${category.toLowerCase()}/${subCategory.toLowerCase()}/${type.toLowerCase().replace(/\s+/g, '-')}/${name.toLowerCase().replace(/\s+/g, '-')}`;
  const productImageFolderPath = `${folderPath}/productImage`;
  const inspirationGalleryFolderPath = `${folderPath}/InspirationGallery`;

  console.log(folderPath, productImageFolderPath, inspirationGalleryFolderPath);

  try {
    const [
      titleImageUploadResult,
      boardImageUploadResult,
      productImageUploadResults,
      inspirationGalleryUploadResults,
    ] = await Promise.all([
      uploadOnCloudinary(titleImageLocalPath, folderPath),
      uploadOnCloudinary(boardImageLocalPath, folderPath),
      uploadAllOnCloudinary(productImageLocalPaths, productImageFolderPath),
      uploadAllOnCloudinary(inspirationGalleryLocalPaths, inspirationGalleryFolderPath),
    ]);

    const productImageUrls = productImageUploadResults.filter((result) => result?.url).map((result) => result.url);
    const inspirationGalleryUrls = inspirationGalleryUploadResults.filter((result) => result?.url).map((result) => result.url);

    const slug = slugify(`${name}-${type}`, { lower: true });

    // Adjusting for nested images object in the product model
    const productCollectionCreate = await Product.findOneAndUpdate(
      { slug }, // Match by slug
      {
        $set: {
          name,
          description,
          colour,
          type,
          category,
          subCategory,
          slug,
          images: {
            titleImage: titleImageUploadResult.url,
            boardImage: boardImageUploadResult.url,
            productImage: productImageUrls,
            inspirationGallery: inspirationGalleryUrls,
          },
        },
        $addToSet: { boardSpecifications: { $each: boardSpecifications } }, // Add new board specifications without duplicates
      },
      { new: true, upsert: true }
    );

    return res.status(201).json(
      new ApiResponse(201, productCollectionCreate, 'Product Collection created/updated successfully')
    );
  } catch (error) {
    console.error('Error during product collection creation:', error);
    return next(new ApiError(500, 'Internal Server Error'));
  }
});

export { createProductCollection };

