import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { extractNameFromUrl } from '../../../Utils';

const Carousel = ({ title,slides= [], }) => {
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  const changeSlide = (direction) => {
    setCurrent((prev) => (prev + direction + totalSlides) % totalSlides);
  };

  return (
    <div className="bg-primary text-white max-w-screen-2xl font-F37-light mx-auto">
      {/* Static Title */}
      <h2 className="text-green-dark uppercase text-center text-2xl sm:text-3xl lg:text-4xl font-F37-light py-8">
        {title}
      </h2>

      {/* Image and Text Block */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-8">
        {/* Image Section */}
        <div className="w-full lg:w-[60%] mb-6 lg:mb-0">
          <img
            src={slides[current].image.src}
            alt={extractNameFromUrl(slides[current].image.src) || "Carousel Image"}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover  shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[35%] p-4 md:p-8 text-center lg:text-left">
          <h4 className="text-xl sm:text-2xl lg:text-3xl font-F37-light mb-2 lg:mb-4">
            {slides[current].textContent.heading}
          </h4>
          <h5 className="text-lg sm:text-xl lg:text-2xl font-light mb-2 lg:mb-4">
            {slides[current].textContent.subheading}
          </h5>
          <p className="text-sm sm:text-base lg:text-lg font-light mb-4 lg:mb-6">
            {slides[current].textContent.description}
          </p>
          {/* Conditionally render the link */}
          {slides[current].link && slides[current].link.url && slides[current].link.text && (
            <a
              href={slides[current].link.url}
              className="inline-block text-base sm:text-lg font-light uppercase pb-2 hover:border-b-2 border-green transition-colors duration-300"
            >
              {slides[current].link.text}
            </a>
          )}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-4 md:px-8 space-y-4 sm:space-y-0">
        {/* Left and Right Arrows */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Previous Button */}
          <button
            onClick={() => changeSlide(-1)}
            className="hover:opacity-80 transition-opacity duration-200"
            aria-label="Previous Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={() => changeSlide(1)}
            className="hover:opacity-80 transition-opacity duration-200"
            aria-label="Next Slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex-grow mx-2 md:mx-4">
          <div className="relative w-full md:w-1/3 h-1 bg-white-background rounded-full">
            <div
              className="h-full bg-green rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${((current + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>

        {/* Pagination */}
        <div className="text-sm md:text-lg font-bold text-white">
          {`0${current + 1} / 0${totalSlides}`}
        </div>
      </div>
    </div>
  );
};

// PropTypes for validating props
Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string,
      }).isRequired,
      textContent: PropTypes.shape({
        heading: PropTypes.string.isRequired,
        subheading: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
      link: PropTypes.shape({
        url: PropTypes.string,
        text: PropTypes.string,
      }),
    })
  ).isRequired,
};



export default Carousel;
