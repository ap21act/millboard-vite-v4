import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
<<<<<<< Updated upstream
import { extractNameFromUrl } from '../../../Utils/extractNameFromUrl';
=======
import { extractNameFromUrl, generateSlug } from '../../../Utils';
>>>>>>> Stashed changes
import { useNavigate } from 'react-router-dom';

const ProductButtonIcon = ({ image, isActive: isActiveProp = false, onClick = null }) => {
  const navigate = useNavigate();

  // Internal state only if isActiveProp is not controlled externally
  const [isActive, setIsActive] = useState(isActiveProp);

  // Sync internal state with prop changes if isActiveProp is provided
  useEffect(() => {
    if (isActiveProp !== undefined) {
      setIsActive(isActiveProp);
    }
  }, [isActiveProp]);

  // Handle the click and navigate to the new URL
  const handleClick = () => {
<<<<<<< Updated upstream
    if (onClick) {
      onClick(image); // Pass image back to parent for handling active state
    }
    navigate(`/products/${image.link}`); // Navigate using the slug
=======
    if (onClick) onClick(product.id);

    // Generate a single slug for the product's route
    const slug = generateSlug({
      category: product.category || 'unknown-category',
      subCategory: product.subCategory || 'unknown-subcategory',
      type: product.type || 'unknown-type',
      name: product.name || 'unknown-name'
    });

    navigate(`/products/${slug}`);
>>>>>>> Stashed changes
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <div
        onClick={handleClick}
        className={`relative rounded-full h-16 w-16 transition-transform duration-300 ease-in-out cursor-pointer ${
          isActive ? 'ring-4 ring-green' : ''
        }`}
      >
        <img
          src={image.src}
          alt={extractNameFromUrl(image.src)}
          className="object-cover rounded-full h-full w-full"
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

export default ProductButtonIcon;
