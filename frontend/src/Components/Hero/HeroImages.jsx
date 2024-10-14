import React from 'react';
import { extractNameFromUrl } from '../../Utils';

const HeroImages = ({ imageLeft, imageRight }) => {
  return (
    <div className='flex flex-nowrap gap-1 p-4 lg:px-6 lg:h-[34rem] max-w-screen-xl'>
      {/* Left Image Container */}
      <div className='w-1/2 lg:w-2/3'>
        <img 
          src={imageLeft} 
          alt={extractNameFromUrl(imageLeft)}
          className='object-cover w-full h-full'
        />
      </div>
      {/* Right Image Container */}
      <div className='w-1/2 lg:w-1/3'>
        <img 
          src={imageRight} 
          alt={extractNameFromUrl(imageRight)}
          className='object-cover w-full h-full'
        />
      </div>
    </div>
  );
};

export default HeroImages;
