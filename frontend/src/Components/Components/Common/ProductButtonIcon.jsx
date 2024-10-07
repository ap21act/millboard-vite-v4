import React from 'react';
import PropTypes from 'prop-types';
import { extractNameFromUrl } from '../../../Utils/extractNameFromUrl'; // Import the utility function
import { Link } from 'react-router-dom';

const ProductButtonIcon = ({ images }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {images.map((image, index) => (
        <Link to={image.link} key={index}>
          <div className="relative rounded-full focus:outline focus:outline-2 focus:outline-offset-1 focus:outline-green h-12 w-12">
            <img
              src={image.src}
              alt={extractNameFromUrl(image.src)} // Generate alt text using the utility function
              className="object-cover rounded-full h-full w-full transition-transform duration-300 ease-in-out transform hover:scale-110 "
              loading="lazy"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

// PropTypes for validation
ProductButtonIcon.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductButtonIcon;
