import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PopIconHover from './PopIconHover';
import Hero from '../../Components/Homepage/Hero/Hero';
import ShadePic from '../../Components/Homepage/Shadepic';
import ProductCarouselSlide from '../../Components/Homepage/ProductCarousel/ProductCarouselSlide';
import ProductButtonArray from '../../Components/Components/ProductButtonArray/ProductButtonArray';
import { useSelector, useDispatch } from 'react-redux'; // Import Redux hook
import { fetchAllProducts } from '../../Redux/Slices/productSlice';
import ProductCarousel from '../../Components/Homepage/ProductCarousel/ProductCarousel';
import ProductCarouselWrapper from '../../Components/Homepage/ProductCarousel/ProductCarouselWrapper';
import WhyMillboard from '../../Components/Homepage/WhyMillboard/WhyMillboard';
import CustomerReview from '../../Components/Components/Common/CustomerReview';
import MegaMenu from './Menu/MegaMenu';
import FeaturesSection from '../../Components/Homepage/Feature/MillboardFeatureWithHotspot';
import HotspotFeature from '../../Components/Homepage/Feature/HotspotFeature';
import LostHeadFixing from '../../Components/Homepage/LostHeadFixing';


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch products from Redux
  const allProducts = useSelector((state) => state.product.allProducts);

  // Dispatch the product fetching action on component mount
  useEffect(() => {
    dispatch(fetchAllProducts()); // Make sure this action is correctly fetching products
  }, [dispatch]);

  // Ensure that products exist before rendering the ProductButtonArray
  return (
    <div className="max-w-screen object-contain">
      <Hero />
      <PopIconHover />
      <ProductCarouselWrapper />
      <HotspotFeature />
      <ShadePic />
      <LostHeadFixing />
      <WhyMillboard />
      <CustomerReview
        quote={
          "I have been using Millboard decking for a few years now and I have to say it is the best decking I have ever used. It looks fantastic and is so easy to maintain. I would recommend it to anyone."
        }
        name={"Suresh Patel"}
        designation={"Homeowner"}
      />
    </div>
  );
};

export default Home;
