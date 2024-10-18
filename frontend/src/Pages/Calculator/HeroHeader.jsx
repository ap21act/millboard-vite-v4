import React from 'react';
import HoverPopup from './HoverPopup';

const HeroHeader = ({ bgColor, titleText, hoverText, descriptionText }) => {
  return (
    <div className={`${bgColor} `}>
      {/* Title Section */}
      <div className="justify-center items-center mb-6">
        <div className="flex items-center justify-center gap-16">
          <h1 className="text-center font-F37-light text-4xl">{titleText}</h1>
          <span>
            <HoverPopup text={hoverText} />
          </span>
        </div>
        <p className="text-center text-xl mt-4">{descriptionText}</p>
      </div>
    </div>
  );
};

export default HeroHeader;
