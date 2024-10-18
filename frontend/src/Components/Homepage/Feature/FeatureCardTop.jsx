import React from 'react';

const FeatureCardTop = ({ icon, title, description, linkText, linkUrl, style }) => {
  return (
    <div className="absolute feature-card-top" style={style}>
      {/* Line and Circle Indicator pointing downwards */}
      

      {/* Feature Card */}
      <div className="bg-white shadow-lg p-6  max-w-xs mt-4 border-l-4 border-green relative ml-4">
  <div className="flex items-start">
    {/* Icon with consistent padding */}
    <div className="flex-shrink-0 mr-4 p-1">
      <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
    </div>

    {/* Title and Description */}
    <div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className=" mb-4">{description}</p>
      <a href={linkUrl} className="text-green font-semibold hover:underline">
        {linkText}
      </a>
    </div>
  </div>
</div>

      <div className="flex flex-col items-center mb-4">
        <div className="w-[2px] h-16 bg-green"></div> {/* Green line pointing down (adjusted length for consistency) */}
        <div className="w-4 h-4 border-2 border-green rounded-full"></div> {/* Green circle */}
      </div>
    </div>
  );
};

export default FeatureCardTop;
