import { Router } from 'express';
import { createProductCollection, findProductName, getAllProducts, updateProductImages, uploadImages,getProductsByType,getAllProductsBySlug } from '../Controllers/product.controller.js';
import {upload} from '../Middlewares/multer.middleware.js'
import { get } from 'mongoose';

const router = Router();


// Route for creating a product collection
router.post('/create', upload.fields([
  { name: 'titleImage', maxCount: 1 },
  { name: 'boardImage', maxCount: 1 },
  { name: 'productImage', maxCount: 10 },
  { name: 'inspirationGallery', maxCount: 10 },
]), createProductCollection);

// Route for finding a product by name
router.get('/find', findProductName);

// Route for updating product images
router.put('/update-images', upload.fields([
  { name: 'titleImage', maxCount: 1 },
  { name: 'boardImage', maxCount: 1 },
  { name: 'productImage', maxCount: 2 },
  { name: 'inspirationGallery', maxCount: 8 },
]), updateProductImages);

// Route for uploading images
router.post('/uploadImages/:id', upload.fields([
  { name: 'titleImage', maxCount: 1 },
  { name: 'boardImage', maxCount: 1 },
  { name: 'productImages', maxCount: 2 },
  { name: 'inspirationGallery', maxCount: 8 },
]), uploadImages);


router.get('/getAllProducts', getAllProducts);

// Route to get products by type
router.get('/getProductsByType/:type', getProductsByType); // New route to handle product type filtering

router.get('/getProductsBySlug/:slug', getAllProductsBySlug);
router.get('/testSlug/:app', (req, res) => {
  const { app } = req.params;
  console.log('Test slug endpoint hit',app);
  res.send('Testing Slug Endpoint');
});


export default router;