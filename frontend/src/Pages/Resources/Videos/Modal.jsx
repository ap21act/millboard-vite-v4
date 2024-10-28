import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ videoUrl, title, isOpen, onClose, extension, fileSize }) => {
  if (!isOpen) return null;

  // Adjust the video URL to include Cloudinary player parameters
  const cloudinaryVideoUrl = `https://player.cloudinary.com/embed/?public_id=${videoUrl.replace(
    'https://res.cloudinary.com/ddtzxyzex/video/upload/',
    ''
  )}&cloud_name=ddtzxyzex&player[showJumpControls]=true&player[showLogo]=false&player[colors][base]=%23414042&player[colors][accent]=%23AAC93C&player[colors][text]=%23F9F7F1&player[fontFace]=Fira%20Sans&autoplay=true`;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      onClick={handleBackdropClick} // Close modal when clicking outside the content
    >
      {/* Modal Content */}
      <div className="relative max-w-6xl w-full md:w-3/4 lg:w-3/4 xl:w-2/3 mx-4 md:mx-0  overflow-hidden shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white hover:text-green focus:outline-none z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Video Iframe */}
        <div className="relative pb-[56.25%] h-0 overflow-hidden"> {/* 16:9 Aspect Ratio */}
          <iframe
            src={cloudinaryVideoUrl} // Cloudinary video URL
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>

        {/* Video Title and File Info */}
        <div className="p-6 bg-white-nav">
          <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
          <p className="text-sm mt-3">
            ({extension.toUpperCase()} {fileSize})
          </p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  extension: PropTypes.string.isRequired,
  fileSize: PropTypes.string.isRequired,
};

export default Modal;
