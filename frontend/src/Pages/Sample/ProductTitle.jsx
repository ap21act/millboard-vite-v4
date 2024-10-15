import React from 'react';
import CustomLink from '../../Components/Components/Common/CustomLink';
import { Link } from 'react-router-dom';

function ProductTitle({ products = [] }) { // Default to empty array if products is undefined
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {products.map((product) => (
        <div key={product._id} className="flex flex-col items-center space-y-2">
          {/* Product Image */}
          <Link to={`/products/${product.slug}`} className="w-full">
            <img
              src={product.images.boardImage}
              alt={product.name}
              className="w-full object-cover aspect-square shadow-md transition-transform duration-300 hover:scale-95"
            />
          </Link>

          <div className="text-center w-full">
            {/* Product Name */}
            <CustomLink to={`/products/${product.slug}`} className="font-F37-light text-lg sm:text-xl border-b-2 border-transparent transition-colors duration-200">
              {product.name}
            </CustomLink>

            <br />
            {/* Add/Remove Sample Button */}
            <button className="btn-length w-full mt-2 py-2 transition-all duration-300">
              Add Sample
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductTitle;
