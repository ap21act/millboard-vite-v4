import React from 'react';
import FeatureCardCombined from './FeatureCardCombined';

const MillboardFeatureWithHotspot = () => {
  return (
    <div className="relative container mx-auto px-4 py-8">
      {/* Hotspot Cards Positioned Above the Product Image */}
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776106/products/decking/features/Recycled_materials.svg"
        title="Slip-resistant"
        description="Slip-resistant Lastane® layer delivers a pliable surface, providing increased grip in the wet."
        linkText="Learn More"
        linkUrl="/features/slip-resistant"
        style={{ top: '-20%', left: '15%' }}
        indicatorPosition="top"
        lineLength="h-20" // Custom line length
      />
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776106/products/decking/features/Recycled_materials.svg"
        title="Slip-resistant"
        description="Slip-resistant Lastane® layer delivers a pliable surface, providing increased grip in the wet."
        linkText="Learn More"
        linkUrl="/features/slip-resistant"
        style={{ top: '-20%', left: '50%' }}
        indicatorPosition="top"
        lineLength="h-24" // Custom line length
      />
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776106/products/decking/features/Recycled_materials.svg"
        title="Slip-resistant"
        description="Slip-resistant Lastane® layer delivers a pliable surface, providing increased grip in the wet."
        linkText="Learn More"
        linkUrl="/features/slip-resistant"
        style={{ top: '-20%', left: '80%' }}
        indicatorPosition="top"
        lineLength="h-16" // Default line length
      />

      {/* Product Image */}
      <img
        src="https://millboard.adityakhadka.com.np/frontend/assets/images/ak.png"
        alt="Product"
        className="w-full h-auto mt-20"
      />

      {/* Hotspot Cards Positioned Below the Product Image */}
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776106/products/decking/features/Recycled_materials.svg"
        title="Slip-resistant"
        description="Slip-resistant Lastane® layer delivers a pliable surface, providing increased grip in the wet."
        linkText="Learn More"
        linkUrl="/features/slip-resistant"
        style={{ top: '60%', left: '10%' }}
        indicatorPosition="bottom"
        lineLength="h-24" // Custom line length
      />
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776106/products/decking/features/Recycled_materials.svg"
        title="Slip-resistant"
        description="Slip-resistant Lastane® layer delivers a pliable surface, providing increased grip in the wet."
        linkText="Learn More"
        linkUrl="/features/slip-resistant"
        style={{ top: '65%', left: '30%' }}
        indicatorPosition="bottom"
        lineLength="h-16" // Custom line length
      />
      <FeatureCardCombined
        icon="https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776106/products/decking/features/Recycled_materials.svg"
        title="Slip-resistant bottom"
        description="Slip-resistant Lastane® layer delivers a pliable surface, providing increased grip in the wet."
        linkText="Learn More"
        linkUrl="/features/slip-resistant"
        style={{ top: '70%', left: '60%' }}
        indicatorPosition="bottom"
        lineLength="h-16" // Default line length
      />
    </div>
  );
};

export default MillboardFeatureWithHotspot;
