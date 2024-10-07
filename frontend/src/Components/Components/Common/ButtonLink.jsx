import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = ({ text, className = '', onClick }) => {
  return (
    <button
      className={`border no-underline border-primary py-2.5 cursor-pointer uppercase text-xl px-6 hover:text-green hover:bg-primary transition-all duration-300 ease-in-out focus:bg-primary focus:text-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLink;
