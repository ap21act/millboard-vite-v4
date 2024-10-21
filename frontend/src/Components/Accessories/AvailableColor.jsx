import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../Redux/Slices/productSlice'; // Ensure this is the correct action
import { extractNameFromUrl } from '../../Utils';
import CustomLink from '../../Components/Components/Common/CustomLink';
import { Link } from 'react-router-dom';

function AvailableColor({ productType = 'Enhanced Grain' }) {
  const dispatch = useDispatch();

  // Fetch all products from Redux
  const allProducts = useSelector((state) => state.product.allProducts);

  useEffect(() => {
    // Fetch products on component mount
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // Filter products by type (e.g., Enhanced Grain)
  const filteredProducts = allProducts.filter((product) => product.type === productType);

  return (
    <div className="p-4">
      {/* Section for Filtered Products by Type */}
      <div>
        <h2 className="text-4xl font-bold mb-4 text-center font-F37-light uppercase my-7">available colours</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-8">
          {filteredProducts.map((product) => (
            <div key={product._id} className="flex flex-col items-start space-y-2"> {/* Change items-center to items-start for left alignment */}
              {/* Product Image */}
              <Link to={`/products/${product.slug}`} className="w-full">
                <img
                  src={product.images.boardImage}
                  alt={extractNameFromUrl(product.images.boardImage)}
                  className="w-full object-cover aspect-square shadow-md transition-transform duration-300 hover:scale-95"
                />
              </Link>

              <div className="w-full">
  {/* Product Type and Name */}
  <div className="text-left">
    <p className="font-F37-light text-md sm:text-md border-transparent transition-colors duration-200">
      {product.type}
    </p>
    <p className="text-lg mt-1">
      {product.name}
    </p>
  </div>
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableColor;
