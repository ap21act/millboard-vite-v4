import React, { useState } from 'react';

const InputLabel = ({ label, name, type = "text", required = false, errorMessage = "" }) => {
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
            <input
                id={name}
                name={name}
                type={type}
                required={required}
                className={`peer w-full border-b  pb-3 pt-4 outline-none 
                    transition-all duration-300 bg-white
                    ${error ? 'border-red' : 'border-l-white-background '} 
                    ${isFocused || isFilled ? 'border-green' : ''}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <label
                htmlFor={name}
                className={`absolute left-0 top-0 text-gray-500 transition-all duration-300 text-sm bg-none
                    ${isFocused || isFilled ? '-translate-y-6 text-xs text-gray-700' : 'translate-y-2'} 
                     `}
            >
                {label}{required && '*'}
            </label>
            {error && <p className="text-red text-xs mt-1">{errorMessage || `Please complete this required field.`}</p>}
        </div>
    );
};

export default InputLabel;