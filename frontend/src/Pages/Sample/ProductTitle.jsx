import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showSuccessToast, showErrorToast, showInfoToast }  from '../../Components/Components/Common/ToastNotification'; // Import the toast notifications
import CustomLink from '../../Components/Components/Common/CustomLink';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../Redux/Slices/cartSlice';

function ProductTitle({ products = [] }) {
  const dispatch = useDispatch();
  
  // Get the items from the cart
  const cartItems = useSelector((state) => state.cart.items);

  // Function to check if a product is already in the cart
  const isInCart = (productId, sku) => {
    return cartItems.some(item => item.productId === productId && item.sku === sku);
  };

  // Handle adding to cart
  const handleAddToCart = (product, specification) => {
    if (cartItems.length >= 3) {
      showErrorToast('You can only add up to 3 samples to the cart.');
      return;
    }

    const cartItem = {
      productId: product._id,
      name: product.name,
      subCategory: product.subCategory,
      type: product.type,
      category: product.category,
      sku: specification.sku,
      boardWidth: specification.boardWidth,
      boardLength: specification.length,
      boardBreadth: specification.breadth,
      boardHeight: specification.height,
      quantity: 1,
      boardImage: product.images.boardImage,
    };

    dispatch(addToCart(cartItem));
    showSuccessToast('Sample added to cart successfully!');
  };

  // Handle removing from cart
  const handleRemoveFromCart = (productId, sku) => {
    dispatch(removeFromCart({ productId, sku }));
    showInfoToast('Sample removed from cart.');
  };

  // Function to check if the cart limit has been reached
  const isCartFull = () => cartItems.length >= 3;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {products.map((product) => {
        const firstSpecification = product.boardSpecifications[0]; // Use the first board specification

        return (
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
              {isInCart(product._id, firstSpecification.sku) ? (
                <button
                  className="btn-length w-full py-2 transition-all duration-300"
                  onClick={() => handleRemoveFromCart(product._id, firstSpecification.sku)}
                >
                  Remove Sample
                </button>
              ) : (
                <button
                  className={`btn-length w-full py-2 transition-all duration-300 ${isCartFull() ? 'opacity-70 cursor-not-allowed' : ''}`}
                  onClick={() => {
                    if (isCartFull()) {
                      showErrorToast('You can only add up to 3 samples to the cart.');
                    } else {
                      handleAddToCart(product, firstSpecification);
                    }
                  }}
                >
                  Add Sample
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductTitle;
