import React from 'react';
import { Link } from 'react-router-dom';



const footerData = [
  {
    id: 1,
    title: 'Order a Sample',
    description: 'Order a sample to see the quality of our products.',
    icon: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1729611286/products/Home/wood.svg', 
    link: '/order-sample',
  },
  {
    id: 2,
    title: 'Decking Calculator',
    description: 'Get helpful information about Decking Calculator.',
    icon: 'https://res.cloudinary.com/ddtzxyzex/image/upload/t_Imporve and Sharpen/v1729611356/products/Home/calculator.svg',  // Use the imported image
    link: 'https://deckplanner.millboard.com/',
  },
  {
    id: 3,
    title: 'Our Showroom',
    description: 'Visit our showroom to see our products in person.',
    icon: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1729599748/products/Icons/showroom2.svg',  // Use the imported image
    link: '/our-showrooms',
  },
];

const FooterPopup = () => {
  return (
    <div className="flex justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8 flex-wrap py-16 max-w-full mx-auto relative">
      {/* Horizontal Line */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-px bg-primary bg-opacity-50 z-0"></div>

      {/* Mapping over footerData to render cards */}
      {footerData.map((item) => (
        <Link 
          to={item.link} 
          key={item.id} 
          className="group relative w-auto h-40 sm:w-auto sm:h-48 py-20 px-6 border border-primary border-opacity-65 transition-all duration-300 hover:border-green hover:shadow-lg cursor-pointer flex flex-col justify-center items-center text-center z-10 bg-white transform hover:bg-opacity-95 overflow-hidden"
        >
          {/* Icon and Title in the same line */}
          <div className="flex flex-row items-center justify-center space-x-4 transform group-hover:scale-110 transition-transform duration-300">
            {/* Icon */}
            <img
  src={item.icon} 
  alt={item.title}
  className={`${item.title === 'Decking Calculator' ? 'w-10 h-10 text-green sm:w-10 sm:h-10' : 'w-12 h-12 sm:w-16 sm:h-16'}`}
/>


            {/* Title */}
            <p className="font-F37-light text-2xl sm:text-3xl group-hover:text-green transition-colors">
              {item.title}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm opacity-0 group-hover:opacity-100 group-hover:text-gray-700 transition-opacity duration-300 mt-4">
            {item.description}
          </p>

          {/* Glowing Border Effect */}
          <div className="absolute inset-0 border border-green opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"></div>
        </Link>
      ))}
    </div>
  );
};

export default FooterPopup;
