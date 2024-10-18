import React from 'react';
import HeroHeader from '../HeroHeader';
import FasciaSides from './FasciaSides';
import BoxSelect from '../BoxSelect';

function Fascia() {
  return (
    <div className="bg-gray-200 mt-4 py-24">
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
      <div className="grid grid-cols-2 gap-8 mt-10">
        {/* Left: FasciaSides (includes both the 3D diagram and side selection buttons) */}
        <div className="flex justify-center items-center">
        <BoxSelect 
  images={{
    inactive: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-inactive.svg',
    A: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-a.svg',
    B: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-b.svg',
    C: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-c.svg',
    D: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-d.svg'
  }}
  allowMultiSelect={true}  // Multi-select mode
/>

        </div>

        {/* Right: Image and Description */}
        <div className="text-white">
  <img
    src="https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calc/Fascia-Boards.jpg"
    alt="Fascia Boards"
    className="w-3/5 h-auto mx-auto"
  />
  <p className="bg-gray-800 p-8 text-white w-3/5 mx-auto">
    Fascia boards cover the vertical sides of your deck to hide the frame underneath. Select the sides that you would like to add matching fascia to.
  </p>
</div>

      </div>
    </div>
  );
}

export default Fascia;
