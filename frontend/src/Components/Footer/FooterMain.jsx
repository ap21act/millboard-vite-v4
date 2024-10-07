import React from 'react';
import StayinTheLoop from '../Components/StayinTheLoop'; //Stay in the loop component

const FooterMain = () => {
  return (
    <div className="mx-auto w-fit ">
      <div className="flex flex-wrap justify-between items-start space-y-8 lg:space-y-0 lg:flex-nowrap">
        {/* Our Products */}
        <div className="w-fit lg:w-1/4 flex-shrink-0">
          <h2 className="mb-4 font-semibold text-primary text-xl">Our Products</h2>
          <ul className="text-gray-500 font-extrabold text-sm space-y-2">
            <li>Decking</li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Millboard Collections</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Enhanced Grain</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Weathered Oak</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Lasta Grip</a>
            </li>
          </ul>

          <ul className="text-gray-500 font-extrabold text-sm space-y-2 mt-5">
            <li>Cladding</li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Envello</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Board & Batten +</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Décor</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Shadow Line +</a>
            </li>
          </ul>
        </div>

        {/* Inspiration */}
        <div className="w-fit lg:w-1/4 flex-shrink-0">
          <h2 className="mb-4 font-semibold text-primary text-xl">Inspiration</h2>
          <ul className="text-gray-500 font-extrabold text-sm space-y-2">
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Blog</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Case Studies</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Gallery</a>
            </li>
          </ul>
        </div>

        {/* Discover Millboard */}
        <div className="w-fit lg:w-1/4 flex-shrink-0">
          <h2 className="mb-4 font-semibold text-primary text-xl">Discover <br />Millboard</h2>
          <ul className="text-gray-500 font-extrabold text-sm space-y-2">
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">About us</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Careers</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Reviews</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Showrooms</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Sustainability</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Warranties</a>
            </li>
          </ul>

          <h2 className="mt-10 mb-4 font-semibold text-primary text-xl">Resources</h2>
          <ul className="text-gray-500 font-extrabold text-sm space-y-2">
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Downloads</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Portal</a>
            </li>
          </ul>
        </div>

        {/* Start a Project */}
        <div className="w-fit lg:w-1/4 flex-shrink-0">
          <h2 className="mb-4 font-semibold text-primary text-xl">Start a project</h2>
          <ul className="text-gray-500 font-extrabold text-sm space-y-2">
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Find an installer</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Installation Guide</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Order a sample</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Where to buy</a>
            </li>
          </ul>

          <h2 className="mt-10 mb-4 font-semibold text-primary text-xl">Customer Service</h2>
          <ul className="text-gray-500 font-extrabold text-sm space-y-2">
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Approved global distributors</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">Contact us</a>
            </li>
            <li className="text-xs leading-6">
              <a href="#" className="hover:text-gray-700">FAQs</a>
            </li>
          </ul>

          <ul className="text-gray-500 font-extrabold text-sm space-y-2 mt-5">
            <li className="text-xs leading-6">General Enquiries</li>
            <li className="text-xs leading-6">
              <a href="tel:02476439943" className="hover:text-gray-700">024 7643 9943</a>
            </li>
            <li className="text-xs leading-6">
              <a href="mailto:sushantbasnet2027@gmail.com" className="hover:text-gray-700">
                Email: sales@thelivingoutdoors.com
              </a>
            </li>
          </ul>
        </div>

        {/* StayinTheLoop component on the same line */}
        <div className="w-fit lg:w-64 flex-shrink-0">
          <StayinTheLoop />
        </div>
      </div>
    </div>
  );
};

export default FooterMain;

