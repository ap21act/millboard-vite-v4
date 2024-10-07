// InspirationImage.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { extractNameFromUrl } from '../../../Utils'; // Assuming the extractNameFromUrl function is needed here

const InspirationImage = ({ src, onClick, height }) => {
  return (
    <div className="h-full w-full overflow-hidden cursor-pointer" onClick={onClick}>
      <img
        src={src}
        alt={extractNameFromUrl(src)}
        style={{
          width: '100%',
          height: height,
        }}
        className="gallery-image"
        loading="lazy"
      />
    </div>
  );
};

InspirationImage.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  height: PropTypes.string.isRequired,
};

export default InspirationImage;
