import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductButtonIcon from './ProductButtonIcon';

const ProductButtonArray = ({ type }) => {
  // Fetch all products from Redux
  const allProducts = useSelector((state) => state.product.allProducts);

  // Filter products by the provided type
  const filteredProducts = allProducts.filter(
    (product) => product.type.toLowerCase() === type.toLowerCase()
  );

  // Log filtered products to verify the filtering is working
  // useEffect(() => {
  //   console.log("Filtered Products for type:", type, filteredProducts);
  // }, [type, filteredProducts]);

  // Extract images and slugs to create an array for the button icons
  const imagesArray = filteredProducts.map((product) => ({
    src: product.images.boardImage, // Use the boardImage as the source
    link: product.slug,             // Use the slug as the URL link
  }));

  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (clickedImage) => {
    setActiveImage(clickedImage);
    
  };

  return (
    <div className="flex gap-2 flex-wrap">
      {imagesArray.length > 0 ? (
        imagesArray.map((image, index) => (
          <ProductButtonIcon
            key={index}
            image={image}
            isActive={activeImage?.link === image.link} // Check if the clicked image is active
            onClick={() => handleImageClick(image)} // Handle image click
          />
        ))
      ) : (
        <p>No products found for type: {type}</p>
      )}
    </div>
  );
};

export default ProductButtonArray;
