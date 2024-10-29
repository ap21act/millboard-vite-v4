import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './HeroBanner.css';
import { extractNameFromUrl } from '../../Utils';

const HeroBanner = ({ imageUrl, videoSrc,  style, className }) => {
    const heroRef = useRef(null);

    useEffect(() => {
        const updateClipPath = () => {
            if (!heroRef.current) return;
    
            const viewportHeight = window.innerHeight;
            const heroRect = heroRef.current.getBoundingClientRect();
            const distanceFromTop = heroRect.top;
            const visibilityPercentage = Math.min(1, Math.max(0, 1 - distanceFromTop / viewportHeight));
    
            const threshold = 0.4;
            const adjustedVisibility = Math.max(0, visibilityPercentage - threshold) / (1 - threshold);
    
            const finalClipPathThreshold = 0.9;
            const currentClipPath = visibilityPercentage >= finalClipPathThreshold
                ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                : `polygon(${14.5 - 15 * adjustedVisibility}% 0%, ${85.5 + 15 * adjustedVisibility}% 0%, ${85.5 + 15 * adjustedVisibility}% 100%, ${14.5 - 15 * adjustedVisibility}% 100%)`;
    
            heroRef.current.style.clipPath = currentClipPath;
        };
    
        const handleScroll = () => {
            requestAnimationFrame(updateClipPath);
        };
    
        if (window.innerWidth >= 768) { // Run clip-path animations only for larger screens
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleScroll);
            updateClipPath(); // Initial call
        }
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
    

    return (
        <div
            id="primary-hero-banner"
            ref={heroRef}
            className={`hero-banner ${className}`}
            style={{
                ...style,
            }}
        >
            {videoSrc ? (
                <video src={videoSrc} autoPlay loop muted className="media-content" />
            ) : (
                <div
                    className="media-content image-background"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                    role="img"
                    aria-label={extractNameFromUrl(imageUrl)}
                />
            )}
        </div>
    );
};

HeroBanner.propTypes = {
    imageUrl: PropTypes.string,
    videoSrc: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
};

HeroBanner.defaultProps = {
    style: {},
    className: '',
};

export default HeroBanner;
