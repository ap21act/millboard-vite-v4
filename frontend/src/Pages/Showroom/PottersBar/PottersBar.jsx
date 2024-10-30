import React from 'react';
import GetInTouch from './GetInTouch';
import Contact from '../Contact';
import Hero from './Hero';
import InspirationGallery from '../../../Components/InspirationGallery/InspirationGallery';

function PottersBar() {
  const showroomImages = {
    images: {
      inspirationGallery: [
        'https://millboard.widen.net/content/c428ffcd-60fd-4e69-a0b7-edda94cc7965/web/nigel-belcher-millboard-decking-cladding-showroom-4-c.jpg',
        'https://millboard.widen.net/content/c428ffcd-60fd-4e69-a0b7-edda94cc7965/web/nigel-belcher-millboard-decking-cladding-showroom-4-c.jpg',
        'https://millboard.widen.net/content/089afcde-7a42-4b33-b790-8779053e8c24/web/nigel-belcher-millboard-decking-cladding-showroom-1-c.jpg',
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
