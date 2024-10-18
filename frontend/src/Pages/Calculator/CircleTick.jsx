import React from 'react';

const CircleTick = ({ size = 24, isSelected = false }) => {
  return (
    <div
      className={`relative flex items-center justify-center rounded-full border-2 transition-all duration-300 cursor-pointer
        ${isSelected ? 'bg-green border-transparent' : 'border-white hover:bg-gray-200'}`}
      style={{ width: size, height: size }}
    >
      {/* Tick icon, with hover effect for non-selected state */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6  transition-opacity duration-300 ${
          isSelected ? '' : 'opacity-0 hover:opacity-60'
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
};

export default CircleTick;
