import React, { useState } from 'react';
import CustomLink from '../../../Components/Components/Common/CustomLink';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  const menuData = [
    {
      menuTitle: 'Decking',
      sections: [
        {
          title: 'Decking Collections',
          items: [
            { name: 'Enhanced Grain', path: '/decking/enhanced-grain' },
            { name: 'Weathered Oak', path: '/decking/weathered-oak' },
            { name: 'Lasta Grip', path: '/decking/lasta-grip' },
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
          title: 'Envello',
          items: [
            { name: 'Board & Batten+', path: '/cladding/board-batten' },
            { name: 'Décor', path: '/cladding/decor' },
            { name: 'Shadow Line+', path: '/cladding/shadow-line' },
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
    <div className="flex space-x-4 relative">
      {menuData.map((menu, menuIndex) => (
        <div
          key={menuIndex}
          onMouseEnter={() => handleMouseEnter(menuIndex)}
          onMouseLeave={handleMouseLeave}
          className={
            isMenuOpen.index !== null && isMenuOpen.index !== menuIndex
              ? 'opacity-50 transition-opacity duration-300'
              : 'opacity-100'
          }
        >
          {/* Mega Menu Toggle Button */}
          <button
            onMouseEnter={() => handleMouseEnter(menuIndex)}
            className="font-medium text-xl px-4 py-2 uppercase focus:outline-none"
          >
            {menu.menuTitle}
          </button>
        </div>
      ))}

      {/* Mega Menu Content */}
      {isMenuOpen.isOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg mt-2 p-6 grid grid-cols-3 gap-8 transition-opacity duration-300 ease-in-out z-50 opacity-100 visible`}
          onMouseEnter={() => handleMouseEnter(isMenuOpen.index)}
          onMouseLeave={handleMouseLeave}
        >
          {menuData[isMenuOpen.index].sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <CustomLink to={item.path} className="">
                      {item.name}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {menuData[isMenuOpen.index].imageSrc && (
            <div>
              <img
                src={menuData[isMenuOpen.index].imageSrc}
                alt={menuData[isMenuOpen.index].imageAlt}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      )}

      {/* Request Free Sample Button */}
      <Link
        to="/request-sample"
        className="bg-white text-green px-6 py-2 rounded hover:bg-green-700 transition-all duration-300"
      >
        REQUEST FREE SAMPLE
      </Link>
    </div>
  );
};

export default MegaMenu;
