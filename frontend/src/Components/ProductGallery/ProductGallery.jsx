import React from 'react';
import ImageCarousel from '../Components/Common/ImageCarousel'; // Import your carousel component
import { extractNameFromUrl } from '../../Utils'; // Import the utility function

const ProductGallery = ({ product }) => {
  if (!product) return null; // Handle case when images are not available

   // Combine product images and board images into a single array for ProductGallery
  
  const boardImage = product.images?.boardImage || '';
  const titleImage = product.images?.titleImage || '';
  const productImages = [...product.images?.productImage || []];

  return (
    <div>
      {/* For larger screens (keep your grid layout) */}
      <div className="hidden lg:block space-y-1 max-w-screen-md mx-auto pt-2 pr-2">
        {/* First row with one image */}
        <div className="w-full overflow-hidden">
          <img 
            src={productImages[0] || ''} 
            alt={extractNameFromUrl(productImages[0] || '')} 
            className="object-cover w-full hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ height: 'clamp(343px, 13.3093rem + 34.6805vw, 712px)' }} 
            loading="lazy" 
          />
        </div>

        {/* Second row with two images in flex container */}
        <div className="flex gap-1">
          <div className="w-1/2 overflow-hidden">
            <img 
              src={boardImage} 
              alt={extractNameFromUrl(boardImage) || ''} 
              className="object-cover w-full cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ height: 'clamp(280px, 6.3964rem + 17.3494vw, 352px)' }}
              loading="lazy" 
            />
          </div>
          <div className="w-1/2 overflow-hidden">
            <img 
              src={titleImage} 
              alt={extractNameFromUrl(titleImage) || ''} 
              className="object-cover w-full cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ height: 'clamp(280px, 6.3964rem + 17.3494vw, 352px)' }}
              loading="lazy" 
            />
          </div>
        </div>

        {/* Third row with one image */}
        <div className="w-full overflow-hidden">
          <img 
            src={productImages[1] || ''} 
            alt={extractNameFromUrl(productImages[1] || '')} 
            className="object-cover w-full hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ height: 'clamp(343px, 13.3093rem + 34.6805vw, 712px)' }} 
            loading="lazy" 
          />
        </div>
      </div>

      {/* For smaller screens (mobile carousel) */}
      <div className="lg:hidden">
        <ImageCarousel 
          images={[
            { src: productImages[0] || '', alt: extractNameFromUrl(productImages[0] || '') },
            { src: boardImage, alt: extractNameFromUrl(boardImage) || '' },
            { src: titleImage, alt: extractNameFromUrl(titleImage) || '' },
            { src: productImages[1] || '', alt: extractNameFromUrl(productImages[1] || '') },
          ]} 
        />
      </div>
    </div>
  );
};

export default ProductGallery;
