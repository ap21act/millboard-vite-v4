import React from 'react';
import PropTypes from 'prop-types';

function Hero({ type, name, description }) {
  return (
    <div className='py-2 md:py-4 border-b'>
      {/* Type (e.g., Decking) */}
      <p className='mb-4 md:mb-6 font-F37-light text-center text-2xl md:text-3xl'>
        {type}
      </p>

      {/* Name (e.g., Edging & Fascia) */}
      <p className='mb-4 md:mb-6 font-F37-light text-center text-4xl md:text-5xl uppercase tracking-wider'>
        {name}
      </p>

      {/* Description */}
      <p className='mb-4 md:mb-6 font-F37-light text-center px-4 sm:px-6 md:px-9 text-sm md:text-base lg:text-lg'>
        {description}
      </p>
    </div>
  );
}

// Define PropTypes to validate props
Hero.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
