import React from 'react';
import InputLabel from './Common/InputLabel';

const StayinTheLoop = () => {
    return (
        <form className='pt-4 pl-8 flex-shrink-0 w-64'>
            <div className='flex flex-col space-y-6'>
                <h5 className="text-lg font-semibold mb-4">Stay in the loop</h5>
                
                {/* Floating Label Input for First Name */}
                <InputLabel 
                    label="First Name" 
                    name="first-name" 
                />

                {/* Floating Label Input for Last Name */}
                <InputLabel 
                    label="Last Name" 
                    name="last-name" 
                />

                {/* Floating Label Input for Email */}
                <InputLabel 
                    label="Email" 
                    name="email" 
                    type="email" 
                    required 
                />

                <p className='font-light text-sm mt-4'>
                    You can unsubscribe from communication at any time.
                </p>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className='btn-primary bg-green-600 text-primary py-2 px-4 rounded hover:bg-green-700 transition duration-300'
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default StayinTheLoop;
