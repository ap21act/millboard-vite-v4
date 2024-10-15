import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { extractNameFromUrl } from '../../Utils'; // Import utility functions
import ImageCarousel from '../Components/Common/ImageCarousel'; // Import your carousel component

const InspirationGallery = ({ product ,title="Inspiration"}) => {
  const [randomImages, setRandomImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Extract inspiration images from the product prop
  const inspirationImages = product?.images?.inspirationGallery || [];

  // Randomize images on component mount
  useEffect(() => {
    if (inspirationImages.length > 0) {
      const randomizedImages = [...inspirationImages].sort(() => Math.random() - 0.5);
      setRandomImages(randomizedImages);
    }
  }, [inspirationImages]); // Depend on inspirationImages to rerun if the prop changes

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!randomImages.length) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <p className="font-F37-light text-center py-10 text-4xl uppercase">{title}</p>

      {/* Gallery */}
      <div className="grid grid-cols-3 gap-1">
        {/* Left column with two images stacked vertically */}
        <div className="grid grid-rows-2 gap-1">
          {randomImages[0] && (
            <div className="h-full w-full overflow-hidden" onClick={() => openModal(0)}>
              <img
                src={randomImages[0]}
                alt={extractNameFromUrl(randomImages[0])}
                style={{
                  width: '100%',
                  height: 'clamp(186px, 20vw, 404px)',
                }}
                className="gallery-image-hover"
                loading="lazy"
              />
            </div>
          )}
          {randomImages[1] && (
            <div className="h-full w-full overflow-hidden" onClick={() => openModal(1)}>
              <img
                src={randomImages[1]}
                alt={extractNameFromUrl(randomImages[1])}
                style={{
                  width: '100%',
                  height: 'clamp(186px, 20vw, 404px)',
                }}
                className="gallery-image-hover"
                loading="lazy"
              />
            </div>
          )}
        </div>

        {/* Right image that spans the full height */}
        {randomImages[2] && (
          <div className="col-span-2" onClick={() => openModal(2)}>
            <img
              src={randomImages[2]}
              alt={extractNameFromUrl(randomImages[2])}
              style={{
                width: '100%',
                height: 'clamp(375px, 40vw, 816px)',
              }}
              className="gallery-image"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Middle section with two images */}
      <div className="grid grid-cols-2 gap-1 mt-1">
        {randomImages[3] && (
          <div className="overflow-hidden" onClick={() => openModal(3)}>
            <img
              src={randomImages[3]}
              alt={extractNameFromUrl(randomImages[3])}
              style={{
                width: '100%',
                height: 'clamp(200px, 30vw, 612px)',
              }}
              className="gallery-image-hover"
              loading="lazy"
            />
          </div>
        )}
        {randomImages[4] && (
          <div className="overflow-hidden" onClick={() => openModal(4)}>
            <img
              src={randomImages[4]}
              alt={extractNameFromUrl(randomImages[4])}
              style={{
                width: '100%',
                height: 'clamp(200px, 30vw, 612px)',
              }}
              className="gallery-image-hover"
              loading="lazy"
            />
          </div>
        )}
      </div>

      {/* Bottom section with three images */}
      <div className="grid grid-cols-3 gap-1 mt-1">
        {randomImages.slice(5, 8).map((src, index) => (
          <div className="overflow-hidden" onClick={() => openModal(index + 5)} key={index}>
            <img
              src={src}
              alt={extractNameFromUrl(src)}
              style={{
                width: '100%',
                height: 'clamp(150px, 20vw, 405px)',
              }}
              className="gallery-image-hover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-11/12 h-auto mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-opacity-100 font-extrabold text-3xl"
              aria-label="Close Modal"
            >
              &times;
            </button>
            <ImageCarousel
              images={randomImages.map((src) => ({
                src,
                alt: extractNameFromUrl(src),
              }))}
              initialIndex={selectedImageIndex}
              buttonColor="#fff"
              paginationColor="#fff"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// PropTypes for validation
InspirationGallery.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.shape({
      inspirationGallery: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default InspirationGallery;
