import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopScroll from './TopScroll';
import Hero from '../../Components/Homepage/Hero/Hero';
import ShadePic from '../../Components/Homepage/Shadepic';
import ProductCarouselSlide from '../../Components/Homepage/ProductCarousel/ProductCarouselSlide';
import ProductButtonArray from '../../Components/Components/ProductButtonArray/ProductButtonArray';
import { useSelector,useDispatch } from 'react-redux'; // Import Redux hook
import { fetchAllProducts } from '../../Redux/Slices/productSlice';
import ProductCarousel from '../../Components/Homepage/ProductCarousel/ProductCarousel';
import ProductCarouselWrapper from '../../Components/Homepage/ProductCarousel/ProductCarouselWrapper';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch products from Redux
  const allProducts = useSelector((state) => state.product.allProducts);

  // Dispatch the product fetching action on component mount
  useEffect(() => {
    dispatch(fetchAllProducts()); // Make sure this action is correctly fetching products
  }, [dispatch]);

  console.log(allProducts);

  // Ensure that products exist before rendering the ProductButtonArray
  return (
    <div className="max-w-screen mx-auto p-4">
      <Hero />
      <TopScroll />
      
      {/* <ProductCarouselSlide /> */}

      {/* <ProductCarousel
        slides={[
          <ProductCarouselSlide key={1} />,
          <ProductCarouselSlide key={2} />,
          <ProductCarouselSlide key={3} />,
          // Add more slides as needed
        ]}
      /> */}
      <ProductCarouselWrapper />
      <ShadePic />


    </div>
  );
};

export default Home;
