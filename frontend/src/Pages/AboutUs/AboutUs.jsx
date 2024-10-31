import React from 'react'
import Hero from '../../Components/Accessories/Hero'
import Breadcrumb from '../../Components/Components/Common/Breadcrumb';



const paragraphText = (
    <>
      We believe in pushing boundaries and challenging the status quo. Our journey began with a simple yet profound idea: {' '}
      <span className="text-green-dark">to create outdoor decking solutions </span> that {' '}
      <span className="text-green-dark">combine the natural beauty of wood </span>with the {' '}
      <span className="text-green-dark">durability and low maintenance </span> of modern materials.  Our story is one of innovation and dedication. We embarked on a relentless pursuit of excellence, leveraging cutting-edge technology and sustainable practices to craft a product that exceeds expectations. rom under-lip lighting to coping for planters and seating, this adaptable profile opens up a wide range of possibilities.
    </>
  );

function AboutUs() {
  return (
    <div>
        <Breadcrumb
        category="why-millboard"
        subCategory="millboard-difference"
        name="about-us"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}/>
        <Hero
        name="About Us"
        description="Welcome to Living Outdoors, the UK's leading supplier of Millboard decking and cladding. We are a family-run business with over 45 years of experience in the landscaping industry. Our team of experts are dedicated to helping you create your dream outdoor space. We pride ourselves on delivering a positive customer experience and providing the highest quality products. Visit our showroom in Kentish Town, London to see our range of Millboard products on display."
      />
      <p className="bg-primary text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center font-F37-light px-4 sm:px-8 md:px-16 lg:px-48 py-10 md:py-14 lg:py-20">
  {paragraphText}</p>
    </div>
  )
}

export default AboutUs