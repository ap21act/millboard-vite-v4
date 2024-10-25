import { Router } from 'express';
import {sendEmailForCheckout,sendEnquiryEmail} from '../Controllers/mail.controller.js';


const router = Router();


router.post('/send-order-email', sendEmailForCheckout);
router.post('/send-enquiry-email', sendEnquiryEmail);


export default router;