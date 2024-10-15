import React, { useState } from 'react';

const CustomDropdown = ({ label, name, options = [], required = false, value, onChange, errorMessage }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(value !== '');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setIsFilled(e.target.value !== '');
    if (required && e.target.value === 'Unknown') {
      // Handle the error for unknown selection
      alert(errorMessage || 'Please select a valid option');
    }
  };

  return (
    <div className="relative mb-6">
      <label
        htmlFor={name}
        className={`absolute left-0 top-0 transition-all duration-300 text-sm bg-none
          ${isFocused || isFilled ? '-translate-y-6 text-xs ' : 'translate-y-2'} `}
      >
        {label}{required && '*'}
      </label>
      <select
        name={name}
        id={name}
        required={required}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={value}
        className={`peer w-full border-b pb-3 pt-4 outline-none 
          transition-all duration-300 bg-white text-primary 
          ${isFocused || isFilled ? 'border-primary' : 'border-gray-300'} 
          ${required && value === 'Unknown' ? 'border-red-500' : ''}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
