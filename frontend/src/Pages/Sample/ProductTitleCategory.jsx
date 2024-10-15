import React from 'react';
import ProductTitle from './ProductTitle';

function ProductTitleCategory({ category, type, boardWidth, products, hasRenderedCategory, hasRenderedType }) {
  return (
    <div className="pt-5">
      {/* Conditionally render category if it hasn't been rendered */}
      {!hasRenderedCategory && <h2 className="text-4xl font-F37-light px-3">{category}</h2>}

      <div className="flex justify-between items-center mt-10 px-4">
        {/* Conditionally render type if it hasn't been rendered */}
        {!hasRenderedType && (
          <h2 className="text-3xl font-F37-light mr-4">{type}</h2>
        )}

        {/* Always render board width */}
        <p className="text-base ">
          Board Width<span className="ml-2">- {boardWidth !== 'N/A' ? `${boardWidth}mm` : 'N/A'}</span>
        </p>
      </div>

      {/* Render ProductTitle to display the products in a grid */}
      <ProductTitle products={products} />
    </div>
  );
}

export default ProductTitleCategory;
