import React from 'react';
import HeroBanner from '../../../Components/Hero/HeroBanner';

function Hero() {
  return (
    <>
      <div className='py-10 px-4 md:py-16 md:px-6'>
        <h1 className='uppercase mb-4 md:mb-6 font-F37-light text-3xl md:text-5xl text-center leading-snug md:leading-normal'>
          Living Outdoors Showroom
        </h1>
        <h2 className='uppercase font-F37-light text-xl md:text-3xl text-center mb-4 md:mb-6'>
          Kentish Town, London
        </h2>
        <p className='text-center text-lg md:text-xl font-F37-light'>
          Display Center
        </p>
      </div>

      {/* HeroBanner component */}
      <HeroBanner
        videoSrc="https://millboard.widen.net/content/ntregbnxny/mp4/MDE126A_Enhanced-Grain-SB_Antique-Oak_Herringbone_Video.mp4?quality=hd"
        altText="Video of outdoor decking area"
        className="h-[40vh] md:h-[60vh] lg:h-[70vh]" // Responsive sizing with Tailwind
      />

      <div>
      <div className='py-12 md:py-20 px-4 md:px-6 lg:flex bg-white-nav'>
  {/* First Text Column */}
  <div className='mb-6 md:mb-0 md:pr-10 lg:pr-16 lg:mr-8'>
    <p className='py-3 font-F37-light'>
      Our Kentish Town showroom is designed to offer an immersive experience of Millboard products in a real-world setting. As an established distributor, we provide the full range of Millboard decking and cladding options, ideal for those seeking high-quality materials with a natural, low-maintenance aesthetic.
    </p>
    <p className='py-3 font-F37-light'>
      With a knowledgeable team on hand, we're committed to assisting customers in finding the perfect Millboard solutions to bring their design visions to life, whether for residential or commercial projects.
    </p>
  </div>

  {/* Second Text Column */}
  <div className='lg:px-10'>
    <p className='py-3 font-F37-light'>
      Located in the heart of Kentish Town, our showroom showcases a variety of Millboard applications, from decks to cladding installations, allowing visitors to explore the durability, texture, and finish of our products up close. This space is designed to inspire, with multiple displays that demonstrate the versatility of Millboard’s premium product lines.
    </p>
    <p className='py-3 font-F37-light'>
      Our team in Kentish Town is always ready to discuss your project needs and offer tailored advice on how Millboard products can enhance your outdoor spaces. From design insights to practical tips, we’re here to support every step of your project.
    </p>
    <p className='py-3 font-F37-light'>
      As a leading Millboard distributor, we take pride in helping clients create beautiful, sustainable outdoor spaces with products that are built to last and perform.
    </p>
  </div>
</div>

      </div>
    </>
  );
}

export default Hero;
