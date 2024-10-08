import { Product } from '../models/Products/index.js';
import { uploadOnCloudinary, uploadAllOnCloudinary, ApiResponse, ApiError, asyncHandler } from '../Utils/index.js';
import slugify from 'slugify';
import fs from 'fs';

const createProductCollection = asyncHandler(async (req, res, next) => {
  console.log('Received request body:', req.body);
  console.log('Received files:', req.files);

  const {
    name,
    description = 'Default description',
    colour,
    type,
    category,
    subCategory,
    boardSpecifications: rawBoardSpecifications,
  } = req.body;

  // Ensure boardSpecifications is parsed properly if it's sent as a string
  let boardSpecifications;
  try {
    boardSpecifications = typeof rawBoardSpecifications === 'string' ? JSON.parse(rawBoardSpecifications) : rawBoardSpecifications;
  } catch (parseError) {
    return next(new ApiError(400, 'Board specifications must be a valid JSON array.'));
  }

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
  try {
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
  } catch (skuError) {
    console.error('Error checking duplicate SKUs:', skuError);
    return next(new ApiError(500, 'Error checking duplicate SKUs.'));  
  }

  // Handle file uploads
  const titleImageLocalPath = req.files?.titleImage?.[0]?.path;
  const boardImageLocalPath = req.files?.boardImage?.[0]?.path;
  const productImageLocalPaths = req.files?.productImage?.map((file) => file.path);
  const inspirationGalleryLocalPaths = req.files?.inspirationGallery?.map((file) => file.path);

  if (!titleImageLocalPath || !boardImageLocalPath || !productImageLocalPaths || !inspirationGalleryLocalPaths) {
    return next(new ApiError(407, 'All required images must be provided'));
  }

  // Log file paths for debugging
  console.log('Title Image Path:', titleImageLocalPath);
  console.log('Board Image Path:', boardImageLocalPath);
  console.log('Product Images Path:', productImageLocalPaths);
  console.log('Inspiration Gallery Path:', inspirationGalleryLocalPaths);

  const folderPath = `${category.toLowerCase()}/${subCategory.toLowerCase()}/${type.toLowerCase().replace(/\s+/g, '-')}/${name.toLowerCase().replace(/\s+/g, '-')}`;
  const productImageFolderPath = `${folderPath}/productImage`;
  const inspirationGalleryFolderPath = `${folderPath}/InspirationGallery`;

  console.log('Folder Paths:', folderPath, productImageFolderPath, inspirationGalleryFolderPath);

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

    // Check if all uploads were successful
    if (titleImageUploadResult.status === 'error' || boardImageUploadResult.status === 'error' ||
      productImageUploadResults.some(result => result.status === 'error') ||
      inspirationGalleryUploadResults.some(result => result.status === 'error')) {
      console.error('Failed to upload one or more images to Cloudinary');
      return next(new ApiError(500, 'Failed to upload one or more images to Cloudinary'));
    }

    const productImageUrls = productImageUploadResults.filter((result) => result?.data?.url).map((result) => result.data.url);
    const inspirationGalleryUrls = inspirationGalleryUploadResults.filter((result) => result?.data?.url).map((result) => result.data.url);

    const slug = `${slugify(category, { lower: true })}/${slugify(subCategory, { lower: true })}/${slugify(type, { lower: true })}/${slugify(name, { lower: true })}`;



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
            titleImage: titleImageUploadResult.data.url,
            boardImage: boardImageUploadResult.data.url,
            productImage: productImageUrls,
            inspirationGallery: inspirationGalleryUrls,
          },
        },
        $addToSet: { boardSpecifications: { $each: boardSpecifications } }, // Add new board specifications without duplicates
      },
      { new: true, upsert: true }
    );

    console.log('Product Collection Created/Updated:', productCollectionCreate);

    return res.status(201).json(
      new ApiResponse(201, productCollectionCreate, 'Product Collection created/updated successfully')
    );
  } catch (error) {
    console.error('Error during product collection creation:', error);
    return next(new ApiError(500, `Internal Server Error: ${error.message}`));
  }
});
const findProductName = asyncHandler(async (req, res, next) => {
  const { name, category, subCategory, type } = req.query;

  if (!name) {
    return next(new ApiError(400, 'Product name is required'));
  }

  let query = { name: new RegExp(name, 'i') };
  
  // Add optional filters if provided
  if (category) query.category = new RegExp(category, 'i');
  if (subCategory) query.subCategory = new RegExp(subCategory, 'i');
  if (type) query.type = new RegExp(type, 'i');

  try {
    const products = await Product.find(query).lean();

    if (products.length === 0) {
      console.log(`No product found with name: ${name}`);
      return next(new ApiError(404, 'Product not found with the provided name'));
    }

    console.log(`Found ${products.length} products with name: ${name}`);
    res.status(200).json(new ApiResponse(200, products, 'Product found successfully'));
  } catch (error) {
    console.error('Error finding product name:', error);
    return next(new ApiError(500, 'Internal Server Error'));
  }
});


const updateProductImages = asyncHandler(async (req, res, next) => {
  const { name } = req.query;

  if (!name) {
    return next(new ApiError(400, 'Product name is required'));
  }

  try {
    // Find product by name
    const product = await Product.findOne({ name: new RegExp(name, 'i') });

    if (!product) {
      return next(new ApiError(404, 'Product not found with the provided name'));
    }

    console.log('Found product:', product.slug);

    // Handle file uploads
    const titleImageLocalPath = req.files?.titleImage?.[0]?.path;
    const boardImageLocalPath = req.files?.boardImage?.[0]?.path;
    const productImageLocalPaths = req.files?.productImage?.map((file) => file.path);
    const inspirationGalleryLocalPaths = req.files?.inspirationGallery?.map((file) => file.path);

    if (!titleImageLocalPath && !boardImageLocalPath && !productImageLocalPaths && !inspirationGalleryLocalPaths) {
      return next(new ApiError(400, 'At least one image must be provided for update'));
    }

    const folderPath = `products/${product.slug}`;
    const productImageFolderPath = `${folderPath}/productImages`;
    const inspirationGalleryFolderPath = `${folderPath}/inspirationGallery`;

    console.log('Folder Paths:', folderPath, productImageFolderPath, inspirationGalleryFolderPath);

    let updatedFields = {};

    try {
      // Verify file existence before uploading
      if (titleImageLocalPath) {
        if (!fs.existsSync(titleImageLocalPath)) {
          console.error(`Title image file does not exist at path: ${titleImageLocalPath}`);
          return next(new ApiError(400, 'Title image file does not exist'));
        }
      }

      // Upload title image
      if (titleImageLocalPath) {
        const titleImageUploadResult = await uploadOnCloudinary(titleImageLocalPath, folderPath);
        if (titleImageUploadResult?.url) {
          console.log('Title image uploaded successfully:', titleImageUploadResult.url);
          updatedFields['images.titleImage'] = titleImageUploadResult.url;
        } else {
          console.error('Failed to upload title image:', titleImageUploadResult?.error || 'Unknown error');
          return next(new ApiError(500, `Failed to upload title image to Cloudinary: ${titleImageUploadResult?.error || 'Unknown error'}`));
        }
      }

      // Upload board image
      if (boardImageLocalPath) {
        if (!fs.existsSync(boardImageLocalPath)) {
          console.error(`Board image file does not exist at path: ${boardImageLocalPath}`);
          return next(new ApiError(400, 'Board image file does not exist'));
        }
        
        const boardImageUploadResult = await uploadOnCloudinary(boardImageLocalPath, folderPath);
        if (boardImageUploadResult?.url) {
          console.log('Board image uploaded successfully:', boardImageUploadResult.url);
          updatedFields['images.boardImage'] = boardImageUploadResult.url;
        } else {
          console.error('Failed to upload board image:', boardImageUploadResult?.error || 'Unknown error');
          return next(new ApiError(500, `Failed to upload board image to Cloudinary: ${boardImageUploadResult?.error || 'Unknown error'}`));
        }
      }

      // Upload product images
      if (productImageLocalPaths && productImageLocalPaths.length > 0) {
        productImageLocalPaths.forEach((filePath) => {
          if (!fs.existsSync(filePath)) {
            console.error(`Product image file does not exist at path: ${filePath}`);
            return next(new ApiError(400, 'One or more product image files do not exist'));
          }
        });

        const productImageUploadResults = await uploadAllOnCloudinary(productImageLocalPaths, productImageFolderPath);
        const successfulProductImages = productImageUploadResults.filter((result) => result?.url);

        if (successfulProductImages.length > 0) {
          console.log('Product images uploaded successfully:', successfulProductImages.map((img) => img.url));
          updatedFields['images.productImage'] = successfulProductImages.map((result) => result.url);
        }

        const failedProductImages = productImageUploadResults.filter((result) => !result?.url);
        if (failedProductImages.length > 0) {
          console.error('Failed to upload some product images:', failedProductImages);
          return next(new ApiError(500, 'Failed to upload one or more product images to Cloudinary'));
        }
      }

      // Upload inspiration gallery images
      if (inspirationGalleryLocalPaths && inspirationGalleryLocalPaths.length > 0) {
        inspirationGalleryLocalPaths.forEach((filePath) => {
          if (!fs.existsSync(filePath)) {
            console.error(`Inspiration gallery image file does not exist at path: ${filePath}`);
            return next(new ApiError(400, 'One or more inspiration gallery image files do not exist'));
          }
        });

        const inspirationGalleryUploadResults = await uploadAllOnCloudinary(inspirationGalleryLocalPaths, inspirationGalleryFolderPath);
        const successfulInspirationImages = inspirationGalleryUploadResults.filter((result) => result?.url);

        if (successfulInspirationImages.length > 0) {
          console.log('Inspiration gallery images uploaded successfully:', successfulInspirationImages.map((img) => img.url));
          updatedFields['images.inspirationGallery'] = successfulInspirationImages.map((result) => result.url);
        }

        const failedInspirationImages = inspirationGalleryUploadResults.filter((result) => !result?.url);
        if (failedInspirationImages.length > 0) {
          console.error('Failed to upload some inspiration gallery images:', failedInspirationImages);
          return next(new ApiError(500, 'Failed to upload one or more inspiration gallery images to Cloudinary'));
        }
      }

      // Update MongoDB with successfully uploaded image URLs
      const updatedProduct = await Product.findOneAndUpdate(
        { slug: product.slug },
        { $set: updatedFields },
        { new: true }
      );

      console.log(`Images updated successfully for product: ${updatedProduct.slug}`);
      return res.status(200).json(
        new ApiResponse(200, updatedProduct, 'Product images updated successfully')
      );

    } catch (uploadError) {
      console.error('Error during Cloudinary upload:', uploadError);
      return next(new ApiError(500, `Error uploading images to Cloudinary: ${uploadError.message}`));
    }

  } catch (error) {
    console.error('Error finding product by name:', error);
    return next(new ApiError(500, 'Internal Server Error'));
  }
});

export const uploadImages = asyncHandler(async (req, res, next) => {
  try {
    const { titleImage, boardImage, productImages,inspirationGallery } = req.files;

    if (!titleImage || !boardImage || !productImages || !inspirationGallery) {
      return next(new ApiError(400, 'All images must be provided'));
    }

    // Upload each image to Cloudinary
    const folderPath = 'products';

    try {
      // Upload title image to Cloudinary
      const titleImageUploadResult = await uploadOnCloudinary(titleImage[0].path, folderPath);
      if (titleImageUploadResult.status === 'error') {
        throw new Error('Failed to upload title image to Cloudinary');
      }

      // Upload board image to Cloudinary
      const boardImageUploadResult = await uploadOnCloudinary(boardImage[0].path, folderPath);
      if (boardImageUploadResult.status === 'error') {
        throw new Error('Failed to upload board image to Cloudinary');
      }

      // Upload all product images to Cloudinary
      const productImagePaths = productImages.map((file) => file.path);
      const productImagesUploadResults = await uploadAllOnCloudinary(productImagePaths, `${folderPath}/productImages`);
      if (productImagesUploadResults.some((result) => result.status === 'error')) {
        throw new Error('Failed to upload one or more product images to Cloudinary');
      }
      // Upload all inspiration images to Cloudinary
      const inspirationGalleryPaths = inspirationGallery.map((file) => file.path);
      const inspirationGalleryUploadResults = await uploadAllOnCloudinary(inspirationGalleryPaths, `${folderPath}/inspirationGallery`);
      if (productImagesinspirationGalleryUploadResultsUploadResults.some((result) => result.status === 'error')) {
        throw new Error('Failed to upload one or more inspiration images to Cloudinary');
      }

      // Extract URLs of uploaded images
      const titleImageUrl = titleImageUploadResult.data.url;
      const boardImageUrl = boardImageUploadResult.data.url;
      const productImageUrls = productImagesUploadResults.filter((result) => result.status === 'success').map((result) => result.data.url);
      const inspirationGalleryUrls = insUploadResults.filter((result) => result.status === 'success').map((result) => result.data.url);

      // Send response with uploaded image URLs
      res.status(200).json(new ApiResponse(200, {
        titleImage: titleImageUrl,
        boardImage: boardImageUrl,
        productImages: productImageUrls,
      }, 'Images uploaded successfully'));
    } catch (error) {
      console.error('Error uploading images to Cloudinary:', error.message);
      return next(new ApiError(500, `Error uploading images: ${error.message}`));
    }
  } catch (error) {
    console.error('Error in uploadImages controller:', error);
    res.status(500).json({ message: 'Server error' });
  }
});





export { createProductCollection,findProductName,updateProductImages,uploadImages };