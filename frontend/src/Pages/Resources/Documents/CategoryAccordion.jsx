import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PDFDownloadCard from './PDFDownloadCard';

const CategoryAccordion = ({ title, files }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      {/* Category Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-6 font-semibold flex justify-between items-center text-gray-800 hover:text-primary"
      >
        {title}
        <span className={`transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
          {/* Arrow Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Files Container - Expandable Content */}
      {isOpen && (
        <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PDFDownloadCard files={files} />
        </div>
      )}
    </div>
  );
};

CategoryAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  files: PropTypes.arrayOf(
    PropTypes.shape({
      fileUrl: PropTypes.string.isRequired,
      fileSize: PropTypes.string,
    })
  ).isRequired,
};

export default CategoryAccordion;
