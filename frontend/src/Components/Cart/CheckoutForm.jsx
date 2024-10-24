import React, { useState } from 'react';
import InputLabel from '../Components/Common/InputLabel'; // Your existing InputLabel component
import AddressSearch from './AddressSearch'; // The AddressForm component with manual entry functionality
import CustomDropdown from '../Components/Common/CustomDropdown';
import { useSelector } from 'react-redux';
import { showSuccessToast, showErrorToast } from '../Components/Common/ToastNotification';
import axios from 'axios';

const CheckoutForm = () => {
  // Fetch cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    companyName: '',
    projectLocation: 'Unknown',  // Default to "Unknown"
    projectOwnerDetail: 'Unknown',  // Default to "Unknown"
    projectSize: 'Unknown',  // Default to "Unknown"
    projectStartTime: 'Unknown',  // Default to "Unknown"
    additionalInfo: false,
    selectedAddress: '',
  });

  // Update form data on input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Update form data with the selected address
  const handleAddressSelection = (selectedAddress) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedAddress,
    }));
  };

  // Check if the form is valid
  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.telephone &&
      formData.projectLocation !== 'Unknown' &&
      formData.projectOwnerDetail !== 'Unknown' &&
      formData.projectSize !== 'Unknown' &&
      formData.projectStartTime !== 'Unknown' &&
      cartItems.length > 0 // Ensure cart is not empty
    );
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!isFormValid()) {
      showErrorToast('Please fill out all required fields and ensure your cart is not empty.');
      return;
    }

    // Prepare data to send to the backend
    const dataToSend = {
      formData, // All user-entered form data
      cartItems, // Include cart items
    };

    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:YOUR_PORT/api/checkout', dataToSend);
      showSuccessToast('Form submitted successfully!');
      console.log('Response from server:', response.data);
    } catch (error) {
      showErrorToast('Failed to submit form. Please try again.');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6">Checkout Form</h2>

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

      {/* Company Name */}
      <InputLabel
        label="Company Name"
        name="companyName"
        onChange={handleInputChange}
        value={formData.companyName}
      />

      {/* Address Form */}
      <AddressSearch onSelectAddress={handleAddressSelection} />

      {/* Dropdown for Project Location */}
      <CustomDropdown
        label="This project is to be installed at:"
        name="projectLocation"
        value={formData.projectLocation}
        required
        errorMessage="Please select a valid location."
        options={[
          { value: 'Unknown', label: 'Unknown' }, // Default value
          { value: 'Home', label: 'My Home' },
          { value: 'Client', label: 'My Client\'s Home' },
          { value: 'Commercial', label: 'A Commercial Project' }
        ]}
        onChange={handleInputChange}
      />

      {/* Dropdown for Project Owner Detail */}
      <CustomDropdown
        label="Which of the following best describes you?"
        name="projectOwnerDetail"
        value={formData.projectOwnerDetail}
        required
        errorMessage="Please select a valid option."
        options={[
          { value: 'Unknown', label: 'Unknown' }, // Default value
          { value: 'Homeowner', label: 'Homeowner' },
          { value: 'Contractor', label: 'Contractor' },
          { value: 'Builder', label: 'Builder' },
          { value: 'Architect', label: 'Architect/Designer' },
          { value: 'Dealer', label: 'Dealer' },
          { value: 'Consultancy', label: 'Consultancy' },
          { value: 'Manufacturer', label: 'Manufacturer' },
          { value: 'Press', label: 'Press' },
        ]}
        onChange={handleInputChange}
      />

      {/* Dropdown for Project Size */}
      <CustomDropdown
        label="Project Size"
        name="projectSize"
        value={formData.projectSize}
        required
        errorMessage="Please select a valid project size."
        options={[
          { value: 'Unknown', label: 'Unknown' }, // Default value
          { value: 'Small', label: 'Less than 20 m²' },
          { value: 'Medium', label: 'Between 21-100 m²' },
          { value: 'Large', label: 'More than 101 m²' }
        ]}
        onChange={handleInputChange}
      />

      {/* Dropdown for Project Start Time */}
      <CustomDropdown
        label="Project Start Time"
        name="projectStartTime"
        value={formData.projectStartTime}
        required
        errorMessage="Please select a valid start time."
        options={[
          { value: 'Unknown', label: 'Unknown' }, // Default value
          { value: 'Immediate', label: 'Immediate' },
          { value: '1 Month', label: '1 Month' },
          { value: '3 Months', label: '3 Months' },
          { value: '6 Months', label: '6 Months' }
        ]}
        onChange={handleInputChange}
      />

      {/* Checkbox for additional consent */}
      <div className="mb-6">
        <label className="flex items-center">
          <input
            type="checkbox"
            name="additionalInfo"
            checked={formData.additionalInfo}
            onChange={handleInputChange}
            className="mr-4"
          />
          I agree to receive other communications from Millboard. You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
        </label>
      </div>

      {/* Submit Button */}
      <button
        className={`btn-length mt-6 min-w-full py-2 px-4 rounded ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleSubmit}
        disabled={cartItems.length === 0}
      >
        Submit
      </button>
    </div>
  );
};

export default CheckoutForm;
