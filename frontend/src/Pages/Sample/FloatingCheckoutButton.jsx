import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingCheckoutButton = () => {
  const navigate = useNavigate();

  // Redirect to checkout page when the button is clicked
  const handleCheckoutRedirect = () => {
    navigate('/cart');
  };

  return (
    <button
      className="fixed bottom-8 right-8 bg-primary text-white px-6 py-4  shadow-lg hover:text-green transition-all duration-300 ease-in-out"
      onClick={handleCheckoutRedirect}
    >
      Continue Checkout
    </button>
  );
};

export default FloatingCheckoutButton;
