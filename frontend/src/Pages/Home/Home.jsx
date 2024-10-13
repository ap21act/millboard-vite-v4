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
import WhyMillboard from '../../Components/Homepage/WhyMillboard/WhyMillboard';
import CustomerReview from '../../Components/Components/Common/CustomerReview';

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
      <WhyMillboard />
      <CustomerReview quote={"Having previously specified Millboard products on design projects for schools, I knew that I could rely on the range for its durability and anti-slip properties, on top of its natural aesthetic."} name={"Suzie Jewell"} designation={'Landscape Architect at Kew Gardens'} />


    </div>
  );
};

export default Home;
