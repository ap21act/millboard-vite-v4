import React, { useState } from 'react';
import Frames from './Frame';
import HeroHeader from './HeroHeader';
import BoxSelect from './BoxSelect';

function Edging() {
  const [selectedEdge, setSelectedEdge] = useState(null);

  const handleEdgeSelection = (edge) => {
    setSelectedEdge(edge);
  };

  return (
    <div className="mt-4 pt-24 pb-3 border-b ">
        <div>
        <HeroHeader
        titleText="Fascia" // Title text
        hoverText="Fascia boards cover the vertical sides of the decking to hide the frame below. Select the pages you want to add matching fascia to." // Hover popup text
        descriptionText={
          <>
            Please select which sides you would like to apply fascia boards to. <br />
            This is based on full length of side and height of deck to floor.
          </>
        } // Description text with line break
      />

      {/* Grid layout to place FasciaSides and Image + Description */}
      <BoxSelect
  images={{
    inactive: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/edging-inactive.svg',
    A: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/edging-a.svg',
    B: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/edging-b.svg',
    C: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/edging-c.svg',
    D: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/edging-d.svg'
  }}
  allowMultiSelect={true}  // Multi-select mode
  infoImageSrc="https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calc/Edging-Strips.jpg"  // Info image source
  infoText="
  Edging strips or boards provide a tasteful edge to your deck, and normally sit above your fascia. Select the sides that you would like to add edging to, and select your preferred finish.
"  // Info text
  infoTextBgColor="bg-white"  // Background color for text
  infoTextColor="text-primary"  // Text color
  circleColor="border-primary"  // Custom circle color
  tickColor="text-white"   // Custom tick color
  hoverColor="hover:bg-gray-100" // Custom hover color
  selectedColor="bg-green"   // Custom selected background color
/>
        </div>
      <p className="text-center text-lg mt-4">
        Which style of board would you prefer for your edging?
      </p>
      <div className="flex justify-center items-center space-x-8 mt-8">
        {/* Square Edge Option */}
        <Frames
          imageSrc="https://s3.eu-west-1.amazonaws.com/millboard/svg/edge-type-square.svg"
          labelText="Square Edge"
          size="w-96 h-96"  // Custom size for this frame
          textSize="text-3xl"  // Larger text
          gap="mt-4"  // Gap between image and text
          isSelected={selectedEdge === 'Square'}  // Visual feedback if selected
          onClick={() => handleEdgeSelection('Square')}  // Handle selection
        />

        {/* Bullnose Edge Option */}
        <Frames
          imageSrc="https://s3.eu-west-1.amazonaws.com/millboard/svg/edge-type-bullnose.svg"
          labelText="Bullnose Edge"
          size="w-96 h-96"
          textSize="text-3xl"
          gap="mt-4"
          isSelected={selectedEdge === 'Bullnose'}
          onClick={() => handleEdgeSelection('Bullnose')}
        />
      </div>
    </div>
  );
}

export default Edging;
