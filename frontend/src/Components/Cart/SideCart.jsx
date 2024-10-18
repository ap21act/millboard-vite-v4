import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../Redux/Slices/cartSlice';
import { extractNameFromUrl } from '../../Utils';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const SideCart = ({ isOpen, closeCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const emptyCartMessage = "Your cart is empty.";
  const fallbackImageUrl = 'https://via.placeholder.com/90'; // Fallback image URL

  // Navigate to checkout
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/checkout');
      closeCart();
    }
  };

  // Function to navigate to product page by slug
  const handleNavigateToProduct = (slug) => {
    navigate(`/products/${slug}`);
    console.log("Navigating to product page with slug:", slug);
    closeCart();
    
  };

  // Function to navigate to type page
  const handleNavigateToType = (category) => {
    navigate(`/products/${category}/collection`);
    console.log("Navigating to type page with type:", category);
    closeCart();
  };

  return (
    <Dialog open={isOpen} onClose={closeCart} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                
                {/* Header */}
                <div className="flex items-start justify-between px-4 py-6 sm:px-6">
                  <DialogTitle className="text-lg font-medium text-gray-900">Shopping Cart</DialogTitle>
                  <button
                    type="button"
                    onClick={closeCart}
                    className="relative -m-2 p-2 text-primary hover:text-gray-500"
                    aria-label="Close Cart"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flow-root">
                    {cartItems.length > 0 ? (
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div 
                            key={`${item.productId}-${item.sku}`} // Use productId and sku as key
                            className="flex w-full border px-4 py-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                          >
                            {/* Product Image - Navigate on click */}
                            <img
                              className="self-start object-contain border object-center justify-center cursor-pointer"
                              width="100px"
                              src={item.boardImage || fallbackImageUrl}
                              alt={item.boardImage ? extractNameFromUrl(item.boardImage) : 'Default Product Image'}
                              onClick={() => handleNavigateToProduct(item.slug)} // Navigate to product page on image click
                            />
                            
                            <div className="ml-3 flex w-full flex-col justify-center">
                              {/* Category */}
                              <p className="text-sm font-F37-light ">{item.type}
                              </p>
                              
                              {/* Product Name - Navigate on click */}
                              <p
                                className="text-lg font-semibold cursor-pointer hover:underline"
                                onClick={() => handleNavigateToProduct(item.slug)}
                              >
                                {item.name}
                              </p>

                              {/* Product Type - Navigate on click */}
                              <p
                                className="text-sm font-F37-light cursor-pointer hover:underline"
                                onClick={() => handleNavigateToType(item.category)}
                                
                              >
                                {item.type || 'N/A'} - {item.boardWidth}mm &nbsp; FREE
                              </p>

                              <div className="mt-4 flex items-center justify-between">
                                <button
                                  onClick={() => dispatch(removeFromCart({ productId: item.productId, sku: item.sku }))}
                                  className="flex items-center justify-center p-2 text-red-600 hover:text-red-800 hover:underline"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center bg-white p-4">{emptyCartMessage}</div>
                    )}
                  </div>
                </div>

                {/* Cart Footer */}
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium">
                    <p>Total Items:</p>
                    <p>{totalItems}</p>
                  </div>
                  <p className="mt-0.5 text-sm font-F37-light">Shipping and taxes free.</p>
                  <div className="mt-6">
                    <button
                      className={`btn-length mt-2 min-w-full ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={handleCheckout}
                      disabled={cartItems.length === 0} // Disable checkout if cart is empty
                    >
                      Checkout
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={closeCart}
                        className="font-medium text-primary hover:text-green"
                      >
                        Continue Shopping<span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>

              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SideCart;
