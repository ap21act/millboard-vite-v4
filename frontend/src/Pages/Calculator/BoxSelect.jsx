import React, { useState } from 'react';
import CircleTickButton from './CircleTickButton'; // Import CircleTickButton component

function BoxSelect({
  images,
  allowMultiSelect = true,
  infoImageSrc, // Prop for info image source
  infoText, // Prop for the info text below the image
  infoTextBgColor = 'bg-gray-800', // Prop for the background color of the text section (default: bg-gray-800)
  infoTextColor = 'text-white', // Prop for the text color (default: text-white)
  circleColor = 'border-white',  // Prop for default circle color
  tickColor = 'text-white',      // Prop for default tick color
  hoverColor = 'hover:bg-gray-200', // Prop for default hover color
  selectedColor = 'bg-green'   // Prop for default selected color
}) {
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
    <div className="flex justify-between items-start space-x-8 p-8">
      {/* Left section with SVG Side Diagram and selection buttons */}
      <div className="flex justify-center items-center space-x-16 w-2/3">
        {/* SVG Side Diagram */}
        <div className="w-96 h-96 relative ">
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
              onClick={() => handleSideClick(side)}  // Image click triggers side selection
              className={`absolute top-0 left-0 w-full h-full object-contain cursor-pointer ${selectedSides.includes(side) ? '' : 'opacity-0'}`}  // Display only if selected
            />
          ))}
        </div>

        {/* Side Selection Buttons using CircleTickButton */}
        <div className="space-y-5 ">
          {Object.keys(images).filter(side => side !== 'inactive').map((side) => (
            <CircleTickButton
              key={side}
              size={32}
              isSelected={selectedSides.includes(side)}
              label={`Side ${side}`}
              onClick={() => handleSideClick(side)}  // Button click triggers side selection
              circleColor={circleColor}  // Forward the circle color prop
              tickColor={tickColor}   // Forward the tick color prop
              hoverColor={hoverColor} // Forward the hover color prop
              selectedColor={selectedColor}   // Forward the selected background color prop
            />
          ))}
        </div>
      </div>

      {/* Right section with Image and Description */}
      <div className="flex flex-col w-5/12 ">
        <img
          src={infoImageSrc} // Use the image source from props
          alt="Fascia Boards"
          className="w-full h-auto mx-auto"
        />
        <p className={`${infoTextBgColor} p-6 ${infoTextColor} w-full text-center`}>
          {infoText}
        </p>
      </div>
    </div>
  );
}

export default BoxSelect;
