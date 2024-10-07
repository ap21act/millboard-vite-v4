import React from 'react';
import PropTypes from 'prop-types'; // To define prop types
import { extractNameFromUrl } from '../../Utils'; // Helper function to extract file name from URL

const FileDownload = ({ files }) => {
  return (
    <div className='py-10 px-4 md:px-8 lg:px-24'>
      <h1 className='mb-12 font-F37-light uppercase text-2xl md:text-3xl'>Downloads</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8'>
        {files.map((fileUrl, index) => (
          <a
            key={index}
            href={fileUrl} // The Cloudinary file URL
            download
            className='flex items-center text-lg md:text-xl font-F37-light text-primary hover:text-green'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-green-600 flex-shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12l-4.5 4.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span className="ml-3">{extractNameFromUrl(fileUrl)}</span> {/* Extracted file name */}
          </a>
        ))}
      </div>
    </div>
  );
};

FileDownload.propTypes = {
  files: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of URLs from Cloudinary
};

export default FileDownload;
