import React from 'react';
import FeatureCardCombined from './FeatureCardCombined';

const MillboardFeatureWithHotspot = () => {
  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* Hotspot Cards Positioned Above the Product Image */}
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1729258579/products/Home/Pop-up%20Icons/Natural_wood_look.svg"
        title="Moulded from real oak"
        description="Hand-moulded from smooth, prime oak, replicating the beauty of natural wood."
        linkText="Learn More"
        linkUrl="/why/explore/why-millboard"
        style={{ top: '8%', left: '2%' }}
        indicatorPosition="top"
        lineLength="h-32"
        
        
      />
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1729258581/products/Home/Pop-up%20Icons/High_slip-resistance.svg"
        title="Slip-resistant"
        description="Designed with safety in mind, our slip-resistant surface provides excellent grip in wet conditions."
        linkText="Learn More"
        linkUrl="/why/explore/why-millboard"
        style={{ top: '-1%', left: '35%' }}
        indicatorPosition="top"
        lineLength="h-32"
      />
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730371769/products/Home/Pop-up%20Icons/Maximum_Durability.png"
        title="Maximum durability"
        description="Built to endure, our boards are engineered for long-lasting performance with minimal upkeep."
        linkText="Learn More"
        linkUrl="/why/explore/why-millboard"
        style={{ top: '-15%', left: '65%' }}
        indicatorPosition="top"
        lineLength="h-32"
      />

      {/* Product Image */}
      <img
        src="https://millboard.adityakhadka.com.np/frontend/assets/images/ak.png"
        alt="Product"
        className="w-full h-auto mt-20"
      />

      {/* Hotspot Cards Positioned Below the Product Image */}
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1729258537/products/Home/Pop-up%20Icons/Recycled_materials.svg"
        title="Sustainable"
        description="Made from eco-friendly materials, designed with sustainability at its core."
        linkText="Learn More"
        linkUrl="/why/explore/why-millboard"
        style={{ top: '77%', left: '3%' }}
        indicatorPosition="bottom"
        lineLength="h-32"
        linePosition='left'
      />
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1729258580/products/Home/Pop-up%20Icons/Lost_Head_Fixing.svg"
        title="'Lost head' fixing"
        description="Invisible fixings maintain a seamless appearance across your decking surface."
        linkText="Learn More"
        linkUrl="/why/explore/why-millboard"
        style={{ top: '60%', left: '30%' }}
        indicatorPosition="bottom"
        lineLength="h-32"
      />
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730371772/products/Home/Pop-up%20Icons/UK_Made.png"
        title="UK made, UK backed"
        description="Crafted in the UK with robust support and quality assurance for local customers."
        linkText="Learn More"
        linkUrl="/why/explore/why-millboard"
        style={{ bottom: '20%', right: '17%' }}
        indicatorPosition="bottom"
        lineLength="h-36"
      />
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730371766/products/Home/Pop-up%20Icons/Integrated_UV_Stabilisers.svg"
        title="UV & Weathering stability"
        description="UV-resistant to prevent fading, with enhanced stability against extreme weather."
        linkText="Learn More"
        linkUrl="/why/explore/why-millboard"
        style={{ top: '33%', right: '-10%' }}
        indicatorPosition="bottom"
        lineLength="h-20"
        linePosition="left"
        
      />
    </div>
  );
};

export default MillboardFeatureWithHotspot;
