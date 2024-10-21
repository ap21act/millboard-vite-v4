import React from 'react';
import { Link } from 'react-router-dom';
import { extractNameFromUrl } from '../../../Utils';



const data = [

  {
    title: "Enhanced Grain",
    description: "Provides an authentic look and feel with a distinctive grain effect.",
    availability: "4 colours available",
    tileImage: "https://www.millboard.com/sites/default/files/2024-01/Decking_Enhanced%20Grain_Collections.png",
    images: [
      "https://millboard.widen.net/content/b50838e4-1e1e-4a94-8437-fa42ed094ef6/web/Case%20Study_MDW200R_Enhanced_Grain.jpg",
      "https://millboard.widen.net/content/b50838e4-1e1e-4a94-8437-fa42ed094ef6/web/Case%20Study_MDW200R_Enhanced_Grain.jpg"
    ],
    url: "/products/decking/collection/enhanced-grain/antique-oak" // URL to collection details
  },
  {
    title: "Weathered Oak",
    description: "Richly textured to mirror the distinctive aesthetic of premium aged oak",
    availability: "3 colours available",
    tileImage: "https://www.millboard.com/sites/default/files/2024-01/Decking_Weathered%20Oak_Collections.png",
    images: [
      "https://millboard.widen.net/content/b50838e4-1e1e-4a94-8437-fa42ed094ef6/web/Case%20Study_MDW200R_Weathered%20Oak_Embered_Project%20Imagery_Kew%20Childrens%20Garden.jpg?crop=yes&w=504&h=504&itok=yM-RRW9j",
      "https://millboard.widen.net/content/b50838e4-1e1e-4a94-8437-fa42ed094ef6/web/Case%20Study_MDW200R_Weathered%20Oak_Embered_Project%20Imagery_Kew%20Childrens%20Garden.jpg?crop=yes&w=504&h=504&itok=yM-RRW9j"
    ],
    url: "/collection-details" // Added URL to navigate to specific collection details
  },
  {
    title: "Last-Grip",
    description: "Richly textured to mirror the distinctive aesthetic of premium aged oak",
    availability: "3 colours available",
    tileImage: "https://www.millboard.com/sites/default/files/2024-01/Decking_Weathered%20Oak_Collections.png",
    images: [
      "https://millboard.widen.net/content/b50838e4-1e1e-4a94-8437-fa42ed094ef6/web/Case%20Study_MDW200R_Weathered%20Oak_Embered_Project%20Imagery_Kew%20Childrens%20Garden.jpg?crop=yes&w=504&h=504&itok=yM-RRW9j",
      "https://millboard.widen.net/content/b50838e4-1e1e-4a94-8437-fa42ed094ef6/web/Case%20Study_MDW200R_Weathered%20Oak_Embered_Project%20Imagery_Kew%20Childrens%20Garden.jpg?crop=yes&w=504&h=504&itok=yM-RRW9j"
    ],
    url: "/collection-details" // Added URL to navigate to specific collection details
  },
  // Add more items as needed...
];

const EnvelloList = () => {
  return (
    <div className="container mx-auto p-4 pb-10 flex flex-col gap-16 w-full">
      {data.map((item, index) => (
        <div key={index} className="w-full">
          {/* Title with line */}
          

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 lg:gap-16 mt-10">
            {/* Left Section with Text and Main Image */}
            <div className="text-left lg:w-1/2">
              <h2 className="uppercase mb-4 text-4xl font-F37-light tracking-wide">
                <Link to={item.url} className=" transition duration-200">
                  {item.title}
                </Link>
              </h2>
              <p className="font-F37-light text-sm mb-4">
                {item.description}
              </p>
              <p className="uppercase font-F37-light mb-4">
                <Link to={item.url} className=" transition duration-200">
                  {item.availability}
                </Link>
              </p>
              <img
                src={item.tileImage}
                alt={extractNameFromUrl(item.tileImage)}
                className="mb-8 animate-slide-in-from-left rounded-lg h-10 w-auto"
              />
              <div className="mt-4">
                <Link to={item.url} className="btn-length uppercase px-4 py-2 inline-block text-center">
                  Discover the range
                </Link>
              </div>
            </div>

            {/* Right Section with Vertical Carousel */}
            <div className="px-1 lg:w-1/2 flex flex-col gap-4 h-96 overflow-y-scroll">
              {item.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={extractNameFromUrl(image)}
                  className="w-full h-auto shadow-md"
                />
              ))}
            </div>
          </div>

          {/* Horizontal line at the bottom of each item */}
          <span className="border-b border-white-background w-full block mt-10"></span>
        </div>
      ))}
    </div>
  );
};

export default EnvelloList;
