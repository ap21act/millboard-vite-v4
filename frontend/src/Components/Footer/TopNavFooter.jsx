import React from 'react';
import logo from '../../Assets/Images/Logos/logo.svg';

const TopNavFooter = () => {
  return (
    <div className="flex justify-center items-center">
      <img 
        src={logo} 
        alt="logo" 
        className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 transform scale-100 sm:scale-110 md:scale-125 lg:scale-150"
      />
    </div>
  );
}

export default TopNavFooter;
