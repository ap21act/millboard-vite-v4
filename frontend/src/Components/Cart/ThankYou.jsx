import React from 'react';
import Breadcrumb from '../Components/Common/Breadcrumb';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <>
      <Breadcrumb
        category="Checkout"
        name="Thank You"
        disableClick={{ home: false, category: true, subCategory: false, type: true }}
      />

      <div className="py-20 px-6 md:px-12 lg:px-24 font-F37-light text-center">
        {/* Header Section */}
        <p className="text-center text-2xl md:text-3xl lg:text-4xl font-F37-light mb-6 md:mb-9">
          <span className="border-b border-white-background border-spacing-y-2">We&apos;ve got your order</span>
        </p>

        {/* Main Title */}
        <p className="text-center text-3xl md:text-4xl lg:text-5xl font-F37-light mb-8 md:mb-14 uppercase">
          Thank you for your order
        </p>

        {/* Message Section */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-F37-light mb-6 md:mb-8">
            Your sample request has been received and should be with you within 3-5 working days.
          </p>

          <p className="text-sm md:text-lg font-F37-light">
            If you need to speak to us before then, simply drop us an email, give us a call, or use our contact form — we’re always happy to help.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center mt-10 gap-4">
          <Link
            to='/products/decking/collection'
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 text-sm text-white bg-primary border rounded-lg gap-x-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 rtl:rotate-180"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            <span>Explore Decking</span>
          </Link>

          <Link to="/">
            <button className="w-full sm:w-auto px-8 py-4 text-sm tracking-wide text-white bg-green rounded-lg">
              Take me home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
