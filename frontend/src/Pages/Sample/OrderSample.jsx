import React, { useEffect, useState } from 'react';
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

  console.log('allProducts:', allProducts);

  // State to hold grouped products
  const [filteredProducts, setFilteredProducts] = useState({});

  // Group products by category, type, and boardWidth
  useEffect(() => {
    if (allProducts.length > 0) {
      const groupedProducts = allProducts.reduce((acc, product) => {
        const { category, type } = product;

        // Loop through each boardSpecification to create separate groups for each board width
        product.boardSpecifications.forEach((specification) => {
          const boardWidth = specification.boardWidth || 'N/A';
          const key = `${category}-${type}-${boardWidth}`;
          
          if (!acc[key]) {
            acc[key] = {
              category,
              type,
              boardWidth,
              products: [],
            };
          }
          
          // Push the product along with the specific boardSpecification for this width
          acc[key].products.push({ ...product, boardSpecification: specification });
        });
        
        return acc;
      }, {});
      
      setFilteredProducts(groupedProducts); // Set grouped products in state
    }
  }, [allProducts]);

  return (
    <div>
      <Hero />

      <Filter products={allProducts} setFilteredProducts={setFilteredProducts} />

      <Tiles filteredProducts={filteredProducts} />

      <div className='border-t py-4 border-white-background'>
        <h2 className='font-F37-light text-xl text-center'>Why choose Millboard decking?</h2>
        <CladdingFeatures />
      </div>
    </div>
  );
}

export default OrderSample;
