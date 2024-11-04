import React from 'react';
import Breadcrumb from '../../../Components/Components/Common/Breadcrumb';
import Hero from '../../../Components/Accessories/Hero';
import HeroBanner from '../../../Components/Hero/HeroBanner';
import CustomerReview from '../../../Components/Components/Common/CustomerReview';
import PopIconHover from '../../Home/PopIconHover';
import ShadePic from '../../../Components/Homepage/Shadepic';
import Timeline from './Timeline';


const features = [
  {
    title: 'Tough',
    description: 'The unique Lastane layer resists scratches and stains and is designed to withstand demanding outdoor environments.',
  },
  {
    title: 'Enduring',
    description: 'The dual-tone Lastane surface is hand-tinted using pigments designed to replicate the look of natural timber.',
  },
  {
    title: 'Safer',
    description: 'Millboard is wood-free and non-porous, which means high resistance to algae growth and excellent anti-slip properties.',
  },
  {
    title: 'Lighter',
    description: "Our unique, closed 'cellular' internal structure reduces weight while maintaining strength.",
  },
  {
    title: 'Stronger',
    description: 'The structural core is a blend of natural minerals bonded in a polymer resin with long fibre reinforcement for added strength.',
  },
  {
    title: 'Durable',
    description: "Millboard decking is solid, not hollow. This makes it strong and means it won’t warp, rot, or harbor insects and pests like timber would.",
  },
  {
    title: 'Innovative',
    description: 'Our product is the result of continuous innovation, incorporating advanced materials and techniques to set new standards in outdoor decking.',
  },
  {
    title: 'Eco-Friendly',
    description: 'Millboard is committed to sustainability, using responsibly sourced materials and eco-friendly manufacturing practices to reduce environmental impact.',
  },
];


  


function WhyMillboard() {
  return (
    <div className='w-screen'>
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        category="why-millboard"
        subCategory="explore"
        type="why-millboard?"
        name=""
        disableClick={{ home: false, category: true, subCategory: true, type: true }}
      />

      {/* Hero Section */}
      <Hero 
        name="Why Millboard ?" 
        description="Enduring beauty, from a family-run business committed to British craftsmanship and visual distinction." 
        hasBorder={false} 
      />

      {/* Video Banner */}
      <HeroBanner
        videoSrc="https://res.cloudinary.com/ddtzxyzex/video/upload/v1730202956/products/Resources/Videos/why-millboard/MDE126D_Enhanced-Grain-SB_Smoked-Oak_Flyover.mp4" 
        className="w-full h-svh" 
      />

      {/* Main Content with Highlighted Text and Customer Review */}
      <div className="py-10 px-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-3">
        {/* Left Column with Highlighted Text */}
        <div className="flex justify-center items-center p-6 rounded-lg ">
          <p>
            Millboard combines the natural beauty of real wood with the high performance of polyurethane, a material widely recognized for its strength. Polyurethane is used in many industries where durability and strength are required, eliminating the inevitable rotting, warping, and deterioration of natural wood. Millboard maintains a functional and highly attractive deck for years to come.
          </p>
        </div>

        {/* Right Column with Customer Review */}
        <div className="flex flex-col justify-center">
          <CustomerReview
            quote='"Millboard decking provided an ideal surface for what the clients required. It looks superb and it needs little or no maintenance to stay that way."'
            name="Project Coordinator"
            designation="Decking on Steel"
          />
        </div>
      </div>

      {/* A Closer Look Section */}
      <div className="mt-4 py-10 flex flex-col md:flex-row items-center gap-10 w-screen mx-auto">
        {/* Image */}
        <img 
          src="https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730203371/products/Resources/Videos/why-millboard/plank-of-weathered-oak-millboard-decking.png" 
          alt="Millboard Decking" 
          className="w-full md:w-3/5 object-cover "
        />

        {/* Text Content */}
        <div className="text-left pl-6 md:pl-10 space-y-6 md:w-1/2">
          <h4 className="font-F37-light text-4xl md:text-5xl">
            A Closer Look
          </h4>
          <p className="text-base md:text-lg leading-relaxed max-w-lg pl-10">
            Millboard decking uses a unique material, unrivalled across the globe. Take a closer look at the construction and performance of this stunning yet functional decking.
          </p>
        </div>
      </div>

      {/* Feature Section */}
      <section className="py-16 max-w-7xl mx-auto font-F37-light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
        {features.map((feature, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-700 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

      <div className="border-t">
      <PopIconHover />
      </div>
      <ShadePic />
      <div className="my-8 max-w-screen-lg mx-auto flex justify-center items-center py-8">
  <iframe
    src="https://player.cloudinary.com/embed/?public_id=https://res.cloudinary.com/ddtzxyzex/video/upload/v1730205864/products/Resources/Videos/why-millboard/Millboard-Lifestyle-Advert.mp4&cloud_name=ddtzxyzex&player[posterOptions][transformation][start_offset]=6&player[showLogo]=false&player[colors][base]=%23414042&player[colors][accent]=%23AAC93C&player[colors][text]=%23F9F7F1&player[fontFace]=Fira%20Sans&autoplay=true"
    
    width="640"
    height="500"
    allow="fullscreen; encrypted-media; picture-in-picture"
    allowFullScreen
    frameBorder="0"
    className="w-full max-w-full mx-auto shadow-md"
  ></iframe>
</div>
<Timeline  />

    </div>
  );
}

export default WhyMillboard;
