import React from 'react';
import PropTypes from 'prop-types';

const TitleWithLine = ({ title, subtitle }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center my-8">
      <h2 className="">
        <div className="relative inline-block">
          {/* Green line on the left */}
          <span className="absolute -top-3 left-0 inline-block h-1 w-12 bg-green"></span>
          <span className="inline-block text-6xl font-semibold">{title}</span>
          <h2 className="font-F37-light text-6xl mt-2 text-left pl-3" style={{ width: '100%',  }}>
        {subtitle}
      </h2>
        </div>
      </h2>
      
      
    </div>
  );
};

// PropTypes to ensure correct props are passed
TitleWithLine.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default TitleWithLine;
