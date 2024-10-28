import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { extractNameFromUrlForResource, getFileSize } from '../../../Utils';

const PDFDownloadCard = ({ files }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {files.map((fileUrl, index) => {
        const [dynamicFileSize, setDynamicFileSize] = useState('Loading...');

        // Use extractNameFromUrlForResource to get the file name and type
        const { fileName, extension } = extractNameFromUrlForResource(fileUrl);

        // Fetch file size if it's not provided
        useEffect(() => {
          getFileSize(fileUrl).then((size) => setDynamicFileSize(size));
        }, [fileUrl]);

        return (
          <div
            key={index}
            className="flex flex-col justify-between p-5 border rounded-lg shadow-sm bg-white min-h-[250px] h-[260px] max-w-sm w-full"
          >
            {/* Icon and Title */}
            <div className="flex items-start space-x-4 mb-4">
              {/* Download Icon */}
              <div className="flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </div>

              {/* Title and File Size */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold leading-tight">{fileName}</h3>
                <p className="text-sm mt-3">{dynamicFileSize}</p>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-end mt-auto">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative inline-block no-underline pb-1 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:pb-2 hover:border-green text-green-700 font-medium text-sm`}
              >
                Download {extension}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// PropTypes for validation
PDFDownloadCard.propTypes = {
  files: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PDFDownloadCard;
