import React from 'react';
import { extractNameFromUrl } from '../../../Utils/extractNameFromUrl';
import CircleTick from '../CircleTick'; // Import CircleTick component

function Card({ product, isSelected, onTickClick }) {
  return (
    <div className="p-1">
      {/* Image Section with hover effect and CircleTick */}
      <div className="relative overflow-hidden" onClick={onTickClick}> {/* Add onClick here */}
        <img
          src={product.images.boardImage} // Using boardImage from the product data
          alt={extractNameFromUrl(product.images.boardImage)} // Use your extractNameFromUrl function
          className="w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:brightness-110"
        />

        {/* Always show CircleTick, click toggles the tick */}
        <div className="absolute top-4 right-4">
          <CircleTick size={32} isSelected={isSelected} /> {/* Pass isSelected to CircleTick */}
        </div>
      </div>

      {/* Product Info */}
      <div className='pt-3 pb-7 flex justify-between items-center'>
        <h3 className='text-2xl font-F37-bold'>{product.name}</h3>
        {/* SVG wrapped in an anchor tag */}
        <a href={`/products/${product.slug}`} target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7 hover:text-green transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card;
