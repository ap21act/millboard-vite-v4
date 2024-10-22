import React, { useState } from 'react';
import InputLabel from './Common/InputLabel';

const StayinTheLoop = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(''); // State to manage email validation error

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        // Get email value from the form
        const email = e.target.email.value;
        
        // Email validation: show error if email is not filled
        if (!email) {
            setEmailError("Please complete this email."); // Show error if email is empty
            return; // Prevent form submission
        }

        // Reset the error state if the email is valid
        setEmailError(''); 

        // Mark the form as submitted
        setIsSubmitted(true); 
    };

    return (
        <div className='pt-4 pl-8 flex-shrink-0 w-64'>
            {isSubmitted ? (
                <div className="text-center">
                    <h5 className="text-lg font-semibold my-10">Thank you for staying with us.</h5>
                </div>
            ) : (
                <form onSubmit={handleSubmit} noValidate className='flex flex-col space-y-6'>
                    <h5 className="text-lg font-semibold mb-4">Stay in the loop</h5>
                    
                    {/* Optional Floating Label Input for First Name */}
                    <InputLabel 
                        label="First Name" 
                        name="first-name" 
                    />

                    {/* Optional Floating Label Input for Last Name */}
                    <InputLabel 
                        label="Last Name" 
                        name="last-name" 
                    />

                    {/* Required Floating Label Input for Email with validation */}
                    <InputLabel 
                        label="Email" 
                        name="email" 
                        type="email" 
                        required 
                        errorMessage={emailError} // Display the custom error message if present
                    />

                    <p className='font-light text-sm mt-4'>
                        You can unsubscribe from communication at any time.
                    </p>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className='btn-length'
                    >
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default StayinTheLoop;
