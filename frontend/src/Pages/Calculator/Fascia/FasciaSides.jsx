import React, { useState } from 'react';
import CircleTickButton from '../CircleTickButton'; // Import CircleTickButton component

function FasciaSides() {
  const [selectedSides, setSelectedSides] = useState([]); // Array to hold selected sides

  // SVG URLs for sides
  const sideImages = {
    A: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-a.svg',
    B: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-b.svg',
    C: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-c.svg',
    D: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-d.svg',
  };

  // Function to handle button click and toggle selection of the corresponding side
  const handleSideClick = (side) => {
    if (selectedSides.includes(side)) {
      // If the side is already selected, remove it
      setSelectedSides(selectedSides.filter(selected => selected !== side));
    } else {
      // If the side is not selected, add it
      setSelectedSides([...selectedSides, side]);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-10">
      {/* SVG Side Diagram */}
      <div className="w-96 h-96 relative">
        {/* Inactive base image */}
        <img
          src="https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-inactive.svg"
          alt="Inactive sides"
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
        {/* Display selected sides on top of the base image */}
        {selectedSides.map((side) => (
          <img
            key={side}
            src={sideImages[side]}
            alt={`Side ${side}`}
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        ))}
      </div>

      {/* Side Selection Buttons using CircleTickButton */}
      <div className="flex flex-col space-y-4">
        <CircleTickButton
          size={32}
          isSelected={selectedSides.includes('A')}
          label="Side A"
          onClick={() => handleSideClick('A')}
        />
        <CircleTickButton
          size={32}
          isSelected={selectedSides.includes('B')}
          label="Side B"
          onClick={() => handleSideClick('B')}
        />
        <CircleTickButton
          size={32}
          isSelected={selectedSides.includes('C')}
          label="Side C"
          onClick={() => handleSideClick('C')}
        />
        <CircleTickButton
          size={32}
          isSelected={selectedSides.includes('D')}
          label="Side D"
          onClick={() => handleSideClick('D')}
        />
      </div>
    </div>
  );
}

export default FasciaSides;
