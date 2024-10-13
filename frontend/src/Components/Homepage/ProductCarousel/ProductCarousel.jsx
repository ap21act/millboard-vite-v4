import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductCarousel = ({ slides = [], paginationColor = '#000', initialIndex = 0, buttonColor = '#000' }) => {
    const [current, setCurrent] = useState(0);
    const totalSlides = slides.length;

    // Update the current index when initialIndex changes (useful when opening the modal)
    useEffect(() => {
        setCurrent(initialIndex);
    }, [initialIndex]);

    // Function to change slides
    const changeSlide = (direction) => {
        setCurrent((prev) => (prev + direction + totalSlides) % totalSlides);
    };

    // Function to jump to a specific slide
    const goToSlide = (index) => {
        setCurrent(index);
    };

    return (
        <div className="relative transition-transform duration-700 ease-in-out scroll-smooth my-3">
            {/* Slide Section */}
            <div className="w-full  ">
                {slides[current]} {/* Render the current slide */}
            </div>

            {/* Previous and Next Buttons */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex space-x-4">
                <button
                    onClick={() => changeSlide(-1)}
                    className="p-3 bg-black bg-opacity-70 rounded-full  hover:bg-green hover:bg-opacity-90 text-white"
                    aria-label="Previous Slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button
                    onClick={() => changeSlide(1)}
                    className="p-3 bg-black bg-opacity-70 rounded-full hover:bg-green hover:bg-opacity-90 text-white"
                    aria-label="Next Slide"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center space-x-4 mt-4">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-10 h-1 transition-colors duration-300 ${
                            current === index ? 'bg-green' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

// PropTypes for validating props
ProductCarousel.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.node).isRequired, // Now expects an array of JSX elements (nodes)
    initialIndex: PropTypes.number,
    buttonColor: PropTypes.string,
};

export default ProductCarousel;
