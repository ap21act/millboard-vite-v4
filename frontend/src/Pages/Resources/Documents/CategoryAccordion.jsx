import React from 'react';
import PropTypes from 'prop-types';
import PDFDownloadCard from './PDFDownloadCard';

const CategoryAccordion = ({ title, filesUrls, isOpen, onToggle }) => {
  return (
    <div
      className={`mb-6 border-t ${isOpen ? 'border-green' : 'border-white-background'}`}
    >
      {/* Category Header */}
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 px-6 hover:bg-gray-50"
      >
        <span className="font-semibold  text-2xl">{title}</span>
        <span
          className={`transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 text-primary"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Files Container - Expandable Content */}
      {isOpen && (
        <div className="px-6 pb-6">
          <PDFDownloadCard files={filesUrls} />
        </div>
      )}
    </div>
  );
};

CategoryAccordion.propTypes = {
  title: PropTypes.string.isRequired,
  filesUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired, // Controls the open/close state
  onToggle: PropTypes.func.isRequired, // Function to toggle open/close
};

export default CategoryAccordion;
