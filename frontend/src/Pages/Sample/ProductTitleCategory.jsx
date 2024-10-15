import React from 'react';
import ProductTitle from './ProductTitle';

function ProductTitleCategory({ product, boardSpecification }) {
  return (
    <div className="pt-5">
      {/* Common section with category, type, and board width */}
      <h2 className="text-4xl font-F37-light px-3">{product.category}</h2>
      
      <div className="mt-10 flex justify-between items-end w-full px-4">
        <h2 className="text-3xl font-F37-light">{product.type}</h2>
        <p className="text-base">
          Board Width<span className="ml-2">- {boardSpecification.boardWidth}mm</span>
        </p>
      </div>

      {/* Render ProductTitle to display the products in a grid */}
      <ProductTitle products={[product]} /> {/* Pass the product(s) to ProductTitle */}
    </div>
  );
}

export default ProductTitleCategory;
