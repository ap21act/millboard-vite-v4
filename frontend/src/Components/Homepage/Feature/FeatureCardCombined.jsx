import React from 'react';

const FeatureCardCombined = ({ 
  icon, 
  title, 
  description, 
  linkText, 
  linkUrl, 
  style, 
  indicatorPosition, 
  lineLength = 'h-16', 
  linePosition = 'center' 
}) => {
  // Determine the alignment class for the line position relative to the card
  let alignmentClasses = '';
  let lineCircleMargin = ''; // New variable to handle specific margin for line and circle
  let circleMargin = ''; // Separate margin just for the circle

  switch (linePosition) {
    case 'left':
      alignmentClasses = 'self-start';
      lineCircleMargin = 'ml-8'; // General breathing space for line
      circleMargin = 'ml-6'; // Additional margin for the circle only
      break;
    case 'right':
      alignmentClasses = 'self-end';
      lineCircleMargin = 'mr-2';
      circleMargin = 'mr-1';
      break;
    default:
      alignmentClasses = 'self-center';
  }

  return (
    <div className="absolute flex flex-col items-center" style={style}>
      {/* Indicator Elements */}
      {indicatorPosition === 'bottom' && (
        <>
          {/* Circle and Line pointing down with extra margin for spacing */}
          <div className={`w-4 h-4 border-2 border-green rounded-full ${alignmentClasses} ${circleMargin} hidden md:block`}></div>
          <div className={`w-[2px] ${lineLength} bg-green ${alignmentClasses} ${lineCircleMargin} hidden md:block`}></div>
          {/* Feature Card */}
          <div className={`bg-white shadow-lg p-4 w-96 border-l-4 border-green relative flex flex-row items-start ${alignmentClasses}`}>
            {/* Icon */}
            <div className="flex-shrink-0 p-1">
              <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
            </div>
            {/* Text Content */}
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="mb-4">{description}</p>
              <a href={linkUrl} className="text-green font-semibold hover:underline">
                {linkText}
              </a>
            </div>
          </div>
        </>
      )}

      {indicatorPosition === 'top' && (
        <>
          {/* Feature Card */}
          <div className={`bg-white shadow-lg p-4 w-96 border-l-4 border-green relative flex flex-row items-start ${alignmentClasses}`}>
            {/* Icon */}
            <div className="flex-shrink-0 p-1">
              <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
            </div>
            {/* Text Content */}
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="mb-4">{description}</p>
              <a href={linkUrl} className="text-green font-semibold hover:scale-115 hover:no-underline">
                {linkText}
              </a>
            </div>
          </div>
          {/* Line and Circle pointing up with extra margin for spacing */}
          <div className={`w-[2px] ${lineLength} bg-green ${alignmentClasses} ${lineCircleMargin} hidden md:block`}></div>
          <div className={`w-4 h-4 border-2 border-green rounded-full ${alignmentClasses} ${circleMargin} hidden md:block`}></div>
        </>
      )}
    </div>
  );
};

export default FeatureCardCombined;
