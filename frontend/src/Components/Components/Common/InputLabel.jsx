import React, { useState } from 'react';

const InputLabel = ({ label, name, type = "text", required = false, errorMessage = "", options = [] }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [error, setError] = useState(false);

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e) => {
        setIsFocused(false);
        setIsFilled(e.target.value !== "");
        if (required && e.target.value === "") {
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <div className="relative mb-6">
            {/* Conditional rendering for input or select */}
            {options.length > 0 ? (
                <select
                    id={name}
                    name={name}
                    required={required}
                    className={`peer w-full border-b pb-3 pt-4 outline-none 
                        transition-all duration-300 bg-white
                        ${error ? 'border-red' : ''} 
                        ${isFocused || isFilled ? 'border-green' : 'border-l-white-background'}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={(e) => setIsFilled(e.target.value !== "")}
                >
                    <option value="" disabled selected>{label}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    required={required}
                    className={`peer w-full border-b pb-3 pt-4 outline-none 
                        transition-all duration-300 bg-white
                        ${error ? 'border-red' : ''} 
                        ${isFocused || isFilled ? 'border-green' : 'border-l-white-background'}`}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={(e) => setIsFilled(e.target.value !== "")}
                />
            )}
            
            {/* Label */}
            <label
                htmlFor={name}
                className={`absolute font-F37-light left-0 top-0 transition-all duration-300 text-sm bg-none
                    ${isFocused || isFilled ? '-translate-y-6 text-xs ' : 'translate-y-2'} 
                `}
            >
                {label}{required && '*'}
            </label>
            {/* Error message */}
            {error && <p className="text-red text-xs mt-1">{errorMessage || `Please complete this required field.`}</p>}
        </div>
    );
};

export default InputLabel;
