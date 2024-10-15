import React, { useState } from 'react';
import CustomLink from '../Components/Common/CustomLink';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  const menuData = [
    {
      menuTitle: 'Decking',
      sections: [
        {
          title: 'Decking Collections',
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
          title: 'Envello',
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
    <div className="flex justify-center items-center space-x-4 relative w-screen">
      <div className="flex flex-wrap justify-center items-center space-x-4 py-4 bg-white w-screen">
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

        {/* Request Free Sample Button */}
        <Link
          to="/order-sample"
          className="btn-length transition-all duration-300"
        >
          REQUEST FREE SAMPLE
        </Link>
      </div>

      {/* Mega Menu Content */}
      {isMenuOpen.isOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg mt-2 p-6 grid grid-cols-1 md:grid-cols-3 gap-8 transition-opacity duration-300 ease-in-out z-50 opacity-100 visible`}
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
            <div className="hidden md:block">
              <img
                src={menuData[isMenuOpen.index].imageSrc}
                alt={menuData[isMenuOpen.index].imageAlt}
                className="w-full h-auto"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
