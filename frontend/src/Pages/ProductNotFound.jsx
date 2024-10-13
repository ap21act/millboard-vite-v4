import React from 'react';
import { Link } from 'react-router-dom';
import {error404Icon} from '../Assets/Icons';

const ProductNotFound = () => {
  return (
    <section className="">
      <div className="container  px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-2">
        <div className="w-full lg:w-1/2">
          <p className="text-3xl font-medium ">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold  md:text-3xl">Page not found</h1>
          <p className="mt-4 ">
            Sorry, the page you are looking for doesn't exist. Here are some helpful links:
          </p>

          <div className="flex items-center mt-6 gap-x-3">
            <Link to="/">
              <button className="flex items-center justify-center w-1/2 px-8 py-4 text-sm text-gray-700 transition-colors duration-200 bg-primary border rounded-lg gap-x-2 sm:w-auto    dark:text-gray-200 dark:border-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                </svg>
                <span>Go back</span>
              </button>
            </Link>

            <Link to="/">
              <button className="w-1/2 px-8 py-4 text-sm tracking-wide text-white transition-colors duration-200 bg-green rounded-lg shrink-0 sm:w-auto  ">
                Take me home
              </button>
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <img className="w-full max-w-lg lg:mx-auto" src={error404Icon} alt="Page not found illustration" />
        </div>
      </div>
    </section>
  );
};

export default ProductNotFound;