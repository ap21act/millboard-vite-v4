import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TopScroll from './TopScroll';
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
import FooterPopup from './FooterPopup';

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
    <div className="max-w-screen w-full overflow-x-hidden mx-auto p-4">
      <Hero />
      <TopScroll />
      <ProductCarouselWrapper />
      <HotspotFeature />
      <ShadePic />
      <LostHeadFixing />
      <WhyMillboard />
      <CustomerReview
        quote={
          "Having previously specified Millboard products on design projects for schools, I knew that I could rely on the range for its durability and anti-slip properties, on top of its natural aesthetic."
        }
        name={"Suzie Jewell"}
        designation={"Landscape Architect at Kew Gardens"}
      />
      <FooterPopup />
    </div>
  );
};

export default Home;
