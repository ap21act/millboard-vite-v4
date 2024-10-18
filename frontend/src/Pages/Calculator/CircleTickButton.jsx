import React from 'react';
import CircleTick from './CircleTick'; // Import CircleTick component

const CircleTickButton = ({ size = 24, isSelected = false, label, onClick }) => {
  return (
    <div className="flex items-center space-x-2 cursor-pointer" onClick={onClick}>
      {/* CircleTick Icon */}
      <CircleTick size={size} isSelected={isSelected} />
      
      {/* Text Label */}
      <span className={`text-primary font-bold ${isSelected ? 'text-primary' : 'text-gray-600'}`}>
        {label}
      </span>
    </div>
  );
};

export default CircleTickButton;
