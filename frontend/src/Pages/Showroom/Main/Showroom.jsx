import React from 'react';

import Hero from './Hero';
import LocationWithMap from './LocationWithMap';
import MapLayout from './MapLayout';
import Contact from '../Contact';
import GetInTouch from '../GetInTouch';

function Showroom() {
  return (
    <div className="flex flex-col gap-10 max-w-screen-2xl">
      {/* Hero Section */}
      <Hero />

      {/* Location Section with Map */}
      <LocationWithMap />

      {/* Map Layout Section */}
      <MapLayout />
      <div className="flex flex-col lg:flex-row gap-10 p-6 bg-white shadow-lg rounded-lg w-full max-w-5xl">
  {/* Contact Form */}
  <Contact />
  
  {/* Contact Details and Map */}
  <GetInTouch />
</div>

    </div>
  );
}

export default Showroom;
