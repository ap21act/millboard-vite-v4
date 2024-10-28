import React, { useState } from 'react';
import CustomLink from '../Components/Common/CustomLink';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // Import HashLink

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
          { name: 'Edging And Fascias', path: 'products/decking/accessories/edging-and-fascias' },
          { name: 'Subframes', path: 'products/decking/accessories/subframes' },
          { name: 'Accessories', path: '/decking/accessories/decking-accessories' },
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
        items: [{ name: 'View Gallery', path: '/inspiration-and-ideas/ideas/gallery' }],
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
          { name: 'Showrooms', path: '/our-showrooms' },
        ],
      },
      {
        title: 'Impact',
        items: [{ name: 'Sustainibilty', path: '/sustainability' }],
      },
    ],
  },
  {
    menuTitle: 'resources',
    sections: [
      {
        title: 'Downloads',
        path: 'resources',
        items: [
          {
            name: 'Brochures & Pricing Guide',
            path: '/resources#brochures-pricing-guide',
          },
          {
            name: 'CAD & Datasheets',
            path: '/resources#cad-datasheets',
          },
          {
            name: 'Certification',
            path: '/resources#certification',
          },
        ],
      },
      {
        title: 'Explore',
        items: [
          { name: 'Work with us', path: '/work-with-us' },
          { name: 'Showrooms', path: '/our-showrooms' },
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
    }, 200);
  };

  return (
    <div className="hidden md:block self-start relative w-screen  z-10">
      <div className="flex justify-between items-center space-x-4 py-4 px-6 max-w-7xl mx-auto">
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
            <button
              onMouseEnter={() => handleMouseEnter(menuIndex)}
              className="font-medium text-base uppercase focus:outline-none transition-all duration-300"
            >
              {menu.menuTitle}
            </button>
          </div>
        ))}

        <Link
          to="/order-sample"
          className="px-4 py-2 text-sm font-medium uppercase border border-black hover:bg-black hover:text-white transition-all duration-300"
        >
          REQUEST FREE SAMPLE
        </Link>
      </div>

      {isMenuOpen.isOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white shadow-lg mt-2 px-6 py-6 h-64 overflow-y-auto"
          onMouseEnter={() => handleMouseEnter(isMenuOpen.index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
            {menuData[isMenuOpen.index].sections.map((section, index) => (
              <div key={index} className="space-y-2">
                {section.path ? (
                  <CustomLink
                    to={section.path}
                    className="text-lg font-semibold hover:text-primary transition-colors duration-200"
                  >
                    {section.title}
                  </CustomLink>
                ) : (
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                )}

                <ul className="space-y-1">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <HashLink
                        smooth
                        to={item.path}
                        className="hover:text-primary transition-colors duration-200"
                      >
                        {item.name}
                      </HashLink>
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
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;

