import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/Slices/cartSlice';
import { extractNameFromUrl } from '../../Utils';
import { useNavigate } from 'react-router-dom'; // To handle navigation

const StaticCart = () => {
  const cartItems = useSelector((state) => state.cart.items); // Fetch items from the cart
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate for redirection

  const fallbackImageUrl = 'https://via.placeholder.com/90'; // Fallback image URL
  
  const handleContinueShopping = () => {
    navigate('/order-sample'); // Redirect to the order sample page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-6">Basket</h2>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div 
              key={`${item.productId}-${item.sku}`} // Use productId and sku as key
              className="flex w-full border px-4 py-4 rounded-md shadow-md"
            >
              <img
                className="self-start object-contain border object-center justify-center"
                width="90px"
                src={item.boardImage || fallbackImageUrl}
                alt={item.boardImage ? extractNameFromUrl(item.boardImage) : 'Default Product Image'}
              />
              <div className="ml-4 flex w-full flex-col justify-center">
                <p className="text-sm">{item.category}</p>
                <p className="text-lg font-semibold">{item.type || 'N/A'}</p>
                <p className="text-sm">{item.name} - {item.boardWidth}mm &nbsp; FREE</p>

                <button
                  onClick={() => dispatch(removeFromCart({ productId: item.productId, sku: item.sku }))}
                  className="mt-4  text-left text-sm text-red-600 hover:text-red hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center bg-white p-4">Your cart is empty.</div>
        )}
      </div>

      {/* Continue Shopping */}
      <div className="mt-6 flex justify-center text-sm">
        <button
          onClick={handleContinueShopping}
          className="text-primary hover:text-green font-medium"
        >
          Continue shopping &rarr;
        </button>
      </div>
    </div>
  );
};

export default StaticCart;
