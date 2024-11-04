import React from 'react';
import Typewriter from './Typewriter';
import HeroBanner from '../../Hero/HeroBanner'; // Ensure correct import path for HeroBanner

const Hero = () => {
  return (
    <div className=" text-center max-w-full ">
      <div className='py-10  font-F37-light'>
        <h1 className='uppercase text-4xl sm:text-6xl font-F37-light mb-6 tracking-wide'>
          LIVE. LIFE. <span className="text-green"><Typewriter words={["OUTSIDE.", "AWESOME.", "OUTDOORS."]} /></span>
        </h1>
        <p className='text-lg sm:text-xl  mb-2'>The world’s finest hand-moulded</p>
        <p className="font-bold text-lg sm:text-xl ">composite decking & composite cladding</p>
      </div>

      <div className="">
        {/* Render HeroBanner with video */}
        <HeroBanner
          videoSrc="https://res.cloudinary.com/ddtzxyzex/video/upload/f_webm/q_auto:eco/v1729886631/products/Home/Videos/MDE126A_Enhanced_Grain_SB_Antique_Oak_Herringbone_Video.mp4"
          altText="Video of outdoor decking area"
          className="w-full h-svh" // Responsive sizing with Tailwind
        />
      </div>

      
    </div>
  );
};

export default Hero;
