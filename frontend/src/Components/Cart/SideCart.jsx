import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../../Redux/Slices/cartSlice';
import { extractNameFromUrl } from '../../Utils';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

const SideCart = ({ isOpen, closeCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

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
                        cartItems.map((item, index) => (
                          <div key={index} className="flex w-full border px-4 py-4 bg-white rounded-md shadow-md mb-4">
                            <img
                              className="self-start object-contain rounded-md border"
                              width="90px"
                              src={item.boardImage || 'https://via.placeholder.com/90'}
                              alt={item.boardImage ? extractNameFromUrl(item.boardImage) : 'Product Image'}
                            />
                            <div className="ml-3 flex w-full flex-col justify-center">
                              <div className="flex items-center justify-between mb-3">
                                <p className="text-xl font-bold text-temporary">{item.name}</p>
                              </div>
                              <p className="py-1 text-lg text-gray-700">Category: {item.category || 'N/A'}</p>
                              <p className="py-1 text-lg text-gray-700">Type: {item.type || 'N/A'}</p>
                              <p className="py-1 text-lg text-gray-700">SubCategory: {item.subCategory || 'N/A'}</p>
                              <p className="text-lg text-gray-700">Board Width: {item.boardWidth ? `${item.boardWidth} mm` : 'N/A'}</p>
                              <p className="text-lg text-gray-700">Board Length: {item.boardLength ? `${item.boardLength} mm` : 'N/A'}</p>
                              <p className="text-lg text-gray-700">Board Breadth: {item.boardBreadth ? `${item.boardBreadth} mm` : 'N/A'}</p>
                              <p className="text-lg text-gray-700">SKU: {item.sku || 'N/A'}</p>

                              <div className="mt-4 flex w-full items-center justify-between">
                                <div className="flex items-center">
                                  <button
                                    className="flex h-8 w-8 cursor-pointer items-center justify-center border rounded-l-md bg-gray-200 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                    onClick={() => dispatch(decrementQuantity(item.productId))}
                                  >
                                    −
                                  </button>
                                  <div className="flex h-8 w-10 items-center justify-center border-t border-b bg-white">
                                    {item.quantity}
                                  </div>
                                  <button
                                    className="flex h-8 w-8 cursor-pointer items-center justify-center border rounded-r-md bg-gray-200 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500"
                                    onClick={() => dispatch(incrementQuantity(item.productId))}
                                  >
                                    +
                                  </button>
                                </div>

                                <button
                                  onClick={() => dispatch(removeFromCart(item.productId))}
                                  className="flex items-center justify-center p-2 text-temporary hover:text-red-600"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-temporary text-green bg-white p-4">Your cart is empty.</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total Items:</p>
                    <p>
                      {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes free.</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center btn-length"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-xl text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={closeCart}
                        className="font-medium  text-primary hover:text-green"
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
