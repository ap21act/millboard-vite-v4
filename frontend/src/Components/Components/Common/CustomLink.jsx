import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CustomLink = ({ to, children, textColor = 'text-primary', hoverBorderColor = 'hover:border-green', className = '', ...props }) => {
  return (
    <Link
      to={to}
      className={`relative inline-block no-underline ${textColor} pb-1 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:pb-2 ${hoverBorderColor} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  className: PropTypes.string,
};

export default CustomLink;
