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
          { name: 'Accessories', path: 'products/decking/accessories/decking-accessories' },
        ],
      },
    ],
    imageSrc: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730301524/products/Home/megamenu/MDE176H_Enhanced_Grain_Ashwood_Golden_Oak_Mix_Lifestyle_hero_1.webp',
    imageAlt: 'Decking Inspiration',
  },
  {
    menuTitle: 'Cladding',
    sections: [
      {
        title: 'Envello',path: 'products/cladding/collection',
        items: [
          { name: 'Board & Batten+', path: 'products/cladding/collection/board-and-batten+/antique-oak' },
          { name: 'Décor', path: '/products/cladding/collection/decor' },
          { name: 'Shadow Line+', path: 'products/cladding/collection/shadow-line+/antique-oak' },
        ],
      },
      {
        title: 'Accessories',
        items: [
          { name: 'Cladding Accessories', path: '/products/cladding/accessories/cladding-accessories' },
          { name: 'Touch Up Paint', path: 'products/decking/accessories/decking-accessories/touch-up-paint' },
        ],
      },
    ],
    imageSrc: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730301523/products/Home/megamenu/MCBF360A_Board_Batten_Antique_Oak_Lifestyle_Hero_CGI_Less_Shadow_1.webp',
    imageAlt: 'Cladding Inspiration',
  },
  {
    menuTitle: 'Inspiration and Ideas',
    sections: [
      {
        title: 'Blog',
        items: [
          { name: 'View All Articles', path: 'https://www.millboard.com/en-gb/blog',
          external: true },
          { name: 'New Products', path: 'https://www.millboard.com/en-gb/blog?sort_bef_combine=field_publish_date_value_DESC&field_blog_category_target_id=46&field_product_type_target_id=All&year=all',external:true },
          { name: 'Advice & Inspiration', path: 'https://www.millboard.com/en-gb/blog?sort_bef_combine=field_publish_date_value_DESC&field_blog_category_target_id=36&field_product_type_target_id=All&year=all', external: true},
          { name: 'Events', path: 'https://www.millboard.com/en-gb/blog?sort_bef_combine=field_publish_date_value_DESC&field_blog_category_target_id=51&field_product_type_target_id=All&year=all', external: true},

        ],
      },
      {
        title: 'Inspiration',
        items: [{ name: 'View Gallery', path: '/inspiration-and-ideas/ideas/gallery' }],
      },
      {
        title: 'Case Studies',
        items: [
          { name: 'View All', path: 'https://www.millboard.com/en-gb/case-studies', external: true },
          { name: 'Residential', path: 'https://www.millboard.com/en-gb/case-studies', external: true },
          { name: 'Commercial', path: 'https://www.millboard.com/en-gb/case-studies', external: true },
  
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
          { name: 'Reviews', path: 'https://www.feefo.com/en-GB/reviews/millboard', external: true },
          {name: 'Why Millboard ?', path: '/why/explore/why-millboard' },
        ],
      },
      {
        title: 'Explore',
        items: [
          
          { name: ' Showrooms', path: '/our-showrooms' },
          { name: ' Outdoors Showroom', path: '/our-showrooms/kentish-town' },
          { name: ' Joinery Showroom', path: '/our-showrooms/potters-bar' },
        ],
      },
      {
        title: 'Impact',
        items: [{ name: 'Sustainibilty', path: '/about-us' }, ],
        
      },
    ],
  },
  {
    menuTitle: 'resources',
    sections: [
      {
        title: 'Downloads',
        path: '/resources',
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
        title: 'Installation',
        items: [{ name: 'Installation Tutorials', path: '/how-to-guides' },
        { name: 'Installation Guide', path: '/resources' }],
       
      },
      {
        title: 'Planning',
        items: [
          { name: 'Decking Calculator', path: 'https://deckplanner.millboard.com/' },
          { name: 'Order a Sample', path: '/order-sample' },
        ],
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
    <div className="hidden md:block self-start relative w-screen z-10">
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
              className="font-medium text-xl uppercase focus:outline-none transition-all duration-300"
            >
              {menu.menuTitle}
            </button>
          </div>
        ))}

        <Link
          to="/order-sample"
          className="px-4 py-2 text-lg text-center font-medium uppercase border border-primary hover:bg-primary hover:text-green transition-all duration-300"
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
                      {item.external ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative inline-block no-underline pb-1 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:pb-2 hover:border-green text-base"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <HashLink
                          smooth
                          to={item.path}
                          className="relative inline-block no-underline pb-1 border-b-2 border-transparent transition-all duration-300 ease-in-out hover:pb-2 hover:border-green text-base"
                        >
                          {item.name}
                        </HashLink>
                      )}
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

