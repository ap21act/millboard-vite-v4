import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputLabel from '../Components/Common/InputLabel';
import AddressSearch from './AddressSearch';
import CustomDropdown from '../Components/Common/CustomDropdown';
import { showSuccessToast, showErrorToast } from '../Components/Common/ToastNotification';
import axios from 'axios';
import { clearCart } from '../../Redux/Slices/cartSlice'; // Assuming this is the correct path

const CheckoutForm = () => {
  // Fetch cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to manage form data and loading state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    companyName: '',
    projectLocation: 'Unknown',
    projectOwnerDetail: 'Unknown',
    projectSize: 'Unknown',
    projectStartTime: 'Unknown',
    additionalInfo: false,
    selectedAddress: '',
    enquiryMessage: '',
  });
  const [loading, setLoading] = useState(false); // Loading state

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

    setLoading(true); // Start loading

    try {
      // Prepare the data for the API request
      const requestData = {
        formData,
        cartItems,
      };

      // Send POST request to the API
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/email/send-order-email`, requestData);

      // If successful, show a success toast, clear cart, and navigate to Thank You page
      if (response.status === 201) {
        showSuccessToast('Order email sent successfully!');
        dispatch(clearCart()); // Clear the cart
        navigate('/thank-you'); // Redirect to Thank You page
      } else {
        showErrorToast('Failed to send order email. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      showErrorToast('An error occurred while sending the email. Please try again later.');
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <h2 className="text-3xl font-semibold mb-6">Checkout Form</h2>

      {/* Loading Animation Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex justify-center items-center z-50">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}

      {/* Checkout Form */}
      <form onSubmit={handleSubmit} className="">
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
            I agree to receive other communications from Living Outdoors. You can unsubscribe at any time.
          </label>
        </div>

        {/* Enquiry Message Field */}
        <div className="flex flex-col">
          <span className=' font-bold text-lg'>Enquiry Message</span>
          <textarea
            name="enquiryMessage"
            value={formData.enquiryMessage}
            onChange={handleInputChange}
            className="mt-2 p-3 w-full border-b-white-background bg-white focus:border-b-green border-b-2 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`btn-length mt-6 min-w-full py-2 px-4 rounded ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={cartItems.length === 0 || loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
