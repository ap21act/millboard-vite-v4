import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToProductType = (type)=>{
    const typeUrl = type.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/type/${typeUrl}`);
  }
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1>Welcome to Living Outdoors</h1>

      {/* Example buttons to navigate to each product type */}
      <div className="mt-4 space-y-4">
        <button
          className="btn-primary"
          onClick={() => handleNavigateToProductType('Enhanced Grain')}
        >
          View Enhanced Grain Products
        </button>

        <button
          className="btn-primary"
          onClick={() => handleNavigateToProductType('weathered-oak')}
        >
          View lasta Products
        </button>
      </div>
    </div>
  );
};

export default Home;
