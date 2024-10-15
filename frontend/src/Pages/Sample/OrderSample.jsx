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

  // State to hold grouped products and filtered products
  const [groupedProducts, setGroupedProducts] = useState({});
  const [filteredProducts, setFilteredProducts] = useState({});

  // Dispatch the product fetching action on component mount
  useEffect(() => {
    dispatch(fetchAllProducts()); 
  }, [dispatch]);

  console.log('allProducts:', allProducts);

  // Group products by category, type, and boardWidth
  useEffect(() => {
    if (allProducts.length > 0) {
      const groups = allProducts.reduce((acc, product) => {
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
      
      setGroupedProducts(groups); // Set grouped products in state
      setFilteredProducts(groups); // Initially set filtered products to be the same as grouped products
    }
  }, [allProducts]);

  return (
    <div>
      <Hero />

      {/* Pass groupedProducts to Filter, and it will modify the filteredProducts */}
      <Filter products={groupedProducts} setFilteredProducts={setFilteredProducts} />

      <Tiles filteredProducts={filteredProducts} />

      <div className='border-t py-4 border-white-background'>
        <h2 className='font-F37-light text-xl text-center'>Why choose Millboard decking?</h2>
        <CladdingFeatures />
      </div>
    </div>
  );
}

export default OrderSample;
