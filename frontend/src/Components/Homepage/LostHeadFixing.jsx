import React from 'react';
import { Link } from 'react-router-dom';

const LostHeadFixing = () => {
  return (
    <div className=" mx-auto px-4 py-12 text-center max-w-4xl">
      {/* Title */}
      <h2 className="text-4xl font-semibold mb-4 uppercase">Explore the impossible</h2>

      {/* Subtitle */}
      <p className="text-xl mb-12">
        An innovative solution with sustainability in mind with perfect wooden like finish.
      </p>

      {/* Video Section */}
      <div className="mb-8 ">
      <iframe
  src="https://player.cloudinary.com/embed/?public_id=products%2FHome%2FVideos%2FMillboard_Board&cloud_name=ddtzxyzex&player[showLogo]=false&player[colors][base]=%23414042&player[colors][accent]=%23AAC93C&player[colors][text]=%23F9F7F1&player[fontFace]=Fira%20Sans&player[controlBar][volumePanel]=false&source[sourceTypes][0]=webm%2Fvp9"
  
 

  width="640"
  height="360"
  allow="fullscreen; encrypted-media; picture-in-picture"
  undefined
  allowfullscreen
  frameborder="0"
  className='w-full max-w-full mx-auto shadow-md'
></iframe>
      </div>

      {/* Bottom Section */}
      <div className="flex items-right justify-center mt-8 space-x-4">
        {/* Icon */}
        {/* <img
          src="https://res.cloudinary.com/ddtzxyzex/image/upload/v1728860324/products/Icons/Feature_Wrapper.svg" // Replace with actual icon URL
          alt="Durafix Icon"
          className="w-20 h-15"
        /> */}

        {/* Text Link */}
        {/* <div className="text-left">
          <p className="font-semibold text-gray-900">Explore us</p>
          <Link to="/about-us" className="text-green-600 hover:underline">
            Outdoors
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default LostHeadFixing;
