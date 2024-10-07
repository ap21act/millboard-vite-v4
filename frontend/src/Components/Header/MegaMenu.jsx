import React, { useState } from 'react';

// Define common data for Decking and Cladding sections
const productTabs = {
  Decking: {
    sections: [
      { title: 'Decking Collections', items: ['Enhanced Grain', 'Weathered Oak', 'Lasta Grip'] },
      { title: 'Complete your deck', items: ['Edging And Fascias', 'Subframes', 'Accessories'] },
    ],
    imageSrc: 'https://via.placeholder.com/1200x600',
    imageAlt: 'Decking',
  },
  Cladding: {
    sections: [
      { title: 'Envello Collections', items: ['Timber Cladding', 'Composite Cladding'] },
      { title: 'Complete your cladding', items: ['Cladding Trims', 'Cladding Accessories'] },
    ],
    imageSrc: 'https://via.placeholder.com/400x200',
    imageAlt: 'Cladding',
  },
};

// Define other mega menus content
const otherMenus = {
  inspirationIdeas: {
    sections: [
      { title: 'Ideas and Inspiration', items: ['Design Concepts', 'Project Ideas'] },
      { title: 'Get Inspired', items: ['Inspiration Gallery', 'Customer Projects'] },
    ],
    imageSrc: 'https://via.placeholder.com/400x200',
    imageAlt: 'Inspiration',
  },
  whyMillboard: {
    sections: [
      { title: 'About Millboard', items: ['Our Values', 'Sustainability'] },
      { title: 'Why Choose Us', items: ['Quality Assurance', 'Global Reach'] },
    ],
    imageSrc: 'https://via.placeholder.com/400x200',
    imageAlt: 'Why Millboard',
  },
  startProject: {
    sections: [
      { title: 'Get Started', items: ['Planning', 'Tools & Resources'] },
      { title: 'Project Guidance', items: ['Step-by-Step Guides', 'Consult an Expert'] },
    ],
    imageSrc: 'https://via.placeholder.com/400x200',
    imageAlt: 'Start a Project',
  },
  resources: {
    sections: [
      { title: 'Resource Library', items: ['Documentation', 'Support'] },
      { title: 'Guides & Tutorials', items: ['How-to Videos', 'FAQ'] },
    ],
    imageSrc: 'https://via.placeholder.com/400x200',
    imageAlt: 'Resources',
  },
};

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState('');
  const [activeTab, setActiveTab] = useState('Decking');

  const toggleMenu = (menu) => setIsOpen(isOpen === menu ? '' : menu);

  const renderMenuContent = (menu) => {
    const content = otherMenus[menu];
    return content ? (
      <div className="grid grid-cols-3 gap-16 h-full w-full">
        {content.sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-bold mb-4">{section.title}</h3>
            <ul className="space-y-4 text-primary font-F37-light">
              {section.items.map((item, i) => (
                <li key={i} className="hover:text-green">{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex justify-end items-center">
          <img
            src={content.imageSrc}
            alt={content.imageAlt}
            className="rounded-lg shadow-lg object-cover"
            style={{ width: '300px', height: '200px' }} // Consistent image size
          />
        </div>
      </div>
    ) : null;
  };

  return (
    <header className="bg-white relative">
      {/* Top Navigation */}
      <nav className="container mx-auto flex justify-between items-center py-4 px-8">
        <ul className="flex space-x-8 text-gray-700 font-semibold">
          {/* Our Products Menu */}
          <li className="relative">
            <button
              onMouseEnter={() => toggleMenu('ourProducts')}
              className={`px-4 hover:text-green ${isOpen === 'ourProducts' ? 'font-bold' : 'text-base'}`}
            >
              OUR PRODUCTS
            </button>
            {isOpen === 'ourProducts' && (
              <div
                className="absolute left-0 top-full mt-2 bg-white shadow-lg p-8 z-50 transition-all duration-300 ease-in-out"
                style={{ width: '1000px', height: '400px' }} // Fixed size for consistency
              >
                <div className="flex justify-center space-x-8 mb-8">
                  {Object.keys(productTabs).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-2 px-6 border-b-4 ${activeTab === tab ? 'border-green text-green' : 'border-transparent text-primary'}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-16 h-full">
                  {productTabs[activeTab].sections.map((section, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-bold mb-4">{section.title}</h3>
                      <ul className="space-y-4 text-primary font-F37-light">
                        {section.items.map((item, i) => (
                          <li key={i} className="hover:text-green">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="flex justify-end items-center">
                    <img
                      src={productTabs[activeTab].imageSrc}
                      alt={productTabs[activeTab].imageAlt}
                      className="rounded-lg shadow-lg"
                      style={{ width: '300px', height: '200px' }} // Consistent image size
                    />
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Other Menus */}
          {Object.keys(otherMenus).map((menu) => (
            <li key={menu} className="relative">
              <button
                onMouseEnter={() => toggleMenu(menu)}
                className={`px-4 hover:text-green ${isOpen === menu ? 'font-bold' : 'text-base'}`}
              >
                {menu.replace(/([A-Z])/g, ' $1').toUpperCase()}
              </button>
              {isOpen === menu && (
                <div
                  className="absolute left-0 top-full mt-2 bg-white shadow-lg p-8 z-50 transition-all duration-300 ease-in-out"
                  style={{ width: '1000px', height: '400px' }} // Consistent size for all menus
                >
                  {renderMenuContent(menu)}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Request Free Sample Button */}
        <a href="#" className="bg-white text-green px-6 py-2 rounded hover:bg-green-700">
          REQUEST FREE SAMPLE
        </a>
      </nav>
    </header>
  );
};

export default MegaMenu;
