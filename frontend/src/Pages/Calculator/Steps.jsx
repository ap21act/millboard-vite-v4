import React from 'react';
import HeroHeader from './HeroHeader';
import BoxSelect from './BoxSelect';

function Steps() {
  return (
    <div className="bg-gray-200 mt-4 py-24">
      <HeroHeader
        titleText="Steps" // Title text
        hoverText="In your project includes steps to adjacent sites, which page will you add them to?" // Hover popup text
        descriptionText="Please select which side you would like to add steps to."

        />
      <BoxSelect
  images={{
    inactive: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-inactive.svg',
    A: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-a.svg',
    B: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-b.svg',
    C: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-c.svg',
    D: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator-Zing/sides-d.svg'
  }}
  allowMultiSelect={false}  // Multi-select mode
  infoImageSrc="https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calc/Steps-new.jpg"  // Info image source
  infoText="If your project includes steps to adjacent areas, which side will you add them to?"  // Info text
  infoTextBgColor="bg-primary"  // Background color for text
  infoTextColor="text-white"  // Text color
  circleColor="border-primary"  // Custom circle color
  tickColor="text-white"   // Custom tick color
  hoverColor="hover:bg-gray-100" // Custom hover color
  selectedColor="bg-green"   // Custom selected background color
/>

    </div>
  );
}

export default Steps;
