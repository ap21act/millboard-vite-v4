import React from 'react';

const CircleTickButton = ({ size = 24, isSelected = false, label, onClick }) => {
  return (
    <div
      className="flex items-center space-x-4 cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`relative flex items-center justify-center rounded-full border-2 transition-all duration-300 cursor-pointer
          ${isSelected ? 'bg-green-500 border-transparent' : 'border-white'}`}
        style={{ width: size, height: size }}
      >
        {/* Tick icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-opacity duration-300 ${isSelected ? 'opacity-100' : 'opacity-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-primary">{label}</span>
    </div>
  );
};

export default CircleTickButton;
