import React, { useState } from 'react';
import InputLabel from '../Components/Common/InputLabel'; // Use your existing InputLabel component
import axios from 'axios';

const AddressSearch = ({ onSelectAddress }) => {
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

  const API_KEY = 'a_gtsF55ZUOG57V9OSYqnA44199'; // Your API key

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

  const handleAddressSelection = (selected) => {
    setSelectedAddress(selected);
    setInputValue('');
    setAddressSuggestions([]);
    onSelectAddress(selected.address); // Callback to parent form
    // Pre-fill manual address fields when an address is selected
    setManualAddress({
      addressLine1: selected.address.split(', ')[0] || '',
      addressLine2: selected.address.split(', ')[1] || '',
      postcode: '', // Pre-fill these if your API provides this info
      city: selected.address.split(', ')[2] || '',
      country: 'United Kingdom',
    });
  };

  const handleManualChange = (e) => {
    const { name, value } = e.target;
    setManualAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveAddress = () => {
    if (!manualAddress.addressLine1 || !manualAddress.postcode || !manualAddress.city) {
      alert('Please complete all required fields.');
      return;
    }
    setSelectedAddress({
      address: `${manualAddress.addressLine1}, ${manualAddress.addressLine2}, ${manualAddress.city}, ${manualAddress.postcode}, ${manualAddress.country}`,
    });
    setManualMode(false); // Exit manual mode after editing
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Search Address</h2>

      {/* Search input for address, even in manual mode */}
      <InputLabel
        label="Search Address"
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
            <p>{selectedAddress.address}</p>
            <button
              type="button"
              className="text-blue-600 underline"
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
          {/* Address Fields */}
          <InputLabel
            label="Address Line 1 *"
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
            label="ZIP/Postal Code *"
            name="postcode"
            value={manualAddress.postcode}
            required
            onChange={handleManualChange}
          />

          <InputLabel
            label="City/Town *"
            name="city"
            value={manualAddress.city}
            required
            onChange={handleManualChange}
          />

          <InputLabel
            label="Country *"
            name="country"
            value={manualAddress.country}
            required
            readOnly
          />

          <button
            type="button"
            className="text-blue-600 underline mt-2"
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
