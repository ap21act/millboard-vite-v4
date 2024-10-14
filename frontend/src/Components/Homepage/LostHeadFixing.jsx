import React from 'react';
import { Link } from 'react-router-dom';

const LostHeadFixing = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-center max-w-4xl">
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-4">'LOST HEAD' FIXING</h2>

      {/* Subtitle */}
      <p className="text-lg  mb-8">
        Durafix® fixings are virtually hidden beneath the unique Lastane® surface
      </p>

      {/* Video Section */}
      <div className="mb-8">
        <video controls className="w-full max-w-3xl mx-auto  shadow-md">
          <source
            src="https://example.com/path-to-video.mp4" // Replace with actual video URL
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-center mt-8 space-x-4">
        {/* Icon */}
        <img
          src="https://res.cloudinary.com/ddtzxyzex/image/upload/v1728860324/products/Icons/Feature_Wrapper.svg" // Replace with actual icon URL
          alt="Durafix Icon"
          className="w-20 h-15"
        />

        {/* Text Link */}
        <div className="text-left">
          <p className="font-semibold text-gray-900">Featured Product</p>
          <Link to="/explore-more" className="text-green-600 hover:underline">
          Durafix®
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LostHeadFixing;
