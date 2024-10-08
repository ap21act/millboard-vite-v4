import { Router } from 'express';
import { createProductCollection,findProductName, updateProductImages,uploadImages } from '../Controllers/product.controller.js';
import { upload } from '../Middlewares/multer.middleware.js';

const router = Router();

router.post('/add', (req, res, next) => {
    console.log('Route hit');
    next();
  }, upload.fields([
  { name: 'titleImage', maxCount: 1 },
  { name: 'boardImage', maxCount: 1 },
  { name: 'productImage', maxCount: 2 },
  { name: 'inspirationGallery', maxCount: 8 }
]),(req, res, next) => {
    console.log('Request Body After Multer:', req.body);
    console.log('Request Files After Multer:', req.files);
    next();
  }, createProductCollection);

  router.get('/findProductName', findProductName);


  router.put('/uploadImages', upload.fields([
    { name: 'titleImage', maxCount: 1 },
    { name: 'boardImage', maxCount: 1 },
    { name: 'productImage', maxCount: 2 },
    { name: 'inspirationGallery', maxCount: 8 }
  ]), uploadImages);
  router.put('/updateProductImages', upload.fields([
    { name: 'titleImage', maxCount: 1 },
    { name: 'boardImage', maxCount: 1 },
    { name: 'productImage', maxCount: 2 },
    { name: 'inspirationGallery', maxCount: 8 }
  ]), updateProductImages);

export default router;
