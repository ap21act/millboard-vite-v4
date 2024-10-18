import React, { useEffect } from 'react';
import HeroHeader from '../HeroHeader';
import ProductArray from './ProductArray';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../../Redux/Slices/productSlice';

function DeckingType() {
  const dispatch = useDispatch();

  // Fetch all products from Redux store
  const allProducts = useSelector((state) => state.product.allProducts);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  // Dispatch fetchAllProducts when component mounts
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, status]);

  // Handle loading, error, or empty states
  if (status === 'loading') {
    return <div>Loading products...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='py-24'>
      {/* HeroHeader Component */}
      <HeroHeader 
        titleText="Decking Type" // Title text
        hoverText="Click on each of the headings below to explore the collections" // Hover popup text
        descriptionText="Choose the color and finish that most appeals to you."
      />

      {/* Pass products as props to ProductArray */}
      {allProducts && allProducts.length > 0 ? (
        <ProductArray products={allProducts} />
      ) : (
        <div>No products available</div>
      )}
    </div>
  );
}

export default DeckingType;
