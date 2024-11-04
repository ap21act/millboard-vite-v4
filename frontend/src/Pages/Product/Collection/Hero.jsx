import React from 'react'
import HeroImages from '../../../Components/Hero/HeroImages'

function Hero() {
  return (
    <div>
        <div className='py-16 px-6'>
      <h1 className='uppercase mb-6 font-F37-light text-5xl text-center'>MILLBOARD DECKING COLLECTIONS</h1>
      <div className='flex justify-center gap-6'>
        <div className='flex items-center gap-2'>
          <img src='https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1728868130/products/Icons/collection.svg' alt='collection' className=''/>
          <p > 3 Collections</p>
        </div>
        <div className='flex items-center gap-2'>
          <img src='https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1728868129/products/Icons/color-palete.svg' alt='collection' className=''/>
          <p > 10 Colours</p>
        </div>
      </div>
    </div>
        <HeroImages
        imageLeft='https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730363121/products/decking/collection/MDE176H_Enhanced_Grain_Ashwood_Lifestyle_Daytime_Hero.webp'
        imageRight='https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730363124/products/decking/collection/MDE176Y_Enhanced_Grain_Ebony_Grey_Lifestyle_45_angle_detail.webp'
      />
    </div>
        
        

  )
}

export default Hero