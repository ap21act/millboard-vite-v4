import React from 'react';
import PropTypes from 'prop-types';

const TitleWithLine = ({ title, subtitle, lineWidth = 'w-12', lineColor = 'bg-green', subtitleSpace = '' }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center my-8">
      <div className="relative inline-block">
        {/* Green line */}
        <div className={`absolute -top-3 left-0 h-1 ${lineWidth} ${lineColor}`}></div>
        <div className="flex items-baseline">
          {/* Title */}
          <span className="inline-block text-6xl font-semibold">{title}</span>
        </div>
        {/* Subtitle with optional spacing */}
        <div className="font-F37-light text-6xl mt-2 text-left pl-3 w-full">
          {subtitleSpace}
          {subtitle}
        </div>
      </div>
    </div>
  );
};

// PropTypes to ensure correct props are passed
TitleWithLine.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  lineWidth: PropTypes.string,
  lineColor: PropTypes.string,
  subtitleSpace: PropTypes.string,
};



export default TitleWithLine;
