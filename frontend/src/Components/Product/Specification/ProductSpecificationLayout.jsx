import React from 'react';
import PropTypes from 'prop-types';

const ProductSpecificationLayout = ({ specifications }) => {
  return (
    <div className="py-20 mx-24 gap-x-4">
      <h1 className="mb-12 font-F37-light uppercase text-3xl">Specifications</h1>
      <div className="grid grid-cols-2 gap-y-8"> {/* Added gap-y-8 for vertical spacing between rows */}
        {specifications.map((spec, index) => (
          <div
            key={index}
            className="flex justify-between pb-6 pt-4 pr-3 border-b border-b-white-background"
          >
            <p className="text-xl">{spec.label}</p>
            <span className="text-xl font-F37-light">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

ProductSpecificationLayout.propTypes = {
  specifications: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // The label of the specification
      value: PropTypes.string.isRequired, // The value of the specification
    })
  ).isRequired,
};

export default ProductSpecificationLayout;
