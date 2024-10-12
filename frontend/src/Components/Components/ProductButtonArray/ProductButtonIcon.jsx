import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { extractNameFromUrl } from '../../../Utils/extractNameFromUrl'; // Utility to extract alt text from URL
import { useNavigate } from 'react-router-dom';

const ProductButtonIcon = ({ image, isActive: isActiveProp, onClick }) => {
  const navigate = useNavigate();

  // Internal state only if isActiveProp is not controlled externally
  const [isActive, setIsActive] = useState(isActiveProp || false);

  // Sync internal state with prop changes if isActiveProp is provided
  useEffect(() => {
    if (isActiveProp !== undefined) {
      setIsActive(isActiveProp);
    }
  }, [isActiveProp]);

  // Handle the click and navigate to the new URL
  const handleClick = () => {
    if (onClick) {
      onClick(image); // Pass image back to parent for handling active state
    }
    navigate(`/products/${image.link}`); // Navigate using the slug
  };

  return (
    <div className="flex gap-2">
      <div
        onClick={handleClick}
        className={`relative rounded-full h-12 w-12 focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-green ${
          isActive ? 'border-4 border-green-500' : ''
        }`}
      >
        <img
          src={image.src}
          alt={extractNameFromUrl(image.src)}
          className="object-cover rounded-full h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110"
          loading="lazy"
        />
      </div>
    </div>
  );
};

// PropTypes for validation
ProductButtonIcon.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool, // Optional prop to pass external active state
  onClick: PropTypes.func,  // Optional onClick handler to control active state from parent
};

ProductButtonIcon.defaultProps = {
  isActive: false,
  onClick: null, // No default click handler
};

export default ProductButtonIcon;
