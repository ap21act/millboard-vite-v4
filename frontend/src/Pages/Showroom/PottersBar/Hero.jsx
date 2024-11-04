import React from 'react';
import HeroBanner from '../../../Components/Hero/HeroBanner';

function Hero() {
  return (
    <>
      <div className='py-10 px-4 md:py-16 md:px-6'>
        <h1 className='uppercase mb-4 md:mb-6 font-F37-light text-3xl md:text-5xl text-center leading-snug md:leading-normal'>
        Outdoors Showroom Kingsbury Joinery
        </h1>
        <h2 className='uppercase font-F37-light text-xl md:text-3xl text-center mb-4 md:mb-6'>
        Cranborne Road, Potters Bar
        </h2>
        <p className='text-center text-lg md:text-xl font-F37-light'>
          Exibition Center
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
      Kingsbury Joinery in Potters Bar has proudly partnered with Millboard to showcase a selection of premium decking and cladding products. With years of experience in high-quality joinery, our team understands the importance of materials that are both durable and aesthetically pleasing.
    </p>
    <p className='py-3 font-F37-light'>
      As a trusted Millboard distributor, we offer a curated range of products that are ideal for outdoor projects seeking the look and feel of natural wood, without the upkeep. Our experts are available to assist customers in finding the best solutions for their individual requirements.
    </p>
  </div>

  {/* Second Text Column */}
  <div className='lg:px-10'>
    <p className='py-3 font-F37-light'>
      Situated in Potters Bar, our showroom at Kingsbury Joinery provides visitors with the opportunity to experience Millboard’s unique product range firsthand. From versatile decking options to elegant cladding, we display a variety of installations to demonstrate the range’s adaptability to different environments.
    </p>
    <p className='py-3 font-F37-light'>
      Our knowledgeable team is passionate about helping customers bring their outdoor spaces to life. Whether you’re a homeowner, designer, or contractor, we’re here to guide you through the selection process and offer practical advice for your projects.
    </p>
    <p className='py-3 font-F37-light'>
      Visit Kingsbury Joinery in Potters Bar to explore the world of Millboard and discover how our products can enhance your next project with beauty, durability, and minimal maintenance.
    </p>
  </div>
</div>

      </div>
    </>
  );
}

export default Hero;
