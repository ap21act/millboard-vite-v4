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
      backgroundImage: 'https://millboard.widen.net/content/6d4468a3-3052-4d6f-8ad6-c14c31e82a14/web/MCBF360A_Board%20and%20Batten%20Antique%20Oak%20with%20Ashwood%20126mm.jpg',
    },
    {
      header: 'Collection',
      type: 'Weathered Oak',
      subHeader: 'Weathered Oak',
      description: 'Terrace table with the timeless elegance of older oak',
      backgroundImage: 'https://millboard.widen.net/content/ab13e168-dca8-4420-8e79-773afc21d2fb/web/MDW200V_Weathered%20Oak_Vintage_and%20MDE126L_%20Limed%20Enhanced%20Grain.jpg',
    },
    {
      header: 'Collection',
      type: "Lasta-Grip",
      subHeader: 'Lasta-Grip',
      description: 'Ultra non-slip decking with integrated grip strips',
      backgroundImage: 'https://millboard.widen.net/content/0ae88bcc-c5ae-4808-872e-755a8c1244a0/web/MDL200G_Enhanced%20Grain_Lasta-Grip_Golden%20Oak_Cameo%201.jpg',
    },
    {
      header: 'Envello',
      type: 'Board & Batten+',
      subHeader: 'Board & Batten +',
      description: 'Stylish and modern, perfect for urban outdoor spaces',
      backgroundImage: 'https://millboard.widen.net/content/41a28262-9ee8-4bb9-8f75-0f7a45c05ebc/web/MCBF360G_Board%20and%20Batten%20Golden%20Oak_MDE176C%20Enhanced%20Grain%20Coppered%20Oak_MDE176A%20Enhanced%20Grain%20Antique%20Oak_Moodboard.jpg',
    },
    {
      header: 'Envello',
      type: 'Shadow Line+',
      subHeader: 'Shadow Line +',
      description: 'Sleek and contemporary, ideal for modern architectural designs',
      backgroundImage: 'https://millboard.widen.net/content/cb32378f-8240-43e1-9484-ce9af753afd3/web/MDE176D_Enhanced%20Grain%20SB_Smoked%20Oak_%20with%20Shadow%20Line%20Burnt%20Cedar.jpg',
    },
  ];

  // Prepare the slides using ProductCarouselSlide component for each hardcoded product
  const slides = hardcodedProducts.map((product, index) => (
    <div key={index} className=''> {/* Wrap the heading and slide in a parent container */}
      <TitleWithLine title="The Outdoor" subtitle="Collection" /> {/* Pass title and subtitle dynamically */}
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
