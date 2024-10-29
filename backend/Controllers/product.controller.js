import { Product } from '../models/Products/index.js';
import { uploadOnCloudinary, uploadAllOnCloudinary, ApiResponse, ApiError, asyncHandler, generateSlug } from '../Utils/index.js';
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
    // console.log('Request files:', req.files);
    console.log("Request files all uploaded images");
    
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
    let updatedFields = {};

    try {
      // Upload title image if provided
      if (titleImage) {
        console.log('Title image path:', titleImage[0].path);
        const titleImageUploadResult = await uploadOnCloudinary(titleImage[0].path, folderPath);
        if (titleImageUploadResult.status === 'error') {
          throw new Error('Failed to upload title image to Cloudinary');
        }
        updatedFields['images.titleImage'] = titleImageUploadResult.data.url;
      }

      // Upload board image if provided
      if (boardImage) {
        console.log('Board image path:', boardImage[0].path);
        const boardImageUploadResult = await uploadOnCloudinary(boardImage[0].path, folderPath);
        if (boardImageUploadResult.status === 'error') {
          throw new Error('Failed to upload board image to Cloudinary');
        }
        updatedFields['images.boardImage'] = boardImageUploadResult.data.url;
      }

      // Upload product images if provided
      if (productImages) {
        const productImageUploadResults = await uploadAllOnCloudinary(
          productImages.map((image) => image.path),
          `${folderPath}/productImages`
        );
        const successfulProductImages = productImageUploadResults.filter((result) => result.status !== 'error');
        if (successfulProductImages.length > 0) {
          updatedFields['images.productImage'] = successfulProductImages.map((result) => result.data.url);
        }
      }

      // Upload inspiration gallery images if provided
      if (inspirationGallery) {
        const inspirationGalleryUploadResults = await uploadAllOnCloudinary(
          inspirationGallery.map((image) => image.path),
          `${folderPath}/inspirationGallery`
        );
        const successfulInspirationImages = inspirationGalleryUploadResults.filter((result) => result.status !== 'error');
        if (successfulInspirationImages.length > 0) {
          updatedFields['images.inspirationGallery'] = successfulInspirationImages.map((result) => result.data.url);
        }
      }

      // Update the product with new image URLs
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { $set: updatedFields },
        { new: true }
      );

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


// Controller to fetch all products store to frontened

// Controller to fetch all products and return to frontend
export const getAllProducts = asyncHandler(async (req, res, next) => {
  try {
    // Fetch all products from the database
    const products = await Product.find().lean();

    if (!products.length) {
      console.warn('No products found in the database.');
      return next(new ApiError(404, 'No products found'));
    }

    
    res.status(200).json(new ApiResponse(200, products, 'Products retrieved successfully'));
  } catch (error) {
    console.error('Error while fetching products:', error);
    return next(new ApiError(500, 'An error occurred while retrieving products. Please try again later.'));
  }
});
export const getProductsByType = asyncHandler(async (req, res, next) => {
  try {
    let { type } = req.params;

    // Replace hyphens with spaces to match the type stored in the database
    type = type.replace(/-/g, ' ');

    // Fetch products matching the type
    const products = await Product.find({ type: new RegExp(`^${type}$`, 'i') }).lean();

    if (!products.length) {
      return next(new ApiError(404, `No products found for the type: ${type}`));
    }

    console.log(`Found ${products.length} products with type: ${type}`);
    res.status(200).json(new ApiResponse(200, products, 'Products retrieved successfully.'));
  } catch (error) {
    console.error('Error while fetching products by type:', error);
    return next(new ApiError(500, 'An error occurred while retrieving products by type.'));
  }
});
// Controller to fetch a product based on slug from the database
export const getAllProductsBySlug = asyncHandler(async (req, res, next) => {
  let { slug } = req.params;

  // Print received slug for debugging
  console.log('Endpoint hit, received slug:', slug); // Debugging line

  if (!slug) {
    return next(new ApiError(400, 'Product slug is required'));
  }

  try {
    // Replace underscores with slashes if that's the format used in the database
    slug = slug.replace(/_/g, '/');
    console.log('Slug after transformation:', slug); // Debugging line

    // Query the database using the transformed slug
    const product = await Product.findOne({ slug: slug.toLowerCase() }).lean();
    console.log('Queried Product:', product); // Debugging line

    if (!product) {
      console.warn('No product found for the specified slug:', slug);
      return next(new ApiError(404, `No product found for the slug: ${slug}`));
    }

    res.status(200).json(new ApiResponse(200, product, 'Product retrieved successfully'));
  } catch (error) {
    console.error('Error while fetching product:', error);
    return next(new ApiError(500, 'An error occurred while retrieving the product. Please try again later.'));
  }
});








