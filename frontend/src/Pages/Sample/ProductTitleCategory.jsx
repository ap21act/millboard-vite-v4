import React from 'react';
import ProductTitle from './ProductTitle';

function ProductTitleCategory({ category, type, boardWidth, products }) {
  return (
    <div className="pt-5">
      {/* Common section with category, type, and board width */}
      <h2 className="text-4xl font-F37-light px-3">{category}</h2>
      
      <div className="mt-10 flex justify-between items-end w-full px-4">
        <h2 className="text-3xl font-F37-light">{type}</h2>
        <p className="text-base">
          Board Width<span className="ml-2">- {boardWidth !== 'N/A' ? `${boardWidth}mm` : 'N/A'}</span>
        </p>
      </div>

      {/* Render ProductTitle to display the products in a grid */}
      <ProductTitle products={products} /> {/* Pass all products in this group */}
    </div>
  );
}

export default ProductTitleCategory;
