import React from 'react';
import { extractNameFromUrl } from '../../Utils';

const HeroImages = ({ imageLeft, imageRight }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-1 w-full">
      {/* Left Image Container */}
      <div className="w-full sm:w-1/2 lg:w-2/3 h-[20rem] sm:h-[34rem]">
        <img 
          src={imageLeft}
          srcSet={`${imageLeft}?w=400 400w, ${imageLeft}?w=800 800w, ${imageLeft}?w=1200 1200w`}
          sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
          alt={extractNameFromUrl(imageLeft)}
          className="object-cover w-full h-full"
          loading="lazy" // Lazy-load the image
        />
      </div>

      {/* Right Image Container */}
      <div className="w-full sm:w-1/2 lg:w-1/3 h-[20rem] sm:h-[34rem]">
        <img 
          src={imageRight}
          srcSet={`${imageRight}?w=400 400w, ${imageRight}?w=800 800w, ${imageRight}?w=1200 1200w`}
          sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
          alt={extractNameFromUrl(imageRight)}
          className="object-cover w-full h-full"
          loading="lazy" // Lazy-load the image
        />
      </div>
    </div>
  );
};

export default HeroImages;
