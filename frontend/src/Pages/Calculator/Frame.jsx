import React from 'react';

const Frame = ({ imageSrc, labelText, size = 'w-48 h-48', textSize = 'text-2xl', gap = 'mt-4', isSelected = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`border py-8 px-8 cursor-pointer transition-colors duration-300 hover:bg-grey flex flex-col items-start ${size} ${isSelected ? 'border-green bg-grey' : ''}`}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={labelText}
        className="object-cover w-full h-full"
      />
      {/* Label Text */}
      <label className={`font-semibold ${textSize} ${gap}`}>
        {labelText}
      </label>
    </div>
  );
};

export default Frame;
