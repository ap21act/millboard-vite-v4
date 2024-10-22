import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/Slices/cartSlice';
import { extractNameFromUrl } from '../../Utils';
import { useNavigate } from 'react-router-dom';

const FloatingCheckoutButton = () => {
  const cartItems = useSelector((state) => state.cart.items); // Fetch items from the cart
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fallbackImageUrl = 'https://via.placeholder.com/90'; // Fallback image URL

  // Redirect to checkout page when the button is clicked
  const handleCheckoutRedirect = () => {
    navigate('/checkout');
  };

  // Handle removing an item from the cart
  const handleRemoveItem = (productId, sku) => {
    dispatch(removeFromCart({ productId, sku }));
  };

  return (
    <>
      {cartItems.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-primary text-white p-4 flex justify-between shadow-lg z-50">
          <div className="flex items-center overflow-x-auto space-x-6">
            {cartItems.map((item) => (
              <div
                key={`${item.productId}-${item.sku}`}
                className="flex items-center bg-primary p-3 rounded-md space-x-4"
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={item.boardImage || fallbackImageUrl}
                    alt={item.boardImage ? extractNameFromUrl(item.boardImage) : 'Product Image'}
                    className="w-20 h-20 object-cover "
                  />
                  {/* Remove (Cross) Icon */}
                  <button
                    onClick={() => handleRemoveItem(item.productId, item.sku)}
                    className="absolute top-0 right-0 bg-white text-primary rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    &#x2715;
                  </button>
                </div>

                {/* Product Information */}
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{item.name || 'N/A'}</span>
                  <span className="text-xs text-white">{item.type || 'Product Type'}</span>
                  <span className="text-xs text-white">{item.boardWidth}mm</span>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckoutRedirect}
            className="btn-length border-white h-14 hover:bg-white hover:text-green flex items-center justify-center px-6"
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingCheckoutButton;
