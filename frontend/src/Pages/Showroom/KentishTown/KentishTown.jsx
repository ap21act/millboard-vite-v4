import React from 'react';
import GetInTouch from '../GetInTouch';
import Contact from '../Contact';
import Hero from './Hero';
import InspirationGallery from '../../../Components/InspirationGallery/InspirationGallery';

function KentishTown() {
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
    <div className="bg-gray-50 min-h-screen px-10 py-16">
      {/* Hero Section */}
      <Hero />

      {/* Inspiration Gallery */}
      <InspirationGallery product={showroomImages} title="Gallery" />

      {/* Contact and Get In Touch Section */}
      <div className="flex  pt-16 pb-20 max-w-7xl mx-auto">
        {/* Contact Component with 3/5 width */}
        <div className="w-3/5 bg-white  p-10  rounded-md">
          <Contact />
        </div>

        {/* Get In Touch Component with 2/5 width */}
        <div className="w-2/5 bg-white p-10 rounded-md">
          <GetInTouch />
        </div>
      </div>
    </div>
  );
}

export default KentishTown;
