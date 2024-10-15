import React, { useState } from 'react';
import InputLabel from '../../Components/Components/Common/InputLabel';

function Contact() {
  // Checkbox state for opt-in
  const [optInChecked, setOptInChecked] = useState(false);

  // Toggle the checkbox
  const handleCheckboxChange = () => {
    setOptInChecked(!optInChecked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  }

  return (
    <div className="p-6 bg-white shadow-lg  w-full max-w-lg">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-3xl font-semibold  text-center">Contact Us</h2>
        <p className="text-center">
          We are here to help you. If you have any questions, please do not hesitate to contact us.
        </p>
      </div>

      {/* Contact Form */}
      <form className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputLabel label="First Name" placeholder="Your First Name" required />
          <InputLabel label="Last Name" placeholder="Your Last Name" required />
        </div>
        <InputLabel label="Email Address" placeholder="Your Email" required type="email" />
        <InputLabel label="Telephone Number" placeholder="Your Phone Number" required type="tel" />

        {/* Enquiry Message Section (Span) */}
        <div className="flex flex-col">
          <span className=' font-F37-light text-sm '>Enquiry Message</span>
          <textarea 
            
            className="mt-2 p-3 w-full border-b border-b-white-background bg-white   focus:border-b-green focus:outline-none"
          />
        </div>

        {/* Checkbox for Opt-in */}
        <div className="flex items-center gap-2 mt-4">
          <div
            onClick={handleCheckboxChange}
            className={`w-8 h-8 border-2 ${optInChecked ? '' : ''} flex justify-center items-center cursor-pointer`}
          >
            {optInChecked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <label
            onClick={handleCheckboxChange}
            className=" cursor-pointer"
          >
            Opt-in to receive the latest offers, updates, and news from Living Outdoors.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn-length"
          onClick={handleFormSubmit}
        >
          SEND ENQUIRY
        </button>
      </form>
    </div>
  );
}

export default Contact;
