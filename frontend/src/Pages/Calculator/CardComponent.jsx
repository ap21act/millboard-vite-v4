import React from 'react';
import CircleTick from './CircleTick'; // Import the CircleTick component

const CardComponent = ({ image, title, description, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="relative cursor-pointer p-6 max-w-sm transform transition-transform duration-300 ease-in-out hover:scale-105"  // Updated padding and size
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out transform hover:scale-110 hover:brightness-110"  // Slightly larger hover effect
        />

        {/* Always show the CircleTick, but conditionally render the tick based on isSelected */}
        <div className="absolute top-4 right-4">
          <CircleTick size={32} isSelected={isSelected} /> {/* Pass isSelected to CircleTick */}
        </div>
      </div>

      {/* Title and Description */}
      <div className="mt-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="mt-2 text-base">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
