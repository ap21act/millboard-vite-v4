// import Mailgun from 'mailgun.js';
// import FormData from 'form-data';
// import {  ApiResponse, ApiError, asyncHandler } from '../Utils/index.js';
// const mailgun = new Mailgun(FormData);

// const mg = mailgun.client({
//   username: 'api',
//   key: process.env.MAILGUN_API_KEY,
//   // Uncomment the following proxy configuration if needed
//   /*
//   proxy: {
//     protocol: 'https',
//     host: '127.0.0.1',
//     port: 78900,
//     auth: {
//       username: process.env.EMAIL_USERNAME,
//       password: process.env.EMAIL_PASSWORD
//     }
//   },
//   */
// });

// // Helper function to validate required fields
// const checkMissingFields = (fields, formData) => {
//   const missingFields = fields.filter((field) => !formData[field]);
//   return missingFields;
// };

// // Email sending controller
// export const sendEmailForCheckout = asyncHandler(async (req, res, next) => {
//   const { formData } = req.body;

//   // Check if any required fields are missing
//   const requiredFields = ['firstName', 'lastName', 'email', 'telephone', 'projectLocation', 'projectOwnerDetail', 'projectSize', 'projectStartTime'];
//   const missingFields = checkMissingFields(requiredFields, formData);

//   if (missingFields.length > 0) {
//     return next(new ApiError(400, `The following fields are required: ${missingFields.join(', ')}`));
//   }

//   const emailData = {
//     from: 'Your Company <youremail@yourdomain.com>',
//     to: 'sushantbasnet2027@gmail.com', // Actual email recipient (Sushant)
//     subject: 'New Order - Checkout Form Submission',
//     text: `A new checkout form has been submitted with the following details:
    
//       First Name: ${formData.firstName}
//       Last Name: ${formData.lastName}
//       Email: ${formData.email}
//       Telephone: ${formData.telephone}
//       Company Name: ${formData.companyName}
//       Project Location: ${formData.projectLocation}
//       Project Owner Detail: ${formData.projectOwnerDetail}
//       Project Size: ${formData.projectSize}
//       Project Start Time: ${formData.projectStartTime}
//       Additional Info: ${formData.additionalInfo ? 'Yes' : 'No'}
//     `
//   };

//   // Log the email details to the console for Bharat
//   console.log("Logging email for Bharat's visibility:", emailData);

//   try {
//     // Actually send the email to Sushant
//     const result = await mg.messages.create(process.env.MAILGUN_DOMAIN, emailData);
//     console.log("Mailgun email sent to Sushant:", result);

//     return res.status(201).json(new ApiResponse(201, result, 'Email sent successfully to Sushant'));
//   } catch (error) {
//     console.error('Mailgun error:', error);
//     return next(new ApiError(500, 'Failed to send email'));
//   }
// });

import nodemailer from 'nodemailer';
import { ApiResponse, ApiError, asyncHandler } from '../Utils/index.js';

// Nodemailer transporter setup
const transport = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: true, // Use true for SSL connection
  auth: {
    user: process.env.EMAIL_USERNAME, // Your Gmail account used for authentication
    pass: process.env.EMAIL_PASSWORD, // Your Gmail password or app password
  },
});

export const sendEmailForCheckout = asyncHandler(async (req, res, next) => {
  try {
    console.log('Received checkout request:', req.body); // Log request body for debugging

    // Data from the checkout form with cart items
    const { formData, cartItems } = req.body;

    // Destructure the form data
    const { 
      firstName, lastName, email, telephone, companyName, 
      projectLocation, projectOwnerDetail, projectSize, 
      projectStartTime, additionalInfo 
    } = formData;

    console.log('Cart Items:', cartItems); // Log cart items for debugging

    // Check if any required fields are missing
    const missingFields = Object.entries(formData)
      .filter(([_, value]) => !value || value.length === 0)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      console.error('Missing required fields:', missingFields); // Log missing fields
      return next(new ApiError(400, `The following fields are required from the request body of Checkout: ${missingFields.join(', ')}`));
    }

    // Email options with dynamic 'from' field
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`, // Use name and email from the form
      to: "bharat@kingsburygroup.co.uk", // List of receivers
      cc: "sushantbasnet2027@gmail.com", // CC email
      subject: "New Order for Sample ✔", // Subject line
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2 style="color: #333;">New Order Request</h2>
          <p><strong>Customer Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telephone:</strong> ${telephone}</p>
          <p><strong>Company Name:</strong> ${companyName || 'N/A'}</p>
          <p><strong>Project Location:</strong> ${projectLocation || 'N/A'}</p>
          <p><strong>Project Owner Detail:</strong> ${projectOwnerDetail || 'N/A'}</p>
          <p><strong>Project Size:</strong> ${projectSize || 'N/A'}</p>
          <p><strong>Project Start Time:</strong> ${projectStartTime || 'N/A'}</p>
          <p><strong>Additional Info:</strong> ${additionalInfo ? 'Yes' : 'No'}</p>
          <br />
          <h3>Ordered Products:</h3>
          <ul>
            ${cartItems.map(item => `
              <li>
                <strong>${item.name}</strong> - ${item.type} - ${item.boardWidth}mm
              </li>
            `).join('')}
          </ul>
          <br />
          <p style="color: #666;">Thank you!</p>
        </div>
      `, // HTML body with formatted details and cart items
    };

    // Send email using transporter
    const mailResponse = await transport.sendMail(mailOptions);

    console.log('Mail response:', mailResponse); // Log mail response

    return res.status(201).json(new ApiResponse(201, mailResponse, 'Email sent successfully to Bharat'));

  } catch (error) {
    console.error('Error while sending email:', error); // Log the error
    return next(new ApiError(500, 'Failed to send email'));
  }
});
