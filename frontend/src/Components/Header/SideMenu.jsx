import React,{useState} from 'react';
import { menuData } from './MegaMenu'; // Assuming this contains the menu data
import { Link } from 'react-router-dom';

const SideMenu = ({ isOpen, toggleMenu }) => {
  const [activeIndex, setActiveIndex] = useState(null); // For expanding menu items

  // Toggle the expansion of each menu section
  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Side Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg w-80 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="p-4">
          <button className="text-right" onClick={toggleMenu}>
            {/* Close button */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mt-6 space-y-4">
            {/* Loop through the menuData */}
            {menuData.map((menu, index) => (
              <div key={index}>
                {/* Menu Title */}
                <button
                  className="w-full text-left font-medium text-lg py-2 uppercase"
                  onClick={() => toggleSubMenu(index)}
                >
                  {menu.menuTitle}
                </button>

                {/* Expandable Sections */}
                {activeIndex === index && (
                  <div className="pl-4 mt-2 space-y-4">
                    {menu.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        {/* Section Title */}
                        <h3 className="font-semibold text-base mb-2">
                          {section.title}
                        </h3>

                        {/* Section Items */}
                        <ul className="space-y-1">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                to={item.path}
                                className="text-sm text-gray-700 hover:text-primary transition-colors"
                                onClick={toggleMenu} // Close the menu on item click
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Request Free Sample Button */}
            <div className="pt-4">
              <Link
                to="/order-sample"
                className="btn-length transition-all"
                onClick={toggleMenu} // Close the menu on button click
              >
                Request Free Sample
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
