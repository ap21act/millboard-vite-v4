import React, { useState } from 'react';
import CustomLink from '../Components/Common/CustomLink';
import { Link } from 'react-router-dom';

export const menuData = [
  {
    menuTitle: 'Decking',
    sections: [
      {
        title: 'Decking Collections',path: 'products/decking/collection',
        items: [
          { name: 'Enhanced Grain', path: 'products/decking/collection/enhanced-grain/antique-oak' },
          { name: 'Weathered Oak', path: 'products/decking/collection/weathered-oak/driftwood' },
          { name: 'Lasta Grip', path: 'products/decking/collection/lasta-grip/coppered-oak' },
        ],
      },
      {
        title: 'Complete your deck',
        items: [
          { name: 'Edging And Fascias', path: '/decking/edging-fascias' },
          { name: 'Subframes', path: '/decking/subframes' },
          { name: 'Accessories', path: '/decking/accessories' },
        ],
      },
    ],
    imageSrc: 'https://via.placeholder.com/400x200',
    imageAlt: 'Decking Inspiration',
  },
  {
    menuTitle: 'Cladding',
    sections: [
      {
        title: 'Envello',path: 'products/cladding/collection',
        items: [
          { name: 'Board & Batten+', path: 'products/cladding/collection/board-and-batten+/antique-oak' },
          { name: 'Décor', path: '/cladding/decor' },
          { name: 'Shadow Line+', path: 'products/cladding/collection/shadow-line+/antique-oak' },
        ],
      },
      {
        title: 'Accessories',
        items: [
          { name: 'Cladding Accessories', path: '/cladding/accessories' },
          { name: 'Touch Up Paint', path: '/cladding/touch-up-paint' },
        ],
      },
    ],
    imageSrc: 'https://via.placeholder.com/400x200',
    imageAlt: 'Cladding Inspiration',
  },
  {
    menuTitle: 'Inspiration and Ideas',
    sections: [
      {
        title: 'Blog',
        items: [
          { name: 'View All Articles', path: '/inspiration/articles' },
          { name: 'New Products', path: '/inspiration/new-products' },
          { name: 'Advice & Inspiration', path: '/inspiration/advice' },
        ],
      },
      {
        title: 'Inspiration',
        items: [{ name: 'View Gallery', path: '/inspiration/gallery' }],
      },
      {
        title: 'Case Studies',
        items: [
          { name: 'View All', path: '/case-studies/all' },
          { name: 'Residential', path: '/case-studies/residential' },
          { name: 'Commercial', path: '/case-studies/commercial' },
          {
            name: 'West Midlands Safari Park Luxury Lodges',
            path: '/case-studies/west-midlands-safari-park',
          },
        ],
      },
    ],
  },
  {
    menuTitle: 'Inspiration and Ideas',
    sections: [
      {
        title: 'Blog',
        items: [
          { name: 'View All Articles', path: '/inspiration/articles' },
          { name: 'New Products', path: '/inspiration/new-products' },
          { name: 'Advice & Inspiration', path: '/inspiration/advice' },
        ],
      },
      {
        title: 'Inspiration',
        items: [{ name: 'View Gallery', path: '/inspiration/gallery' }],
      },
      {
        title: 'Case Studies',
        items: [
          { name: 'View All', path: '/case-studies/all' },
          { name: 'Residential', path: '/case-studies/residential' },
          { name: 'Commercial', path: '/case-studies/commercial' },
          {
            name: 'West Midlands Safari Park Luxury Lodges',
            path: '/case-studies/west-midlands-safari-park',
          },
        ],
      },
    ],
  },
  {
    menuTitle: 'Why Millboard',
    sections: [
      {
        title: 'Millboard difference',
        items: [
          { name: 'About us', path: '/about-us' },
          { name: 'Reviews', path: '/reviews' },
        ],
      },
      {
        title: 'Explore',
        items: [
          { name: 'Work with us', path: '/work-with-us' },
          { name: 'Showrooms', path: '/outdoors-showrooms' },
        ],
      },
      {
        title: 'Impact',
        items: [{ name: 'Sustainibilty', path: '/sustainability' }],
      },
    ],
  },
];

const MegaMenu = () => {
  

  const [isMenuOpen, setIsMenuOpen] = useState({ index: null, isOpen: false });
  let closeTimeout = null;

  const handleMouseEnter = (index) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    setIsMenuOpen({ index, isOpen: true });
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsMenuOpen({ index: null, isOpen: false });
    }, 200); // Delay of 200ms before closing
  };

  return (
    <div className="hidden md:block self-start flex justify-center items-center space-x-4 relative w-screen">
      <div className="flex flex-wrap justify-center items-center space-x-4 py-4 bg-white w-screen">
        {menuData.map((menu, menuIndex) => (
          <div
            key={menuIndex}
            onMouseEnter={() => handleMouseEnter(menuIndex)}
            onMouseLeave={handleMouseLeave}
            className={
              isMenuOpen.index !== null && isMenuOpen.index !== menuIndex
                ? 'opacity-80 transition-opacity duration-300'
                : 'opacity-100'
            }
          >
            {/* Mega Menu Toggle Button */}
            <button
              onMouseEnter={() => handleMouseEnter(menuIndex)}
              className="font-medium text-sm sm:text-base md:text-lg lg:text-xl px-2 sm:px-4 py-1 sm:py-2 uppercase focus:outline-none transition-all duration-300"
            >
              {menu.menuTitle}
            </button>
          </div>
        ))}

        {/* Request Free Sample Button */}
        <Link
          to="/order-sample"
          className="btn-length px-3 py-1 sm:px-6 sm:py-2 text-xs sm:text-sm md:text-base font-medium uppercase border border-black hover:bg-black hover:text-white transition-all duration-300"
        >
          REQUEST FREE SAMPLE
        </Link>
      </div>

      {/* Mega Menu Content */}
      {isMenuOpen.isOpen && (
  <div
    className={`absolute top-full left-0 w-max bg-white shadow-lg mt-2 px-52 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-3 transition-opacity duration-300 ease-in-out z-50 opacity-100 visible`}
    onMouseEnter={() => handleMouseEnter(isMenuOpen.index)}
    onMouseLeave={handleMouseLeave}
  >
    {/* Section Columns */}
    {menuData[isMenuOpen.index].sections.map((section, index) => (
  <div key={index} className="space-y-4">
    {/* Section Title: Conditionally render a CustomLink if the section has a path */}
    {section.path ? (
      <CustomLink
        to={section.path}
        className="text-xl font-semibold font-F37-light  hover:text-primary transition-colors duration-200"
      >
        {section.title}
      </CustomLink>
    ) : (
      <h3 className="text-xl font-semibold font-F37-light">{section.title}</h3>
    )}

    {/* Section Items */}
    <ul className="space-y-2">
      {section.items.map((item, idx) => (
        <li key={idx}>
          {item.path ? (
            <CustomLink
              to={item.path}
              className=" hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </CustomLink>
          ) : (
            <span>{item.name}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
))}



    {/* Image Section */}
    {menuData[isMenuOpen.index].imageSrc && (
      <div className="hidden md:block self-start">
        <img
          src={menuData[isMenuOpen.index].imageSrc}
          alt={menuData[isMenuOpen.index].imageAlt}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    )}
  </div>
)}
    </div>

  );
};

export default MegaMenu;
