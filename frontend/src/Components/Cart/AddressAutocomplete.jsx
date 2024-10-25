import React, { useState } from 'react';
import axios from 'axios';

const AddressAutocomplete = ({ onSelectAddress }) => {
  const [inputValue, setInputValue] = useState('');
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // State to manage errors

  const API_KEY = import.meta.env.VITE_GETADDRESS_API_KEY; // Your API key

  // Handle input change for the address search
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length >= 3) {
      setLoading(true);
      setError(null); // Clear any previous errors
      try {
        // Call the GetAddress.io API
        const requestUrl = `https://api.getAddress.io/autocomplete/${encodeURIComponent(value)}?api-key=${API_KEY}`;
        console.log('Making API request to:', requestUrl); // Debug log
        const response = await axios.get(requestUrl);

        // Check if response contains the expected data
        if (response.data && response.data.suggestions) {
          setAddressSuggestions(response.data.suggestions);
        } else {
          console.warn('Unexpected API response:', response); // Log unexpected response
          setError('Unexpected response format from API.');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching addresses:', error); // Log any API-related errors
        setError('Failed to fetch address suggestions. Please try again.');
        setLoading(false);
      }
    } else {
      setAddressSuggestions([]);
    }
  };

  // Handle address selection
  const handleAddressSelection = (selectedAddress) => {
    setInputValue(selectedAddress.address); // Use the address field from the object
    setAddressSuggestions([]); // Clear suggestions after selection
    onSelectAddress(selectedAddress.address); // Callback to parent form with just the address
  };

  return (
    <div className="address-autocomplete mb-4">
      <label className="block text-sm font-medium mb-1">Search Address</label>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a part of the address"
        className="input-field"
      />
      {loading && <p>Loading suggestions...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {addressSuggestions.length > 0 && (
        <ul className="bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto">
          {addressSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleAddressSelection(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-100"
            >
              {suggestion.address} {/* Render only the address field */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddressAutocomplete;
