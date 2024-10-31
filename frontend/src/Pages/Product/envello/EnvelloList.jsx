import React from 'react';
import { Link } from 'react-router-dom';
import { extractNameFromUrl } from '../../../Utils';



const data = [

  {
    title: "Board & Batten+",
    description: " A modern take on a traditional style, with a vertical design that creates a striking finish.",
    availability: "6 colours available",
    tileImage: "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730364281/products/cladding/collection/board-and-batten_/Cladding_Board___Batten_Collections.png",
    images: [
      "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730364295/products/cladding/collection/board-and-batten_/MCBF360R_Board_and_Batten_Burnt_Cedar_and_MCL360D_Shadow_Line__Smoked_Oak_Dual_1.jpg",
      "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730364293/products/cladding/collection/board-and-batten_/MCBF360R_Board_Batten_Burnt_Cedar_Cameo_Lighting.png"
    ],
    url: "/products/cladding/collection/board-and-batten+/antique-oak" // URL to collection details
  },
  {
    title: " Décor ",
    description: "A contemporary style with a horizontal design that creates a sleek finish.",
    availability: "3 colours available",
    tileImage: "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730364483/products/cladding/collection/decor/Envello_Decor_Shutter_Collections.png",
    images: [
      "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730364481/products/cladding/collection/decor/MCL360R_Shadow_Line_Plus_Burnt_Cedar_GLDC32G_Decor_Curve_32mm_Gold_Lifestyle_Cameo_2.png",
      "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730364481/products/cladding/collection/decor/MCL360R_Shadow_Line_Plus_Burnt_Cedar_GLDC32G_Decor_Curve_32mm_Gold_Lifestyle_Cameo_2.png"
    ],
    url: "/products/cladding/collection/decor" // Added URL to navigate to specific collection details
  },
  {
    title: " Shadow Line+ ",
    description: "Delivering a classic style with a modern twist, featuring a shadow line that creates a striking finish.",
    availability: "7 colours available",
    tileImage: "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730364579/products/cladding/collection/shadow-line_/Cladding_Shadow_Line_Collections.png",
    images: [
      "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730364582/products/cladding/collection/shadow-line_/MCL360D_Shadow_Line_Plus_Smoked_Oak_MDE176D_Enhanced_Grain_Smoked_Oak_Lifestyle_CGI_Hero.png",
      "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730364584/products/cladding/collection/shadow-line_/MDE360D_Shadow_Line_Plus_Smoked_Oak_Lifestyle_close_up.png"
    ],
    url: "/products/cladding/collection/shadow-line+/antique-oak" // Added URL to navigate to specific collection details
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
