import React, { useState } from 'react';
import CircleTickButton from './CircleTickButton'; // Import CircleTickButton component

function BoxSelect({ images, allowMultiSelect = true }) {
  const [selectedSides, setSelectedSides] = useState([]); // Array to hold selected sides

  // Function to handle button or image click and toggle selection of the corresponding side
  const handleSideClick = (side) => {
    if (allowMultiSelect) {
      // Multi-select mode
      if (selectedSides.includes(side)) {
        // If the side is already selected, remove it
        setSelectedSides(selectedSides.filter(selected => selected !== side));
      } else {
        // If the side is not selected, add it
        setSelectedSides([...selectedSides, side]);
      }
    } else {
      // Single-select mode
      if (selectedSides.includes(side)) {
        setSelectedSides([]); // Unselect if it's already selected
      } else {
        setSelectedSides([side]); // Select the new side and unselect the others
      }
    }
  };

  return (
    <div className="flex justify-center items-center space-x-10">
      {/* SVG Side Diagram */}
      <div className="w-96 h-96 relative">
        {/* Inactive base image */}
        <img
          src={images.inactive}
          alt="Inactive sides"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        {/* Display selected sides on top of the base image */}
        {Object.keys(images).filter(side => side !== 'inactive').map((side) => (
          <img
            key={side}
            src={images[side]}
            alt={`Side ${side}`}
            onClick={() => handleSideClick(side)} // Image click triggers side selection
            className={`absolute top-0 left-0 w-full h-full object-contain cursor-pointer ${selectedSides.includes(side) ? '' : 'opacity-0'}`}  // Hide unselected sides
          />
        ))}
      </div>

      {/* Side Selection Buttons using CircleTickButton */}
      <div className="flex flex-col space-y-4">
        {Object.keys(images).filter(side => side !== 'inactive').map((side) => (
          <CircleTickButton
            key={side}
            size={32}
            isSelected={selectedSides.includes(side)}
            label={`Side ${side}`}
            onClick={() => handleSideClick(side)}  // Button click triggers side selection
          />
        ))}
      </div>
    </div>
  );
}

export default BoxSelect;
