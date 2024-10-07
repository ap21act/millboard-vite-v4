import React from 'react';
import PropTypes from 'prop-types';

const ProductFeatures = ({ features }) => {
  return (
    <div className='pb-20 pt-[5.5rem]'>
      <div className='py-8 mx-4 md:mx-8 lg:mx-16 xl:mx-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {features.map((feature, index) => (
          <div key={index} className='pt-8'>
            <img src={feature.imgSrc} alt={feature.title} className='size-12' />
            <h5 className='my-2 font-F37-light text-lg md:text-xl leading-6 '>{feature.title}</h5>
            <p className='font-F37-light text-sm leading-6 '>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes to validate props
ProductFeatures.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductFeatures;
