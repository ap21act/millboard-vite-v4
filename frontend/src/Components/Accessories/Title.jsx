import React from 'react';
import { extractNameFromUrl } from '../../Utils';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumb from '../Components/Common/Breadcrumb';

const Title = ({ 
  title, 
  subtitle, 
  head,
  description, 
  imageUrl, 
  buttonLabel, 
  buttonLink, 
  isEven // Dynamically alternate layout based on even/odd
}) => {
  const location = useLocation();
  
  return (
    <div className={`py-12 lg:py-32 flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-center lg:justify-between gap-8 lg:gap-16 w-full border-b px-4 sm:px-8`}>
      
      {/* Text Section */}
      <div className="lg:w-2/5 w-full flex flex-col justify-center text-left font-F37-light space-y-4 sm:space-y-6">
        <h5 className="text-base sm:text-lg font-medium">{subtitle}</h5>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl uppercase  tracking-wider">{title}</h2>
        <p className='text-sm sm:text-base leading-relaxed font-extrabold'>{head}</p>
        <p className="text-sm sm:text-base leading-relaxed">{description}</p>
        <Link 
          to={`${location.pathname}${buttonLink}`} 
          className="btn-length w-fit transition duration-300 mt-4 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {buttonLabel}
        </Link>
      </div>

      {/* Image Section */}
      <div className="lg:w-3/5 w-full flex justify-center items-center">
        <img 
          src={imageUrl} 
          alt={extractNameFromUrl(imageUrl)}
          className="w-full h-auto object-cover shadow-lg " 
          loading="lazy" 
        />
      </div>
    </div>
  );
};

export default Title;
