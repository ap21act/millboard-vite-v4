import React, { useState } from 'react';
import InputLabel from '../Components/Common/InputLabel'; // Your existing InputLabel component
import AddressSearch from './AddressSearch'; // The AddressForm component with manual entry functionality
import axios from 'axios';

const CheckoutForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    selectedAddress: '',
  });

  // Update form data on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Update form data with the selected address
  const handleAddressSelection = (selectedAddress) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedAddress,
    }));
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data to send to the backend
    const dataToSend = {
      formData, // All user-entered form data
    };

    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:YOUR_PORT/api/checkout', dataToSend);
      alert('Form submitted successfully! Check the console for details.');
      console.log('Response from server:', response.data);
    } catch (error) {
      alert('Failed to submit form. Please try again.');
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

      {/* Address Form */}
      <AddressSearch onSelectAddress={handleAddressSelection} />

      {/* Submit Button */}
      <button className="btn-length mt-6 min-w-full  py-2 px-4 rounded" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CheckoutForm;
