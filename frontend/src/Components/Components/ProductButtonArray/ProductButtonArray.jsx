import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductButtonIcon from './ProductButtonIcon';

const ProductButtonArray = ({ type }) => {
  // Fetch all products from Redux store
  const allProducts = useSelector((state) => state.product.allProducts);

  // Filter products by the provided type
  const filteredProducts = allProducts.filter(
    (product) => product.type.toLowerCase() === type.toLowerCase()
  );

  // Extract images and slugs to create an array for the button icons
  const imagesArray = filteredProducts.map((product) => ({
    src: product.images.boardImage, // Use the boardImage as the source
    link: product.slug,             // Use the slug as the URL link
  }));

  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (clickedImage) => {
    setActiveImage(clickedImage);
    console.log('Active Image:', clickedImage);
  };

  return (
    <div className="flex gap-4">
      {imagesArray.map((image, index) => (
        <ProductButtonIcon
          key={index}
          image={image}
          isActive={activeImage?.link === image.link} // Check if the clicked image is active
          onClick={() => handleImageClick(image)} // Handle image click
        />
      ))}
    </div>
  );
};

export default ProductButtonArray;
