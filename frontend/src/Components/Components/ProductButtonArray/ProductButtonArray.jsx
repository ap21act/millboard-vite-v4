import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductButtonIcon from './ProductButtonIcon';

const ProductButtonArray = ({ type }) => {
  const allProducts = useSelector((state) => state.product.allProducts);

  // Filter products by `type`
  const filteredProducts = allProducts.filter(
    (product) => product.type.toLowerCase() === type.toLowerCase()
  );

  const [activeProductId, setActiveProductId] = useState(null);

  const handleProductClick = (clickedProductId) => {
    setActiveProductId(clickedProductId);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductButtonIcon
            key={product._id}
            product={{
              id: product._id,
              boardImage: product.images.boardImage,
              category: product.category,
              subCategory: product.subCategory,
              type: product.type,
              name: product.name,
            }}
            isActive={activeProductId === product._id}
            onClick={() => handleProductClick(product._id)}
          />
        ))
      ) : (
        <p>No products found for type: {type}</p>
      )}
    </div>
  );
};

export default ProductButtonArray;
