import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { extractNameFromUrl, getFileSize } from '../../../Utils';

const PDFDownloadCard = ({ fileUrl, fileSize }) => {
  const [dynamicFileSize, setDynamicFileSize] = useState(fileSize || 'Loading...');

  // Extract the name and file type from the provided file URL
  const { fileName: title, extension } = extractNameFromUrl(fileUrl);

  // Fetch file size if it's not provided
  useEffect(() => {
    if (!fileSize) {
      getFileSize(fileUrl).then((size) => setDynamicFileSize(size));
    }
  }, [fileUrl, fileSize]);

  return (
    <div className="flex flex-col justify-between p-10 border rounded-lg shadow-md bg-white max-w-md min-w-[350px] min-h-[220px] mx-auto mb-4">
      {/* Icon and Title */}
      <div className="flex items-start space-x-2">
        {/* Download Icon */}
        <div className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>

        {/* Title and File Size */}
        <div>
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <p className="text-sm text-gray-500">{dynamicFileSize}</p>
        </div>
      </div>

      {/* Download Button */}
      <a
        href={fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-end mt-4 text-green hover:underline"
      >
        Download {extension}
      </a>
    </div>
  );
};

// PropTypes for validation
PDFDownloadCard.propTypes = {
  fileUrl: PropTypes.string.isRequired,
  fileSize: PropTypes.string, // Optional, if not provided it will be fetched dynamically
};

export default PDFDownloadCard;
