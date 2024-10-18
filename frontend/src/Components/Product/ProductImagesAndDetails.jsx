import React from 'react';
import ProductGallery from '../../Components/ProductGallery/ProductGallery';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';

const ProductImagesAndDetails = ({ product }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Product Gallery - Appears on top for small screens, and on the left for larger screens */}
      <div className="flex-1 lg:overflow-y-auto">
        <ProductGallery product={product} />
      </div>

      {/* Product Details - Appears below ProductGallery for small screens, and on the right for larger screens */}
      <div className="w-full lg:w-1/3 lg:sticky lg:top-0 mt-4 lg:mt-0">
        {product?.images && product?.boardSpecifications && (
          <ProductDetails product={product} />
        )}
      </div>
    </div>
  );
};

export default ProductImagesAndDetails;
