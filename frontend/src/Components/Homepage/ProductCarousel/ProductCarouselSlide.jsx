import React from 'react';
import PropTypes from 'prop-types';
import ProductButtonArray from '../../Components/ProductButtonArray/ProductButtonArray';

const ProductCarouselSlide = ({ slideData }) => {
  // Destructure the fields from slideData object
  const { header, subHeader, description, backgroundImage, type } = slideData;

  return (
    <section
      className="relative flex items-center justify-between h-[90vh] w-full bg-cover bg-center mt-4" // Set height to 90% of the viewport height
      style={{
        backgroundImage: `url(${backgroundImage})`, // Dynamically set the background image
      }}
    >
      {/* Left Section with Content */}
      <div className="bg-white bg-opacity-70 w-full md:w-1/2 h-auto flex flex-col justify-center px-10 py-8 my-6 shadow-lg md:px-14 md:py-10 lg:px-16 lg:py-12">
        {/* Header */}
        <h5 className="text-xl font-light mb-2">{header}</h5>
        
        {/* Heading with Green Line Above */}
        <div className="relative inline-block">
          <h2 className="text-4xl font-semibold my-4 inline-block">
            <div className="relative inline-block">
              <span className="absolute -top-3 right-0 inline-block h-1 w-12 bg-green"></span>
              <span className="inline-block">{subHeader}</span>
            </div>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg mb-6">{description}</p>

        {/* Color Swatches - Passing the product type dynamically */}
        <div className="flex flex-wrap gap-4 mt-4">
          <ProductButtonArray type={type} />
        </div>
      </div>
    </section>
  );
};

ProductCarouselSlide.propTypes = {
  slideData: PropTypes.shape({
    header: PropTypes.string.isRequired,       // Header of the slide
    subHeader: PropTypes.string.isRequired,    // Subheader of the slide
    description: PropTypes.string.isRequired,  // Description of the product
    backgroundImage: PropTypes.string.isRequired,  // Background image URL
    type: PropTypes.string.isRequired,         // Product type for the ProductButtonArray
  }).isRequired,
};

export default ProductCarouselSlide;
