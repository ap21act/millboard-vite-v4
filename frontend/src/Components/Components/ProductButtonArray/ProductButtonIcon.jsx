import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { extractNameFromUrl, generateSlug } from '../../../Utils';
import { useNavigate } from 'react-router-dom';

const ProductButtonIcon = ({ 
  product, 
  isActive = false, 
  onClick = null 
}) => {
  const navigate = useNavigate();
  const [activeState, setActiveState] = useState(isActive);

  useEffect(() => {
    if (isActive !== undefined) {
      setActiveState(isActive);
    }
  }, [isActive]);

  const handleClick = () => {
    if (onClick) onClick(product.id);

    // Generate a single slug for the product's route
    const slug = generateSlug({
      category: product.category || 'unknown-category',
      subCategory: product.subCategory || 'unknown-subcategory',
      type: product.type || 'unknown-type',
      name: product.name || 'unknown-name'
    });

    navigate(`/products/${slug}`);
  };

  return (
    <div className="flex gap-4 flex-wrap">
      <div
        onClick={handleClick}
        className={`relative rounded-full h-16 w-16 transition-transform duration-300 ease-in-out cursor-pointer ${
          activeState ? 'ring-4 ring-green' : ''
        }`}
      >
        <img
          src={product.boardImage}
          alt={extractNameFromUrl(product.boardImage)}
          className="object-cover rounded-full h-full w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

ProductButtonIcon.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    boardImage: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ProductButtonIcon;
