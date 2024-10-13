import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, typingSpeed = 300, deletingSpeed = 100, pauseTime = 1000 }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;
        if (!isDeleting) {
            if (displayText.length < words[wordIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayText(words[wordIndex].substring(0, displayText.length + 1));
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(words[wordIndex].substring(0, displayText.length - 1));
                }, deletingSpeed);
            } else {
                setIsDeleting(false);
                setWordIndex((wordIndex + 1) % words.length);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, words, wordIndex, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span>
            {displayText}
            <span className="blink">|</span>
        </span>
    );
};

export default Typewriter;
