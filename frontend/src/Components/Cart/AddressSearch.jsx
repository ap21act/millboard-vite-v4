import React, { useState } from 'react';
import InputLabel from '../Components/Common/InputLabel'; // Use your existing InputLabel component
import axios from 'axios';

const AddressSearch = ({ onSelectAddress }) => {
  // State variables
  const [inputValue, setInputValue] = useState('');
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [manualMode, setManualMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [manualAddress, setManualAddress] = useState({
    addressLine1: '',
    addressLine2: '',
    postcode: '',
    city: '',
    country: 'United Kingdom',
  });

  const API_KEY = import.meta.env.VITE_GETADDRESS_API_KEY; // Your API key

  // Function to handle input changes and fetch address suggestions
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length >= 3) {
      setLoading(true);
      try {
        const requestUrl = `https://api.getAddress.io/autocomplete/${encodeURIComponent(value)}?api-key=${API_KEY}`;
        const response = await axios.get(requestUrl);

        if (response.data && response.data.suggestions) {
          setAddressSuggestions(response.data.suggestions);
        } else {
          setAddressSuggestions([]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching addresses:', error);
        setLoading(false);
      }
    } else {
      setAddressSuggestions([]);
    }
  };

  // Function to validate and fetch the full address
  const validateAddress = async (address) => {
    setLoading(true);
    try {
      const requestUrl = `https://api.getAddress.io/validate/${encodeURIComponent(address)}?api-key=${API_KEY}`;
      const response = await axios.get(requestUrl);

      if (response.data && response.data.address) {
        const addressData = response.data.address;

        // Debug: Check the structure of the address data
        console.log('Validated Address Data:', addressData);

        // Safely extract data fields based on the response structure
        const postcode = addressData.postcode || '';
        const line1 = addressData.line_1 || '';
        const line2 = addressData.line_2 || '';
        const town = addressData.town_or_city || '';
        const country = addressData.country || 'United Kingdom';

        // Update manual address fields with fetched data
        setManualAddress({
          addressLine1: line1,
          addressLine2: line2,
          postcode: postcode,
          city: town,
          country: country,
        });

        // Set selected address for display
        setSelectedAddress(`${line1}, ${line2}, ${town}, ${country}, ${postcode}`);

        if (onSelectAddress) {
          onSelectAddress(addressData); // Callback if needed
        }
      } else {
        console.error('Address validation failed');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error validating address:', error);
      setLoading(false);
    }
  };

  // Function to handle address selection from the dropdown
  // Function to handle address selection from the dropdown
const handleAddressSelection = async (suggestion) => {
  setInputValue(''); // Clear the search input after selection
  setAddressSuggestions([]);

  // Validate the selected address using the validation API
  validateAddress(suggestion.address);
};

  // Handle manual address input changes
  const handleManualChange = (e) => {
    const { name, value } = e.target;
    setManualAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save manually entered address
  // Save manually entered address
const handleSaveAddress = () => {
  if (!manualAddress.addressLine1 || !manualAddress.postcode || !manualAddress.city) {
    alert('Please complete all required fields.');
    return;
  }

  // Create a formatted string from manualAddress fields
  const formattedAddress = `${manualAddress.addressLine1}, ${manualAddress.addressLine2}, ${manualAddress.city}, ${manualAddress.postcode}, ${manualAddress.country}`;
  
  setSelectedAddress(formattedAddress); // Ensure this is a string
  setManualMode(false); // Exit manual mode after saving
};

  return (
    <div className="container mx-auto  py-8">

      {/* Address search input */}
      <InputLabel
        label="Search Address /Postcode"
        name="search"
        value={inputValue}
        onChange={handleInputChange}
      />
      {loading && <p>Loading suggestions...</p>}
      {addressSuggestions.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto">
          {addressSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleAddressSelection(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion.address}
            </li>
          ))}
        </ul>
      )}

      
      {/* Step 2: Address Selected View */}
{selectedAddress && !manualMode && (
  <div className="mb-4">
    <div className="border-b pb-4 mb-4">
      {/* Ensure selectedAddress is a string before rendering */}
      <p>{typeof selectedAddress === 'string' ? selectedAddress : 'Address not available'}</p>
      <button
        type="button"
        className=" underline"
        onClick={() => setManualMode(true)}
      >
        Edit address
      </button>
    </div>
  </div>
)}


      {/* Step 3: Manual Entry/Edit View */}
      {manualMode && (
        <div>
          {/* Address Fields using InputLabel */}
          <InputLabel
            label="Address Line 1 "
            name="addressLine1"
            value={manualAddress.addressLine1}
            required
            onChange={handleManualChange}
          />

          <InputLabel
            label="Address Line 2"
            name="addressLine2"
            value={manualAddress.addressLine2}
            onChange={handleManualChange}
          />

          <InputLabel
            label="ZIP/Postal Code "
            name="postcode"
            value={manualAddress.postcode}
            required
            onChange={handleManualChange}
          />

          <InputLabel
            label="City/Town "
            name="city"
            value={manualAddress.city}
            required
            onChange={handleManualChange}
          />

          <InputLabel
            label="Country "
            name="country"
            value={manualAddress.country}
            required
            readOnly
          />

          <button
            type="button"
            className=" hover:text-red underline mt-2"
            onClick={handleSaveAddress}
          >
            Save Address
          </button>
        </div>
      )}
    </div>
  );
};

export default AddressSearch;
