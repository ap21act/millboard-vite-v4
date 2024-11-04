import React, { useState, useEffect } from 'react';

import NavbarLanguageDropdown from '../Components/NavbarLanguageDropdown';
import Logo from '../../Assets/Images/Logos/logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../Redux/Slices/darkModeSlice';

const TopNav = ({ openCart }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  // Update HTML class when dark mode state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="relative z-50">
      <div
        className={`sticky top-0 z-50 flex items-center justify-between px-4 md:px-12 py-3 md:py-5 border-b bg-white dark:bg-primary transition-all duration-300 ${
          isScrolled ? 'shadow-lg py-2' : ''
        }`}
      >
        {/* Left section: Language dropdown and contact */}
        <div className="flex gap-2 items-center">
          <NavbarLanguageDropdown />
          <ul className="flex gap-2 items-center text-sm md:text-base">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-gray-800 dark:text-gray-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.654 2.328a1 1 0 0 1 1.18-.598l3.44.916a1 1 0 0 1 .72.858l.497 4.08a1 1 0 0 1-.505 1.01L7.832 9.97a15.036 15.036 0 0 0 6.199 6.199l.378-1.152a1 1 0 0 1 1.01-.504l4.08.497a1 1 0 0 1 .858.72l.916 3.44a1 1 0 0 1-.598 1.18l-2.857 1.143a4 4 0 0 1-3.258-.145c-2.76-1.356-5.35-3.224-7.656-5.53-2.307-2.307-4.174-4.897-5.53-7.656a4 4 0 0 1-.145-3.258L3.654 2.328z" />
            </svg>
            <a href="tel:02074824661" className="hover:underline text-gray-800 dark:text-gray-200">
              020 7482 4661
            </a>
          </ul>
        </div>

        {/* Center section: Logo */}
        <a href="/" className="flex-shrink-0">
          <img src={Logo} alt="Logo" className="h-8 md:h-12" />
        </a>

        {/* Right section: Social, Cart, and Dark Mode icons */}
        <div className="flex gap-3 md:gap-4 items-center">
          <a
            href="https://www.instagram.com/living_outdoors.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-base flex items-center gap-1 hover:text-gray-600 dark:hover:text-gray-400 text-gray-800 dark:text-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="currentColor"
            >
              <path d="M16 3C8.8 3 3 8.8 3 16v18c0 7.2 5.8 13 13 13h18c7.2 0 13-5.8 13-13V16c0-7.2-5.8-13-13-13H16zM16 5h18c6.1 0 11 4.9 11 11v18c0 6.1-4.9 11-11 11H16c-6.1 0-11-4.9-11-11V16c0-6.1 4.9-11 11-11zm21 6a2 2 0 100 4 2 2 0 000-4zM25 14c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zm0 2c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z" />
            </svg>
            <span>Instagram</span>
          </a>

          {/* Dark Mode Toggle Button */}
          <button onClick={() => dispatch(toggleDarkMode())} className="hover:text-gray-600 dark:hover:text-gray-400">
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 md:h-6 md:w-6 text-yellow-400"
              fill="currentColor"
            >
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5 md:h-6 md:w-6 text-gray-800"
              fill="currentColor"
            >
              <path d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" />
            </svg>
          )}
        </button>

          {/* Cart Icon with badge */}
          <button onClick={openCart} className="relative hover:text-gray-600 dark:hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {totalItems > 0 && (
              <div className="absolute -top-2 -right-3 h-4 w-4 flex items-center justify-center rounded-full bg-green text-white text-xs font-bold">
                {totalItems}
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
