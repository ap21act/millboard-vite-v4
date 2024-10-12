import React, { useState } from 'react';
import ProductButtonIcon from './ProductButtonIcon';
import { generateSlug } from '../../../Utils'; // Import your utility function

const ProductButtonArray = ({ onSlugChange }) => {
  const images = [
    {
      src: 'https://millboard.widen.net/content/b55fa704-8767-4522-9fa7-877a374b45c6/web/MDE176D_Enhanced_Grain_Smoked_Oak_Overhead%20Laying%20Pattern.jpg?crop=yes&w=712&h=712&itok=tAfPwa6G',
      link: 'decking/collection/enhanced-grain/smoked-oak',
    },
    {
      src: 'https://millboard.widen.net/content/e928247e-6683-4453-a332-d7f486a5b335/web/MDE176L_Enhanced_Grain_Limed_Oak.jpg?crop=yes&w=712&h=712&itok=7Rv3cNgl',
      link: 'decking/collection/enhanced-grain/limed-oak',
    },
  ];

  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (clickedImage) => {
    setActiveImage(clickedImage);
    const newSlug = generateSlug(clickedImage.link); // Optional slug generation logic
    onSlugChange(newSlug); // Update the slug in TryPage
  };

  return (
    <div className="flex gap-4">
      {images.map((image, index) => (
        <ProductButtonIcon
          key={index}
          image={image}
          isActive={activeImage === image}
          onClick={() => handleImageClick(image)} // Handle image click to replace entire slug
        />
      ))}
    </div>
  );
};

export default ProductButtonArray;
