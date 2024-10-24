import { Router } from 'express';
import {sendEmailForCheckout} from '../Controllers/checkout.controller.js';


const router = Router();


router.post('/send-order-email', sendEmailForCheckout);


export default router;