import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getRandomData } from '../../../Utils'; // Import the getRandomData utility function

const ProductFeatures = ({ features }) => {
  const [numFeaturesToShow, setNumFeaturesToShow] = useState(12); // Default is 12 features

  // Function to determine how many features to show based on screen width
  const updateFeatureCount = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1024) {
      setNumFeaturesToShow(12); // For large screens, show 12 features
    } else if (screenWidth >= 768) {
      setNumFeaturesToShow(8); // For medium screens, show 8 features
    } else {
      setNumFeaturesToShow(4); // For small screens, show 4 features
    }
  };

  // Hook to listen to window resize event
  useEffect(() => {
    updateFeatureCount(); // Set initial feature count based on the screen size
    window.addEventListener('resize', updateFeatureCount); // Update on screen resize

    return () => window.removeEventListener('resize', updateFeatureCount); // Cleanup on unmount
  }, []);

  // Use the getRandomData function to shuffle the features and limit the number
  const shuffledFeatures = getRandomData(features, numFeaturesToShow);

  return (
    <div className='pb-20 pt-2'>
      <div className='py-8 mx-4 md:mx-8 lg:mx-16 xl:mx-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {shuffledFeatures.map((feature, index) => (
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
