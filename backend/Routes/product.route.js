import { Router } from 'express';
import { createProductCollection } from '../Controllers/product.controller.js';
import { upload } from '../Middlewares/multer.middleware.js';
import { check, validationResult } from 'express-validator';

const router = Router();

router.route('/api/v1/product').post(
  [
    check('name').notEmpty().withMessage('Product name is required'),
    check('category').isIn(['Decking', 'Cladding']).withMessage('Category must be Decking or Cladding'),
    check('subCategory').isIn(['Collection', 'Accessories']).withMessage('SubCategory must be Collection or Accessories'),
    check('type').notEmpty().withMessage('Product type is required'),
    check('colour').notEmpty().withMessage('Colour is required'),
    check('description').notEmpty().withMessage('Description is required'),
    check('boardSpecifications').isArray().withMessage('Board specifications must be an array'),
    // You can add more field validations as required
  ],
  upload.fields([
    { name: 'titleImage', maxCount: 1 },
    { name: 'boardImage', maxCount: 1 },
    { name: 'productImage', maxCount: 2 },
    { name: 'inspirationGallery', maxCount: 8 },
  ]),
  async (req, res, next) => {
    // Validation result check
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array(),
      });
    }

    // Proceed to your controller logic
    return createProductCollection(req, res, next);
  }
);

export default router;
