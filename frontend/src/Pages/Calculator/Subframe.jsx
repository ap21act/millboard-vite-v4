import React, { useState } from 'react';
import HeroHeader from './HeroHeader';
import Frame from './Frame';

function Subframe() {
  const [selectedFrame, setSelectedFrame] = useState(null);

  const handleFrameSelection = (frame) => {
    setSelectedFrame(frame);
  };

  // Array of frame options
  const frameOptions = [
    {
      key: 'Plas-Pro',
      imageSrc: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calc/DuoSpan.png',
      labelText: 'Plas-Pro',
    },
    {
      key: 'DuoLift',
      imageSrc: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calc/DuoLift.png',
      labelText: 'DuoLift™',
    },
    {
      key: 'DuoSpan',
      imageSrc: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calc/Plas-Pro.png',
      labelText: 'DuoSpan™',
    },
  ];

  return (
    <div className="py-24">
      <HeroHeader
        titleText="Subframe" // Title text
        hoverText="The subframe is the structure that sits beneath your deck, supporting your boards and providing a firm platform for them to rest on." // Hover popup text
        descriptionText="Please select which subframe type you would like."
      />
      <div className="flex justify-center items-center space-x-8 mt-8">
        {frameOptions.map((frame) => (
          <Frame
            key={frame.key}
            imageSrc={frame.imageSrc}
            labelText={frame.labelText}
            size="w-96 h-96" // Custom size for this frame
            textSize="text-3xl" // Larger text
            gap="mt-4 p-3" // Gap between image and text
            isSelected={selectedFrame === frame.key} // Visual feedback if selected
            onClick={() => handleFrameSelection(frame.key)} // Handle selection
          />
        ))}
      </div>
    </div>
  );
}

export default Subframe;
