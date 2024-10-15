import React, { useState } from 'react';

const InputLabel = ({ label, name, type = "text", required = false, errorMessage = "" }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [error, setError] = useState(false);

    const handleFocus = () => setIsFocused(true);

    const handleBlur = (e) => {
        setIsFocused(false);
        setIsFilled(e.target.value !== "");  // Set `isFilled` if there's any input value
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
                className={`peer w-full border-b pb-3 pt-4 outline-none 
                    transition-all duration-300 bg-white
                    ${error ? 'border-red' : ''} 
                    ${isFocused || isFilled ? 'border-green' : 'border-l-white-background'}`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => setIsFilled(e.target.value !== "")}  // Handle isFilled on change
            />
            <label
                htmlFor={name}
                className={`absolute font-F37-light left-0 top-0 transition-all duration-300 text-sm bg-none
                    ${isFocused || isFilled ? '-translate-y-6 text-xs ' : 'translate-y-2'} 
                    `}
            >
                {label}{required && '*'}
            </label>
            {error && <p className="text-red text-xs mt-1">{errorMessage || `Please complete this required field.`}</p>}
        </div>
    );
};

export default InputLabel;
