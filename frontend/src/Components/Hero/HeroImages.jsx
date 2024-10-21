import React from 'react';
import { extractNameFromUrl } from '../../Utils';

const HeroImages = ({ imageLeft, imageRight }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 w-full h-auto sm:h-[34rem]">
      {/* Left Image Container */}
      <div className="w-full sm:w-1/2 lg:w-2/3">
        <img 
          src={imageLeft} 
          alt={extractNameFromUrl(imageLeft)}
          className="object-cover w-full h-full sm:h-[34rem] max-h-[20rem] sm:max-h-full"
        />
      </div>
      {/* Right Image Container */}
      <div className="w-full sm:w-1/2 lg:w-1/3">
        <img 
          src={imageRight} 
          alt={extractNameFromUrl(imageRight)}
          className="object-cover w-full h-full sm:h-[34rem] max-h-[20rem] sm:max-h-full"
        />
      </div>
    </div>
  );
};

export default HeroImages;
