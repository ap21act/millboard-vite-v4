import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../Components/Components/Common/CustomLink';

// Sample data array for the footer cards
const footerData = [
  {
    id: 1,
    title: 'Bestill Prøve',
    description:
      'See for yourself the outstanding quality and authentic wooden look with a selection of Millboard terrace tables.',
    icon: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1728860324/products/Icons/Feature_Wrapper.svg', // Replace with actual icon URL
    link: '/order-try',
  },
  {
    id: 1,
    title: 'Bestill Prøve',
    description:
      'See for yourself the outstanding quality and authentic wooden look with a selection of Millboard terrace tables.',
    icon: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1728860324/products/Icons/Feature_Wrapper.svg', // Replace with actual icon URL
    link: '/order-try',
  },
  {
    id: 2,
    title: 'Buying Guide',
    description:
      'Get helpful information and tips to make the best choice for your project with our buying guide.',
    icon: 'https://res.cloudinary.com/ddtzxyzex/image/upload/v1728860324/products/Icons/Feature_Wrapper.svg', // Replace with actual icon URL
    link: '/buying-guide',
  },
];

const FooterPopup = () => {
  return (
    <div className="flex justify-center items-center space-x-8 py-16 max-w-4xl mx-auto relative">
      {/* Horizontal Line */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-px bg-primary bg-opacity-65 z-0"></div>

      {/* Mapping over footerData to render cards */}
      {footerData.map((item) => (
        <Link to={item.link} key={item.id} className="group relative w-64 h-32 border pt-5 border-primary border-opacity-65 transition-all duration-300 hover:border-green hover:shadow-lg cursor-pointer  flex flex-col justify-center items-center text-center z-10 bg-white hover:bg-opacity-90 hover:w-72 hover:h-48">
          
          <img
            src={item.icon} // Icon for the card
            alt={item.title}
            className="w-10 h-10 mb-4"
          />
          <p className=" font-semibold group-hover:underline">
            {item.title}
          </p>

          {/* Expanded content inside the box that appears on hover */}
          <p className=" text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
