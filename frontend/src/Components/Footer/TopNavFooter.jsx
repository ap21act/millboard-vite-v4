import React from 'react';
import logo from '../../Assets/Images/Logos/logo.svg';

const TopNavFooter = () => {
  return (
    <div className="flex justify-center items-center ">
      <img src={logo} alt="logo" className="w-72 h-64 transform scale-125 md:scale-150 items-center flex  " />
    </div>
  );
}

export default TopNavFooter;
