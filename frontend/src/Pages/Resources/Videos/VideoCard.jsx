import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { extractNameFromUrlForResource, getFileSize } from '../../../Utils';
import Modal from './Modal'; // Import a modal component for video playback

const VideoCard = ({ videos }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [dynamicFileSize, setDynamicFileSize] = useState({});

  useEffect(() => {
    // Fetch sizes for all videos
    videos.forEach((videoUrl) => {
      getFileSize(videoUrl).then((size) => {
        setDynamicFileSize((prev) => ({ ...prev, [videoUrl]: size }));
      });
    });
  }, [videos]);

  const handleOpenModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {videos.map((videoUrl, index) => {
        const { fileName, extension } = extractNameFromUrlForResource(videoUrl);
        const fileSize = dynamicFileSize[videoUrl] || 'Loading...';

        return (
          <div
            key={index}
            className="flex flex-col justify-between p-5 border rounded-lg shadow-sm bg-white min-h-[360px] h-[360px] max-w-sm w-full"
          >
            {/* Video Thumbnail */}
            <div
              onClick={() => handleOpenModal(videoUrl)}
              className="relative cursor-pointer mb-4"
            >
              <video
                src={videoUrl}
                className="shadow-sm object-cover w-full h-48"
                controls={false}
                muted
                preload="metadata"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 text-white opacity-75"
                >
                  <polygon points="5,3 19,12 5,21" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Title and File Details */}
            <div className="flex-grow ">
              <h3 className="text-xl font-semibold leading-tight">{fileName}</h3>
              <p className="text-sm mt-3">
                ({extension.toUpperCase()} {fileSize})
              </p>
            </div>
          </div>
        );
      })}

      {/* Modal for Video Playback */}
      {isOpen && selectedVideo && (
        <Modal
          videoUrl={selectedVideo}
          title={extractNameFromUrlForResource(selectedVideo).fileName}
          isOpen={isOpen}
          onClose={handleCloseModal}
          extension={extractNameFromUrlForResource(selectedVideo).extension}
          fileSize={dynamicFileSize[selectedVideo] || 'Loading...'}
        />
      )}
    </div>
  );
};

VideoCard.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default VideoCard;
