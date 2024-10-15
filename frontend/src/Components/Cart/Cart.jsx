import React from 'react';
import StaticCart from './StaticCart'; // Assuming StaticCart is in this location
import CheckoutForm from './CheckoutForm'; // Assuming CheckoutForm is in this location

const Cart = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between container mx-auto px-4 py-8 gap-8">
      {/* Checkout Form - Main form */}
      <div className="w-full md:w-2/3 lg:w-1/2">
        <CheckoutForm />
      </div>

      {/* Static Cart - Side panel */}
      <div className="w-full md:w-1/2 lg:w-1/2 bg-white-nav shadow-md rounded-lg p-6">
        <div className="sticky top-8">
          <StaticCart />
        </div>
      </div>
    </div>
  );
};

export default Cart;
