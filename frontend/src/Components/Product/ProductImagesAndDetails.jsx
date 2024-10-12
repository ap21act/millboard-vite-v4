import React from 'react';
import ProductGallery from '../../Components/ProductGallery/ProductGallery';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';

const ProductImagesAndDetails = ({ product }) => {
  return (
    <div className="flex">
      {/* Product Gallery - Scrollable section */}
      <div className="flex-1 overflow-y-auto">
        <ProductGallery product={product} />
      </div>

      {/* Product Details - Static until product gallery scrolls */}
      <div className="sticky top-0 w-1/3">
        {product?.images && product?.boardSpecifications && (
          <ProductDetails product={product} />
        )}
      </div>
    </div>
  );
};

export default ProductImagesAndDetails;
