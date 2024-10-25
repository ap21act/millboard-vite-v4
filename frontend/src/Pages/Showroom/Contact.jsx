import React, { useState } from 'react';
import InputLabel from '../../Components/Components/Common/InputLabel'; // Your existing InputLabel component
import axios from 'axios';
import { showSuccessToast, showErrorToast } from '../../Components/Components/Common/ToastNotification'; // Optional if using toast notifications

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    enquiryMessage: '',
    optIn: false,
  });

  // Loading state for handling loading animation during email sending
  const [loading, setLoading] = useState(false);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Check if the form is valid and identify missing fields
  const validateForm = () => {
    const missingFields = Object.entries(formData)
      .filter(([key, value]) => {
        // Ignore validation for 'optIn'
        if (key === 'optIn') return false;
        return !value || value.length === 0;
      })
      .map(([key]) => key);

    if (missingFields.length > 0) {
      missingFields.forEach((field) => {
        // Convert camelCase to readable format for error message
        const readableField = field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
        showErrorToast(`${readableField} is required.`);
      });
      return false;
    }
    return true;
  };

  // Submit the form
// Submit the form
const handleFormSubmit = async (e) => {
  e.preventDefault();

  // Ensure no duplicate keys and clean up formData
  const cleanedFormData = {
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    telephone: formData.telephone,
    enquiryMessage: formData.enquiryMessage,
    optIn: formData.optIn || false, // Default to false if not checked
  };

  console.log('Cleaned Form data before submission:', cleanedFormData); // Debugging: Log the cleaned form data

  // Validate the form
  if (!validateForm()) {
    return;
  }

  setLoading(true); // Start loading animation

  try {
    // Send POST request to the API
    const response = await axios.post('http://localhost:7890/api/v1/email/send-enquiry-email', cleanedFormData);
    axios.interceptors.request.use((request) => {
      console.log('Starting Request', request);
      return request;
    });
    
    axios.interceptors.response.use(
      (response) => {
        console.log('Response:', response);
        return response;
      },
      (error) => {
        console.error('Response Error:', error.response ? error.response.data : error.message);
        return Promise.reject(error);
      }
    );
    

    // If successful, show a success toast and reset form
    if (response.status === 201) {
      showSuccessToast('Enquiry email sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        enquiryMessage: '',
        optIn: false,
      });
    } else {
      showErrorToast('Failed to send enquiry email. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting the form:', error);

    // If it's a validation error (400), show the error message
    if (error.response && error.response.status === 400) {
      const serverErrorMessage = error.response.data.message || 'Bad request. Please check the form data.';
      showErrorToast(serverErrorMessage);
    } else {
      showErrorToast('An error occurred while sending the email. Please try again later.');
    }
  } finally {
    setLoading(false); // End loading animation
  }
};



  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>

      {/* Loading Animation Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex justify-center items-center z-50">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}

      {/* Contact Form */}
      <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
        {/* First Name */}
        <InputLabel
          label="First Name"
          name="firstName"
          required
          errorMessage="First Name is required"
          onChange={handleInputChange}
          value={formData.firstName}
        />

        {/* Last Name */}
        <InputLabel
          label="Last Name"
          name="lastName"
          required
          errorMessage="Last Name is required"
          onChange={handleInputChange}
          value={formData.lastName}
        />

        {/* Email */}
        <InputLabel
          label="Email Address"
          name="email"
          type="email"
          required
          errorMessage="Email is required"
          onChange={handleInputChange}
          value={formData.email}
        />

        {/* Telephone */}
        <InputLabel
          label="Telephone"
          name="telephone"
          type="tel"
          required
          errorMessage="Telephone is required"
          onChange={handleInputChange}
          value={formData.telephone}
        />

        {/* Enquiry Message Field */}
        <div className="flex flex-col">
          <span className='font-bold text-lg'>Enquiry Message</span>
          <textarea
            name="enquiryMessage"
            value={formData.enquiryMessage}
            onChange={handleInputChange}
            className="mt-2  w-full border-b-white-background bg-white focus:border-b-green border-b-2 focus:outline-none"
            rows="5"
            placeholder="Enter your enquiry"
          />
        </div>

        {/* Checkbox for Opt-in */}
        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="optIn"
              checked={formData.optIn}
              onChange={handleInputChange}
              className="mr-4"
            />
            Opt-in to receive the latest offers, updates, and news from Living Outdoors.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 py-3 px-8 bg-transparent border border-gray-500 text-gray-700 hover:bg-gray-100 rounded-md tracking-wide"
        >
          SEND ENQUIRY
        </button>
      </form>
    </div>
  );
};

export default Contact;

