import React, {useEffect, useState} from 'react';
import Hero from './Hero';
import Filter from './Filter';
import ProductTitleCategory from './ProductTitleCategory';
import CladdingFeatures from '../../Components/Features/CladdingFeatures';
import { useSelector, useDispatch } from 'react-redux'; 
import { fetchAllProducts } from '../../Redux/Slices/productSlice';
import Tiles from './Tiles';

function OrderSample() {

  const dispatch = useDispatch();

  // Fetch products from Redux
  const allProducts = useSelector((state) => state.product.allProducts);

  // Dispatch the product fetching action on component mount
  useEffect(() => {
    dispatch(fetchAllProducts()); 
  }, [dispatch]);

  console.log('allproduct:', allProducts);

  // State to hold filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Initialize filtered products to show all products by default
  useEffect(() => {
    if (allProducts.length > 0) {
      setFilteredProducts(allProducts);
    }
  }, [allProducts]);

  return (
    <div>
      <Hero />

      <Filter products={allProducts} setFilteredProducts={setFilteredProducts} />

      <Tiles filteredProducts={filteredProducts} />

      {/* Render ProductTitleCategory only if filteredProducts is not empty */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <ProductTitleCategory 
            key={product._id || index} 
            product={product} 
            boardSpecification={product.boardSpecifications[0]} // assuming the first boardSpecification
          />
        ))
      ) : (
        <p>Loading products...</p>
      )}

      <div className='border-t py-4 border-white-background'>
        <h2 className='font-F37-light text-xl text-center'>Why choose Millboard decking?</h2>
        <CladdingFeatures />
      </div>
    </div>
  );
}

export default OrderSample;
