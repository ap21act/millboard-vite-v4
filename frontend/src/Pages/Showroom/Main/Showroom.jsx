import React from 'react';

import HeroImages from '../../../Components/Hero/HeroImages';
import Hero from '../../../Components/Accessories/Hero';

// import Hero from './Hero';
import LocationWithMap from './LocationWithMap';
import MapLayout from './MapLayout';
import Contact from '../Contact';
import GetInTouch from '../GetInTouch';

function Showroom() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero Section */}
      {/* <Hero /> */}
      <Hero
        name=" Discover the art of outdoor living"
        description='Welcome to showrooms, your gateway to experiencing outdoor living like never before. Our showrooms are more than just a place to showcase our innovative products; they are a source of inspiration for your own outdoor utopia.  Enter a world where craftsmanship meets innovation and the timeless beauty of wood is enhanced by modern technology.'
      />
      <HeroImages
        imageLeft='https://millboard.widen.net/content/80yeaev6sz/web/MDE176Y_Enhanced%20Grain_Ebony%20Grey_Lifestyle%2045%20angle%20detail.png?crop=yes&w=560&h=691&itok=kK0BOOOB'
        imageRight='https://millboard.widen.net/content/80yeaev6sz/web/MDE176Y_Enhanced%20Grain_Ebony%20Grey_Lifestyle%2045%20angle%20detail.png?crop=yes&w=560&h=691&itok=kK0BOOOB'
      />

      {/* Location Section with Map */}
      <LocationWithMap />

      {/* Map Layout Section
      <MapLayout />
      <div className="flex flex-col lg:flex-row gap-10 p-6 bg-white shadow-lg rounded-lg w-full max-w-5xl">
  {/* Contact Form */}
  {/* <Contact /> */}
  
  {/* Contact Details and Map */}
  {/* <GetInTouch />  */}
</div>

    // </div>
  );
}

export default Showroom;
