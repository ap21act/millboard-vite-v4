import React from 'react';
import { Link } from 'react-router-dom';

const LostHeadFixing = () => {
  return (
    <div className=" mx-auto px-4 py-12 text-center max-w-4xl">
      {/* Title */}
      <h2 className="text-3xl font-semibold mb-4">'LOST HEAD' FIXING</h2>

      {/* Subtitle */}
      <p className="text-lg mb-8">
        Durafix® fixings are virtually hidden beneath the unique Lastane® surface
      </p>

      {/* Video Section */}
      <div className="mb-8 ">
      <iframe
  src="https://player.cloudinary.com/embed/?public_id=https://res.cloudinary.com/ddtzxyzex/video/upload/v1729888845/products/Home/Videos/Millboard_Board.mp4&cloud_name=ddtzxyzex&player[showJumpControls]=false&player[showLogo]=false&player[colors][base]=%23414042&player[colors][accent]=%23AAC93C&player[colors][text]=%23F9F7F1&player[fontFace]=Fira%20Sans&autoplay=true"
  width="640"
  height="360"
  allow="fullscreen; encrypted-media; picture-in-picture"
  frameBorder="0"
  className="w-full max-w-full mx-auto shadow-md"
></iframe>


      </div>

      {/* Bottom Section */}
      <div className="flex items-right justify-center mt-8 space-x-4">
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
