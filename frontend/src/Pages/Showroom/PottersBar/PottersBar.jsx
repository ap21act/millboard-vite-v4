import React from 'react';
import GetInTouch from './GetInTouch';
import Contact from '../Contact';
import Hero from './Hero';
import InspirationGallery from '../../../Components/InspirationGallery/InspirationGallery';

function PottersBar() {
  const showroomImages = {
    images: {
      inspirationGallery: [
        'https://res.cloudinary.com/ddtzxyzex/image/upload/e_improve,e_sharpen/v1730727824/products/Showroom/Kentish%20Town/Snapinsta.app_451516696_994641425729838_5734371465983309900_n_1080.jpg',
        'https://res.cloudinary.com/ddtzxyzex/image/upload/e_improve,e_sharpen/v1730727824/products/Showroom/Kentish%20Town/Snapinsta.app_451516696_994641425729838_5734371465983309900_n_1080.jpg',
        'https://res.cloudinary.com/ddtzxyzex/image/upload/e_improve,e_sharpen/v1730727823/products/Showroom/Kentish%20Town/Snapinsta.app_451502471_1614213152699650_655711556426636691_n_1080.jpg',
        'https://res.cloudinary.com/ddtzxyzex/image/upload/e_improve,e_sharpen/v1730727823/products/Showroom/Kentish%20Town/Snapinsta.app_451264147_7912841932141447_52665574779262320_n_1080.jpg',
        'https://res.cloudinary.com/ddtzxyzex/image/upload/e_improve,e_sharpen/v1730727822/products/Showroom/Kentish%20Town/Snapinsta.app_451268752_455621373920604_8110960193803787371_n_1080.jpg',

      ],
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen px-5 md:px-10 py-10 md:py-16">
      {/* Hero Section */}
      <Hero />

      {/* Inspiration Gallery */}
      <InspirationGallery product={showroomImages} title="Gallery" />

      {/* Contact and Get In Touch Section */}
      <div className="flex flex-col lg:flex-row pt-10 pb-20 max-w-7xl mx-auto">
        {/* Contact Component with 3/5 width on larger screens, full-width on smaller */}
        <div className="w-full lg:w-3/5 bg-white p-6 md:p-10 rounded-md">
          <Contact />
        </div>

        {/* Get In Touch Component with 2/5 width on larger screens, full-width on smaller */}
        <div className="w-full lg:w-2/5 bg-white p-6 md:p-10 rounded-md">
          <GetInTouch />
        </div>
      </div>
    </div>
  );
}

export default PottersBar;
