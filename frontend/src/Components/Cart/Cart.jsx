import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../Redux/Slices/cartSlice';
import { extractNameFromUrl } from '../../Utils';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (!cartItems || cartItems.length === 0) {
    return <div className="text-temporary text-green bg-white p-4">Your cart is empty.</div>;
  }

  return (
    <section className="container mx-auto my-3 flex w-full flex-col gap-3 px-4">
      {cartItems.map((item) => (
        <div key={item.productId} className="flex w-full border px-4 py-4 bg-white rounded-md shadow-md">
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
            <p className="py-1 text-lg text-gray-700">Category: {item.category}</p>
            <p className="py-1 text-lg text-gray-700">Type: {item.type}</p>
            <p className="text-lg text-gray-700">
              Board Width: {item.boardLength} mm x {item.boardBreadth} mm x {item.boardHeight} mm
            </p>
            <p className="text-lg text-gray-700">SKU: {item.sku}</p>

            <div className="mt-4 flex w-full items-center justify-between">
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
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cart;
