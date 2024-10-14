import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ category, subCategory, type, name }) => {
  const formatString = (str) => {
    return str
      .split('-')  // Split by hyphen
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalize first letter of each word
      .join(' ');  // Join words with a space
  };
  return (
    <nav className="text-base py-4  px-4 rounded-md mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 ">
        {/* Home Link with Custom SVG Icon */}
        <li className="flex items-center">
          <Link to="/" className="flex items-center  hover:text-green transition duration-200">
            {/* SVG Icon for Home */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </Link>
          <span className="mx-2 ">{'>'}</span>
        </li>

        {category && (
          <li className="flex items-center">
            <Link to={`/products/${category}`} className=" hover:text-green transition duration-200">
            {formatString(category)}
            </Link>
            <span className="mx-2 ">{'>'}</span>
          </li>
        )}
        
        {subCategory && (
          <li className="flex items-center">
            <Link to={`/products/${category}/${subCategory}`} className=" hover:text-green transition duration-200">
            {formatString(subCategory)}
            </Link>
            <span className="mx-2 ">{'>'}</span>
          </li>
        )}

        {type && (
          <li className="flex items-center">
            <Link to={`/products/${category}/${subCategory}/${type}`} className=" hover:text-green transition duration-200">
            {formatString(type)}
            </Link>
            <span className="mx-2 ">{'>'}</span>
          </li>
        )}

        {name && (
          <li className="flex items-center">
            <span className="font-medium">{formatString(name)}</span>
          </li>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
