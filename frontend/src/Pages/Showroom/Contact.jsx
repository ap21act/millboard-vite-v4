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
  };

  return (
    <div className="p-10 w-full max-w-lg">
      {/* Header Section */}
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-3xl font-semibold  text-center">Contact Us</h2>
        <p className="text-center">
          We are here to help you. If you have any questions, please do not hesitate to contact us.
        </p>
      </div>

      {/* Contact Form */}
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputLabel label="First Name" placeholder="Your First Name" required />
          <InputLabel label="Last Name" placeholder="Your Last Name" required />
        </div>
        <InputLabel label="Email Address" placeholder="Your Email" required type="email" />
        <InputLabel label="Telephone Number" placeholder="Your Phone Number" required type="tel" />

        {/* Enquiry Message Section */}
        <div className="flex flex-col">
          <label className="text-sm font-light text-gray-700 mb-2">Enquiry Type</label>
          <textarea
            className="p-3 w-full border border-gray-300 focus:border-gray-500 focus:outline-none rounded-md text-gray-700"
            rows="5"
            placeholder="Enter your enquiry"
          />
        </div>

        {/* Checkbox for Opt-in */}
        <div className="flex items-start gap-3 mt-4">
          <div
            onClick={handleCheckboxChange}
            className={`w-5 h-5 border ${optInChecked ? 'border-gray-600' : 'border-gray-300'} flex justify-center items-center cursor-pointer`}
          >
            {optInChecked && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5 text-gray-700"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <label
            onClick={handleCheckboxChange}
            className="cursor-pointer text-gray-600"
          >
            Opt-in to receive the latest offers, updates, and news from Living Outdoors.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 py-3 px-8 bg-transparent border border-gray-500 text-gray-700 hover:bg-gray-100 rounded-md tracking-wide"
          onClick={handleFormSubmit}
        >
          SEND ENQUIRY
        </button>
      </form>
    </div>
  );
}

export default Contact;
