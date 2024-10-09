import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/Slices/cartSlice';
import { extractNameFromUrl } from '../../Utils';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const SideCart = ({ isOpen, closeCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Dialog open={isOpen} onClose={closeCart} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out" />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Shopping Cart</DialogTitle>
                    <button
                      type="button"
                      onClick={closeCart}
                      className="relative -m-2 p-2 text-primary hover:text-gray-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      {cartItems.length > 0 ? (
                        <div className="space-y-4">
                          {cartItems.map((item) => (
                            <div 
                              key={item.productId} 
                              className="flex w-full border px-4 py-4 bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                              style={{
                                boxShadow: `0px ${item.hoverDirection === 'top' ? '-10px' : '10px'} 20px rgba(0, 0, 0, 0.1)`
                              }}
                              onMouseEnter={() => (item.hoverDirection = 'top')}
                              onMouseLeave={() => (item.hoverDirection = 'bottom')}
                            >
                              <img
                                className="self-start object-contain border object-center justify-center"
                                width="100px"
                                src={item.boardImage || 'https://via.placeholder.com/90'}
                                alt={item.boardImage ? extractNameFromUrl(item.boardImage) : 'Product Image'}
                              />
                              <div className="ml-3 flex w-full flex-col justify-center">
                                <p className="text-sm font-F37-light ">{item.category}</p>
                                <p className="text-lg font-semibold ">{item.name}</p>
                                <p className="text-sm  font-F37-light">{item.type || 'N/A'} - {item.boardWidth}mm  &nbsp; FREE</p>

                                <div className="mt-4 flex items-center justify-between">
                                  <button
                                    onClick={() => dispatch(removeFromCart(item.productId))}
                                    className="flex items-center justify-center p-2 text-red-600 hover:text-red-800 hover:text-red hover:underline"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center  bg-white p-4">Your cart is empty.</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium ">
                    <p>Total Items:</p>
                    <p>{totalItems}</p>
                  </div>
                  <p className="mt-0.5 text-sm font-F37-light">Shipping and taxes free.</p>
                  <div className="mt-6">
                    <button
                      className="btn-length mt-2 min-w-full"
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
