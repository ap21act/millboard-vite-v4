import React from 'react';

const FeatureCardCombined = ({ icon, title, description, linkText, linkUrl, style, indicatorPosition, lineLength = 'h-16', linePosition = 'center' }) => {
  // Determine the position of the line relative to the box
  let alignmentClasses = '';
  switch (linePosition) {
    case 'left':
      alignmentClasses = 'self-start';
      break;
    case 'right':
      alignmentClasses = 'self-end';
      break;
    default:
      alignmentClasses = 'self-center'; // Center as default
  }

  return (
    <div className="absolute flex flex-col items-center" style={style}>
      {/* Indicator Elements */}
      {indicatorPosition === 'bottom' && (
        <>
          {/* Line and Circle pointing down */}
          <div className={`w-4 h-4 border-2 border-green rounded-full ${alignmentClasses} hidden md:block`}></div>
          <div className={`w-[2px] ${lineLength} bg-green ${alignmentClasses} hidden md:block`}></div>
          {/* Feature Card */}
          <div className={`bg-white shadow-lg p-4 rounded-md w-72 border-l-4 border-green relative flex flex-row items-start mb-0 mt-0 ${alignmentClasses}`}>
            {/* Icon */}
            <div className="flex-shrink-0 p-1">
              <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
            </div>
            {/* Text Content */}
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-700 mb-4">{description}</p>
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
          <div className={`bg-white shadow-lg p-4 rounded-md w-72 border-l-4 border-green relative flex flex-row items-start mb-0 mt-0 ${alignmentClasses}`}>
            {/* Icon */}
            <div className="flex-shrink-0 p-1">
              <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
            </div>
            {/* Text Content */}
            <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-700 mb-4">{description}</p>
              <a href={linkUrl} className="text-green font-semibold hover:underline">
                {linkText}
              </a>
            </div>
          </div>
          {/* Circle pointing up */}
          <div className={`w-[2px] ${lineLength} bg-green ${alignmentClasses} hidden md:block`}></div>
          <div className={`w-4 h-4 border-2 border-green rounded-full ${alignmentClasses} hidden md:block`}></div>
        </>
      )}
    </div>
  );
};

export default FeatureCardCombined;
