import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { getRandomData } from '../../../Utils'; // Adjust the path to where the utility is located

const ProductFeatures = ({ features }) => {
  // Use useMemo to prevent shuffling on every render and only pick 12 random features
  const randomFeatures = useMemo(() => getRandomData(features, 12), [features]);

  return (
    <div className='pb-20 pt-2'>
      <div className='py-8 mx-4 md:mx-8 lg:mx-16 xl:mx-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {randomFeatures.map((feature, index) => (
          <div key={index} className='pt-8'>
            <img src={feature.imgSrc} alt={feature.title} className='size-12' />
            <h5 className='my-2 font-F37-light text-lg md:text-xl leading-6'>{feature.title}</h5>
            <p className='font-F37-light text-sm leading-6'>{feature.description}</p>
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
