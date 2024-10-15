import React, { useState } from 'react';
import InputLabel from '../Components/Common/InputLabel';
import CustomDropdown from '../Components/Common/CustomDropdown';

import { showSuccessToast, showErrorToast, showInfoToast }  from '../Components/Common/ToastNotification'; // Import the toast notifications

const CheckoutForm = () => {
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
      additionalInfo: ''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add validation logic here
      if (formData.projectLocation === 'Unknown' || formData.projectOwnerDetail === 'Unknown' || formData.projectSize === 'Unknown' || formData.projectStartTime === 'Unknown') {
        showErrorToast('Please fill out all required fields.');
        return;
      }
  
      console.log('Form Submitted', formData);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-6">CHECKOUT</h2>

            {/* First Name */}
            <InputLabel
                label="First Name"
                name="firstName"
                required
                errorMessage="First Name is required"
                onChange={handleInputChange}
            />

            {/* Last Name */}
            <InputLabel
                label="Last Name"
                name="lastName"
                required
                errorMessage="Last Name is required"
                onChange={handleInputChange}
            />

            {/* Email */}
            <InputLabel
                label="Email Address"
                name="email"
                type="email"
                required
                errorMessage="Email is required"
                onChange={handleInputChange}
            />

            {/* Telephone */}
            <InputLabel
                label="Telephone Number"
                name="telephone"
                type="tel"
                required
                errorMessage="Telephone is required"
                onChange={handleInputChange}
            />

            {/* Company Name */}
            <InputLabel
                label="Company Name"
                name="companyName"
                onChange={handleInputChange}
            />

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
            onChange={handleInputChange}
            className="mr-4"
          />
          I agree to receive other communications from Millboard.You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
        </label>
      </div>

      {/* Submit Button */}
      <button className="btn-length mt-6 min-w-full" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CheckoutForm;