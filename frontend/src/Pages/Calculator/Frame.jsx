import React from 'react';

const Frame = ({ imageSrc, labelText, size = 'w-48 h-48', textSize = 'text-2xl', gap = 'mt-4', isSelected = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`border rounded-md p-4 cursor-pointer transition-all duration-300 hover:bg-gray-100 flex flex-col items-center justify-between ${size} ${isSelected ? 'border-green bg-grey' : 'bg-white'}`}
    >
      {/* Image */}
      <div className="w-full h-full flex justify-center items-center mb-4">
        <img
          src={imageSrc}
          alt={labelText}
          className="object-contain w-full h-72"
        />
      </div>

      {/* Label Text */}
      <label className={`font-semibold ${textSize} text-center ${gap}`}>
        {labelText}
      </label>
    </div>
  );
};

export default Frame;
