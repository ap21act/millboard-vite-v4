import React from 'react';
import { extractNameFromUrl } from '../../Utils';

const TitleWithDetails = ({ 
  title, 
  subtitle, 
  head, 
  subHead,  // New subHead prop
  description, 
  imageUrl, 
  isEven  // Dynamically alternate layout based on even/odd
}) => {

  return (
    <div className={`py-12 lg:py-32 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-center lg:justify-between gap-8 lg:gap-16 w-full border-b px-4 sm:px-8`}>
      
      {/* Text Section */}
      <div className="lg:w-2/5 w-full flex flex-col justify-center text-left font-F37-light space-y-4 sm:space-y-6">
        <h5 className="text-base sm:text-lg font-medium">{subtitle}</h5>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wider">{title}</h2>
        <p className="text-sm sm:text-base leading-relaxed">{description}</p>
        <p className='text-sm sm:text-base leading-relaxed font-extrabold'>{head}</p>
        <p className="text-base leading-relaxed font-bold">{subHead}</p>  {/* subHead added */}
      </div>

      {/* Image Section */}
      <div className="lg:w-3/5 w-full flex justify-center items-center">
        <img 
          src={imageUrl} 
          alt={extractNameFromUrl(imageUrl)}
          className="w-full h-auto object-cover shadow-lg" 
          loading="lazy" 
        />
      </div>
    </div>
  );
};

export default TitleWithDetails;
