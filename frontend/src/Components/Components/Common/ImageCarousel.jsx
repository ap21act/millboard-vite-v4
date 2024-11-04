import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ImageCarousel = ({ images = [], paginationColor = '#000', initialIndex = 0, progressBackgroundColor = '#FCFBF7', progressColor = '#799512', buttonColor = '#000' }) => {
    const [current, setCurrent] = useState(initialIndex);
    const totalImages = images.length;

    // Update the current index when initialIndex changes (useful when opening the modal)
    useEffect(() => {
        setCurrent(initialIndex);
    }, [initialIndex]);

    const changeSlide = (direction) => {
        setCurrent((prev) => (prev + direction + totalImages) % totalImages);
    };

    // Render a placeholder if there are no images
    if (totalImages === 0) {
        return (
            <div className="text-center py-8">
                <p>No images available.</p>
            </div>
        );
    }

    return (
        <div className="text-white w-full max-w-screen-lg mx-auto">
            {/* Image Section with Responsive Height */}
            <div className="w-full overflow-hidden">
                <img
                    src={images[current]?.src}
                    alt={images[current]?.alt || "Carousel Image"}
                    className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
                    loading="lazy"
                />
            </div>

            {/* Carousel Controls */}
            {totalImages > 1 && (
                <div className="flex justify-between items-center py-6 px-8">
                    {/* Left and Right Arrows */}
                    <div className="flex items-center space-x-6">
                        {/* Previous Button */}
                        <button
                            onClick={() => changeSlide(-1)}
                            className={`${
                                totalImages > 1 ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                            }`}
                            aria-label="Previous Slide"
                            style={{ color: buttonColor }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-8 h-8"
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
                            className={`${
                                totalImages > 1 ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'
                            }`}
                            aria-label="Next Slide"
                            style={{ color: buttonColor }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-8 h-8"
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
                    <div className="flex-grow mx-4">
                        <div className="relative w-1/2 h-0.5 rounded-full" style={{ backgroundColor: progressBackgroundColor }}>
                            <div
                                className="h-full rounded-full transition-all duration-300 ease-in-out"
                                style={{
                                    backgroundColor: progressColor,
                                    width: `${((current + 1) / totalImages) * 100}%`
                                }}
                            />
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="text-lg font-bold" style={{ color: paginationColor }}>
                        {`${current + 1} / ${totalImages}`}
                    </div>
                </div>
            )}
        </div>
    );
};

// PropTypes for validating props
ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ).isRequired,
    initialIndex: PropTypes.number,
    paginationColor: PropTypes.string,
    progressBackgroundColor: PropTypes.string,
    progressColor: PropTypes.string,
    buttonColor: PropTypes.string,
};

export default ImageCarousel;
