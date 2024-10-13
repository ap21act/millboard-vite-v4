import React from 'react';
import ProductCarousel from './ProductCarousel';
import ProductCarouselSlide from './ProductCarouselSlide';
import TitleWithLine from '../../Components/Common/TitleWithLine';

const ProductCarouselWrapper = () => {
  // Hardcoded product data
  const hardcodedProducts = [
    {
      header: 'Collection',
      type: 'Enhanced Grain',
      subHeader: 'Enhanced Grain SB',
      description: 'Add a touch of distinction with our versatile, slim decking board',
      backgroundImage: 'https://s3.eu-west-1.amazonaws.com/millboard-norway/home/collection/_homepageCarousel/image-of-enhanced-grain-decking-homepage.jpg',
    },
    {
      header: 'Collection',
      type: 'Weathered Oak',
      subHeader: 'Weathered Oak',
      description: 'Terrace table with the timeless elegance of older oak',
      backgroundImage: 'https://s3.eu-west-1.amazonaws.com/millboard-norway/home/collection/_homepageCarousel/image-of-weathered-oak-decking-homepage.jpg',
    },
    {
      header: 'Collection',
      type: "Lasta-Grip",
      subHeader: 'Lasta-Grip',
      description: 'Ultra non-slip decking with integrated grip strips',
      backgroundImage: 'https://s3.eu-west-1.amazonaws.com/millboard-norway/home/collection/_homepageCarousel/image-of-lasta-grip-decking-homepage.jpg',
    },
    {
      header: 'Envello',
      type: 'Board & Batten+',
      subHeader: 'Board & Batten+',
      description: 'Stylish and modern, perfect for urban outdoor spaces',
      backgroundImage: 'https://s3.eu-west-1.amazonaws.com/millboard-norway/home/collection/_homepageCarousel/image-of-enhanced-grain-decking-homepage.jpg',
    },
    {
      header: 'Envello',
      type: 'Shadow Line+',
      subHeader: 'Shadow Line',
      description: 'Stylish and modern, perfect for urban outdoor spaces',
      backgroundImage: 'https://s3.eu-west-1.amazonaws.com/millboard-norway/home/collection/_homepageCarousel/image-of-enhanced-grain-decking-homepage.jpg',
    },
  ];

  // Prepare the slides using ProductCarouselSlide component for each hardcoded product
  const slides = hardcodedProducts.map((product, index) => (
    <div key={index} className='bg-white-nav'> {/* Wrap the heading and slide in a parent container */}
      <TitleWithLine title="The Millboard" subtitle="Collection" /> {/* Pass title and subtitle dynamically */}
      <ProductCarouselSlide
        slideData={product} // Pass the product object as slideData
      />
    </div>
  ));

  return (
    <ProductCarousel slides={slides} /> 
  );
};

export default ProductCarouselWrapper;
