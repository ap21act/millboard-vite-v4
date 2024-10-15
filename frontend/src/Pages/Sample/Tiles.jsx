import React from 'react';
import ProductTitleCategory from './ProductTitleCategory';

function Tiles({ filteredProducts }) {
  return (
    <div>
      {filteredProducts.map((product) => (
        product.boardSpecifications.map((spec) => (
          <ProductTitleCategory
            key={spec.sku}
            product={product}
            boardSpecification={spec}  // Pass individual board spec (width, sku)
          />
        ))
      ))}
    </div>
  );
}

export default Tiles;
