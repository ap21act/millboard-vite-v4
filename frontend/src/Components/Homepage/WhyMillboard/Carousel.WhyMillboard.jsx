import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ title, slides }) => {
    const [current, setCurrent] = useState(0);
    const totalSlides = slides.length;

    const changeSlide = (direction) => {
        setCurrent((prev) => (prev + direction + totalSlides) % totalSlides);
    };

    return (
        <div className="bg-primary text-white">
            {/* Static Title */}
            <h2 className="text-green-dark uppercase text-center text-4xl py-8">
                {title}
            </h2>

            {/* Image and Text Block */}
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Image Section */}
                <div className="w-full md:w-[70%] mb-6 md:mb-0">
                    <img
                        src={slides[current].image.src}
                        alt={slides[current].image.alt || "Carousel Image"}
                        className="w-full h-[300px] md:h-[500px] object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-[30%] p-8">
                    <h4 className="text-2xl font-F37-light mb-4">{slides[current].textContent.heading}</h4>
                    <h4 className="text-3xl font-F37-light font-light mb-4">
                        {slides[current].textContent.subheading}
                    </h4>
                    <p className="text-lg font-F37-light font-light mb-6">
                        {slides[current].textContent.description}
                    </p>
                    {/* Conditionally render the link */}
                    {slides[current].link && slides[current].link.url && slides[current].link.text && (
                        <a
                            href={slides[current].link.url}
                            className="inline-block text-lg font-light uppercase pb-2 hover:text-green-500"
                        >
                            {slides[current].link.text}
                        </a>
                    )}
                </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-between items-center py-6 px-8">
                {/* Left and Right Arrows */}
                <div className="flex items-center space-x-6">
                    {/* Previous Button */}
                    <button
                        onClick={() => changeSlide(-1)}
                        disabled={current === 0}
                        className={`${
                            current === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
                        }`}
                        aria-label="Previous Slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-8 h-8 text-white"
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
                        disabled={current === totalSlides - 1}
                        className={`${
                            current === totalSlides - 1
                                ? 'opacity-50 cursor-not-allowed'
                                : 'opacity-100 cursor-pointer'
                        }`}
                        aria-label="Next Slide"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2.5}
                            stroke="currentColor"
                            className="w-8 h-8 text-white"
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
                    <div className="relative w-1/2 h-0.5 bg-white-background rounded-full">
                        <div
                            className="h-full bg-green rounded-full transition-all duration-300 ease-in-out"
                            style={{ width: `${((current + 1) / totalSlides) * 100}%` }}
                        />
                    </div>
                </div>

                {/* Pagination */}
                <div className="text-lg font-bold text-white">
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

Carousel.defaultProps = {
    slides: [],
};

export default Carousel;
