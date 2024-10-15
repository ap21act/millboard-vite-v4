import React from 'react';
import ProductTitleCategory from './ProductTitleCategory';

const Tiles = ({ filteredProducts }) => {
  return (
    <div>
      {Object.values(filteredProducts).map((group, index) => (
        <ProductTitleCategory
          key={index}
          category={group.category}
          type={group.type}
          boardWidth={group.boardWidth}
          products={group.products} // Pass all products for this group
        />
      ))}
    </div>
  );
};

export default Tiles;
