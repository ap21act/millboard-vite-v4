import { Product } from '../models/Products/index.js';
import { uploadOnCloudinary, uploadAllOnCloudinary, ApiResponse, ApiError, asyncHandler } from '../Utils/index.js';
import slugify from 'slugify';
import fs from 'fs';

export const createProductCollection = asyncHandler(async (req, res, next) => {
  try {
    // Destructure product details from request body
    const { name, category, subCategory, type, colour, description, boardSpecifications } = req.body;

    // Validate product details
    const productDetails = { name, category, subCategory, type, colour, description, boardSpecifications };
    const missingProductFields = Object.entries(productDetails).filter(([_, value]) => !value || value.length === 0).map(([key]) => key);

    if (missingProductFields.length > 0) {
      return next(new ApiError(400, `The following fields are required from the request body: ${missingProductFields.join(', ')}`));
    }

    // Validate board specifications
    const missingFields = [];
    boardSpecifications.forEach((spec, index) => {
      const requiredFields = ['boardWidth', 'weight', 'fixing', 'numberOfBoards', 'sku', 'length', 'breadth', 'height'];
      requiredFields.forEach((field) => {
        if (!spec[field]) missingFields.push(`${field} in boardSpecifications[${index}]`);
      });
    });

    if (missingFields.length > 0) {
      return next(new ApiError(400, `The following fields are required in boardSpecification: ${missingFields.join(', ')}`));
    }

    // Check for duplicate SKUs in the database
    const skuList = boardSpecifications.map((spec) => spec.sku.toUpperCase().trim());
    const existingSKUs = await Product.find({ "boardSpecifications.sku": { $in: skuList } }, { "boardSpecifications.$": 1 });

    if (existingSKUs.length > 0) {
      const duplicateSKUs = existingSKUs.map(product => product.boardSpecifications[0].sku);
      return next(new ApiError(409, `The following SKUs already exist: ${duplicateSKUs.join(', ')}`));
    }

    // Handle file uploads
    const { titleImage, boardImage, productImage, inspirationGallery } = req.files;
    const imagePaths = {
      titleImage: titleImage?.[0]?.path,
      boardImage: boardImage?.[0]?.path,
      productImagePaths: productImage?.map((file) => file.path),
      inspirationGalleryPaths: inspirationGallery?.map((file) => file.path),
    };

    const missingImageFields = Object.entries(imagePaths).filter(([_, value]) => !value || value.length === 0).map(([key]) => key);
    if (missingImageFields.length > 0) {
      return next(new ApiError(400, `The following image fields are required: ${missingImageFields.join(', ')}`));
    }

    const folderPath = `${category.toLowerCase()}/${subCategory.toLowerCase()}/${type.toLowerCase().replace(/\s+/g, '-')}/${name.toLowerCase().replace(/\s+/g, '-')}`;
    const productImageFolderPath = `${folderPath}/productImage`;
    const inspirationGalleryFolderPath = `${folderPath}/inspirationGallery`;

    // Upload images to Cloudinary
    const uploadResults = await Promise.all([
      uploadOnCloudinary(imagePaths.titleImage, folderPath),
      uploadOnCloudinary(imagePaths.boardImage, folderPath),
      uploadAllOnCloudinary(imagePaths.productImagePaths, productImageFolderPath),
      uploadAllOnCloudinary(imagePaths.inspirationGalleryPaths, inspirationGalleryFolderPath),
    ]);

    const [titleImageUploadResult, boardImageUploadResult, productImageUploadResults, inspirationGalleryUploadResults] = uploadResults;

    // Check for any upload errors
    if (uploadResults.some(result => result.status === 'error')) {
      return next(new ApiError(409, 'Failed to upload one or more images to Cloudinary'));
    }

    const productImageUrls = productImageUploadResults.filter((result) => result?.url).map((result) => result.url);
    const inspirationGalleryUrls = inspirationGalleryUploadResults.filter((result) => result?.url).map((result) => result.url);

    if (productImageUrls.length === 0 || inspirationGalleryUrls.length === 0) {
      return next(new ApiError(409, "Some images couldn't be uploaded to Cloudinary"));
    }

    // Generate slug
    const slug = `${slugify(category, { lower: true })}/${slugify(subCategory, { lower: true })}/${slugify(type, { lower: true })}/${slugify(name, { lower: true })}`;

    // Create or update product
    const productCollectionCreate = await Product.findOneAndUpdate(
      { slug },
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
        $push: { boardSpecifications: { $each: boardSpecifications } },
      },
      { new: true, upsert: true }
    );

    return res.status(201).json(new ApiResponse(201, productCollectionCreate, 'Product Collection created/updated successfully'));
  } catch (error) {
    console.error('Error during product collection creation:', error);
    return next(new ApiError(500, 'Internal Server Error'));
  }
});

export const findProductName = asyncHandler(async (req, res, next) => {
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

export const updateProductImages = asyncHandler(async (req, res, next) => {
  const { _id } = req.query;

  if (!_id) {
    return next(new ApiError(400, 'Product id from MongoDB is required'));
  }

  try {
    // Find product by id
    const product = await Product.findById(_id);

    if (!product) {
      return next(new ApiError(404, 'Product not found with the provided id'));
    }

    console.log('Found product:', product.slug);

    // Extract product details for folder path in Cloudinary
    const { category, subCategory, type, name } = product;

    // Handle file uploads
    const titleImageLocalPath = req.files?.titleImage?.[0]?.path;
    const boardImageLocalPath = req.files?.boardImage?.[0]?.path;
    const productImageLocalPaths = req.files?.productImage?.map((file) => file.path);
    const inspirationGalleryLocalPaths = req.files?.inspirationGallery?.map((file) => file.path);

    const ImagesLocalPath = { titleImageLocalPath, boardImageLocalPath, productImageLocalPaths, inspirationGalleryLocalPaths };

    for (const [key, value] of Object.entries(ImagesLocalPath)) {
      if (!value) {
        console.log(`No ${key} image provided for update`);
        return next(new ApiError(400, `No ${key} image provided for update`));
      }
    }

    const folderPath = `products/${category.toLowerCase()}/${subCategory.toLowerCase()}/${type.toLowerCase().replace(/\s+/g, '-')}/${name.toLowerCase().replace(/\s+/g, '-')}`;
    const productImageFolderPath = `${folderPath}/productImages`;
    const inspirationGalleryFolderPath = `${folderPath}/inspirationGallery`;

    let updatedFields = {};

    // Upload title image // Update title image url in MongoDB
    if (titleImageLocalPath) {
      const titleImageUploadResult = await uploadOnCloudinary(titleImageLocalPath, folderPath);
      if (titleImageUploadResult?.url) {
        updatedFields['images.titleImage'] = titleImageUploadResult.url;
      }
    }

    // Upload board image // Update board image url in MongoDB
    if (boardImageLocalPath) {
      const boardImageUploadResult = await uploadOnCloudinary(boardImageLocalPath, folderPath);
      if (boardImageUploadResult?.url) {
        updatedFields['images.boardImage'] = boardImageUploadResult.url;
      }
    }

    // Upload product images // Update product image urls in MongoDB
    if (productImageLocalPaths && productImageLocalPaths.length > 0) {
      const productImageUploadResults = await uploadAllOnCloudinary(productImageLocalPaths, productImageFolderPath);
      const successfulProductImages = productImageUploadResults.filter((result) => result?.url);
      if (successfulProductImages.length > 0) {
        updatedFields['images.productImage'] = successfulProductImages.map((result) => result.url);
      }
    }

    // Upload inspiration gallery images // Update inspiration gallery image urls in MongoDB
    if (inspirationGalleryLocalPaths && inspirationGalleryLocalPaths.length > 0) {
      const inspirationGalleryUploadResults = await uploadAllOnCloudinary(inspirationGalleryLocalPaths, inspirationGalleryFolderPath);
      const successfulInspirationImages = inspirationGalleryUploadResults.filter((result) => result?.url);
      if (successfulInspirationImages.length > 0) {
        updatedFields['images.inspirationGallery'] = successfulInspirationImages.map((result) => result.url);
      }
    }

    // Update MongoDB with successfully uploaded image URLs
    const updatedProduct = await Product.findByIdAndUpdate(
      _id,
      { $set: updatedFields },
      { new: true }
    );

    console.log(`Images updated successfully for product: ${updatedProduct.slug}`);
    return res.status(200).json(new ApiResponse(200, updatedProduct, 'Product images updated successfully'));
  } catch (error) {
    console.error('Error finding product by id:', error);
    return next(new ApiError(500, 'Internal Server Error'));
  }
});



// Controller to handle image uploads and update an existing product
export const uploadImages = asyncHandler(async (req, res, next) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return next(new ApiError(400, 'Product ID is required.'));
    }

    // Fetch product by ID
    const product = await Product.findById(productId);
    if (!product) {
      return next(new ApiError(404, 'Product not found.'));
    }

    // Extract images from request
    const { titleImage, boardImage, productImages, inspirationGallery } = req.files;

    if (!titleImage && !boardImage && !productImages && !inspirationGallery) {
      return next(new ApiError(400, 'At least one image must be provided for update.'));
    }

    // Cloudinary folder path for organizing images
    const folderPath = `products/${product.slug}`;

    // Set up image upload operations
    let updatedFields = {};
    try {
      // Upload title image if provided
      if (titleImage) {
        const titleImageUploadResult = await uploadOnCloudinary(titleImage[0].path, folderPath);
        if (titleImageUploadResult.status === 'error') {
          throw new Error('Failed to upload title image to Cloudinary');
        }
        updatedFields['images.titleImage'] = titleImageUploadResult.data.url;
      }

      // Upload board image if provided
      if (boardImage) {
        const boardImageUploadResult = await uploadOnCloudinary(boardImage[0].path, folderPath);
        if (boardImageUploadResult.status === 'error') {
          throw new Error('Failed to upload board image to Cloudinary');
        }
        updatedFields['images.boardImage'] = boardImageUploadResult.data.url;
      }

      // Upload product images if provided
      if (productImages && productImages.length > 0) {
        const productImagesUploadResults = await uploadAllOnCloudinary(
          productImages.map((file) => file.path),
          `${folderPath}/productImages`
        );

        if (productImagesUploadResults.some((result) => result.status === 'error')) {
          throw new Error('Failed to upload one or more product images to Cloudinary');
        }

        const productImageUrls = productImagesUploadResults
          .filter((result) => result.status === 'success')
          .map((result) => result.data.url);

        updatedFields['images.productImage'] = productImageUrls;
      }

      // Upload inspiration gallery images if provided
      if (inspirationGallery && inspirationGallery.length > 0) {
        const inspirationGalleryUploadResults = await uploadAllOnCloudinary(
          inspirationGallery.map((file) => file.path),
          `${folderPath}/inspirationGallery`
        );

        if (inspirationGalleryUploadResults.some((result) => result.status === 'error')) {
          throw new Error('Failed to upload one or more inspiration images to Cloudinary');
        }

        const inspirationGalleryUrls = inspirationGalleryUploadResults
          .filter((result) => result.status === 'success')
          .map((result) => result.data.url);

        updatedFields['images.inspirationGallery'] = inspirationGalleryUrls;
      }

      // Update the product with new image URLs
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { $set: updatedFields },
        { new: true }
      );

      // Respond with updated product information
      return res.status(200).json(
        new ApiResponse(200, updatedProduct, 'Product images updated successfully')
      );

    } catch (error) {
      console.error('Error uploading images:', error.message);
      return next(new ApiError(500, `Error uploading images: ${error.message}`));
    }
  } catch (error) {
    console.error('Error in uploadImages controller:', error);
    return next(new ApiError(500, 'Server error.'));
  }
});
