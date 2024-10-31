import React from 'react'
import HeroImages from '../../../Components/Hero/HeroImages'
import Hero from '../../../Components/Accessories/Hero'

function Hero() {
  return (
    <div>
        <div className='py-16 px-6'>
        <h1 className='uppercase mb-6 font-F37-light text-5xl text-center leading-normal '>Millboard Showrooms Discover the art of outdoor living</h1>
        <p className='py-3 px-44 text-center font-F37-light'>Welcome to Millboard showrooms, your gateway to experiencing outdoor living like never before. Our showrooms are more than just a place to showcase our innovative products; they are a source of inspiration for your own outdoor utopia.  Enter a world where craftsmanship meets innovation and the timeless beauty of wood is enhanced by modern technology.</p>
        <Hero
        name="About Us"
        description="Welcome to Living Outdoors, the UK's leading supplier of Millboard decking and cladding. We are a family-run business with over 45 years of experience in the landscaping industry. Our team of experts are dedicated to helping you create your dream outdoor space. We pride ourselves on delivering a positive customer experience and providing the highest quality products. Visit our showroom in Kentish Town, London to see our range of Millboard products on display."
      />
        <HeroImages
        imageLeft='https://millboard.widen.net/content/80yeaev6sz/web/MDE176Y_Enhanced%20Grain_Ebony%20Grey_Lifestyle%2045%20angle%20detail.png?crop=yes&w=560&h=691&itok=kK0BOOOB'
        imageRight='https://millboard.widen.net/content/80yeaev6sz/web/MDE176Y_Enhanced%20Grain_Ebony%20Grey_Lifestyle%2045%20angle%20detail.png?crop=yes&w=560&h=691&itok=kK0BOOOB'
      />
      
    </div>
    </div>
  )
}

export default Hero