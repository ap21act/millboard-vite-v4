import React from 'react';
import Typewriter from './Typewriter';
import HeroBanner from '../../Hero/HeroBanner'; // Ensure correct import path for HeroBanner

const Hero = () => {
  return (
    <div className="p-5 text-center max-w-full ">
      <div className='py-16 px-9 font-F37-light'>
        <h1 className='uppercase text-5xl sm:text-6xl font-extralight mb-6 tracking-wide'>
          LIVE. LIFE. <span className="text-green"><Typewriter words={["OUTSIDE.", "AWESOME.", "OUTDOORS."]} /></span>
        </h1>
        <p className='text-lg sm:text-xl text-gray-700 mb-2'>The world’s finest hand-moulded</p>
        <p className="font-bold text-lg sm:text-xl text-gray-800">composite decking & composite cladding</p>
      </div>

      <div className="">
        {/* Render HeroBanner with video */}
        <HeroBanner
          videoSrc="https://millboard.widen.net/content/ntregbnxny/mp4/MDE126A_Enhanced-Grain-SB_Antique-Oak_Herringbone_Video.mp4?quality=hd"
          altText="Video of outdoor decking area"
          className="w-full h-auto" // Responsive sizing with Tailwind
        />
      </div>

      
    </div>
  );
};

export default Hero;
