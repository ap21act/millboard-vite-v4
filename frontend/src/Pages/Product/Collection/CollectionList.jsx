import React from 'react';
import { Link } from 'react-router-dom';
import { extractNameFromUrl } from '../../../Utils';


const data = [

  {
    title: "Enhanced Grain",
    description: "Provides an authentic look and feel with a distinctive grain effect.",
    availability: "10 colours available",
    tileImage: "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730306737/products/decking/collection/enhanced-grain/Decking_Enhanched_Grain_Collections.png",
    images: [
      "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730306738/products/decking/collection/enhanced-grain/MDE126A_Enhanced_Grain_SB_Antique_Oak__Lifestyle_Shallow_Depth_of_Field.webp",
      "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730306740/products/decking/collection/enhanced-grain/MDE126B_Enhanced_Grain_SB_Brushed_Bassalt_Cameo_1.webp"
    ],
    url: "/products/decking/collection/enhanced-grain/antique-oak" // URL to collection details
  },
  {
    title: "Weathered Oak",
    description: "Richly textured to mirror the distinctive aesthetic of premium aged oak",
    availability: "3 colours available",
    tileImage: "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730306819/products/decking/collection/weathered-oak/Decking_Weathered_Oak_Collection.png",
    images: [
      "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730306822/products/decking/collection/weathered-oak/Case_Study_MDW200R_Weathered_Oak_Embered_Project_Imagery_Kew_Childrens_Garden.webp",
      "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730306822/products/decking/collection/weathered-oak/MDW200R_Weathered_Oak_Embered_Cameo_2.webp"
    ],
    url: "/products/decking/collection/weathered-oak/driftwood" // Added URL to navigate to specific collection details
  },
  {
    title: "Last-Grip",
    description: "Richly textured to mirror the distinctive aesthetic of premium aged oak",
    availability: "3 colours available",
    tileImage: "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730306897/products/decking/collection/lasta-grip/Decking_Lasta-Grip_Collection.png",
    images: [
      "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730306899/products/decking/collection/lasta-grip/MDL200G_Enhanced_Grain_Lasta-Grip_Golden_Oak_Cameo_1.webp",
      "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730306901/products/decking/collection/lasta-grip/MDL200G_Lasta_Grip_Coppered_Oak_Cameo_Rope.webp"
    ],
    url: "/products/decking/collection/lasta-grip/coppered-oak" // Added URL to navigate to specific collection details
  },
  // Add more items as needed...
];

const CollectionList = () => {
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
                className="mb-8 animate-slide-in-from-left rounded-lg h-10 w-auto object-cover"
              />
              <div className="mt-4">
                <Link to={item.url} className="btn-length uppercase px-4 py-2 inline-block text-center">
                  Discover the range
                </Link>
              </div>
            </div>

            {/* Right Section with Vertical Carousel */}
            <div className="px-1 lg:w-1/2 flex flex-col gap-4 h-96 overflow-y-scroll scroll-auto">
              {item.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={extractNameFromUrl(image)}
                  className="w-auto h-auto shadow-md"
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


export default CollectionList;
