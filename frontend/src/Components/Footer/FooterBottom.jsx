import React from 'react';

const FooterBottom = () => {
  return (
    <div>
      <hr className="bg-white-nav border-none" />
      <section className="bg-white-nav text-center font-normal items-center justify-center py-3 px-4 md:px-0">
        <span className="flex flex-col sm:flex-row items-center justify-center text-xs sm:text-sm">
          {/* Location SVG Icon */}
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            United Kingdom
          </span>
          <span className="mx-2 hidden sm:block">|</span> {/* Divider hidden on mobile */}
          <span className="mt-2 sm:mt-0">
            &copy; {new Date().getFullYear()} The Living Outdoors Ltd - All rights reserved
          </span>
        </span>
      </section>
    </div>
  );
}

export default FooterBottom;
