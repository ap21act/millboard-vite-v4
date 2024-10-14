import React from 'react'
import HeroImages from '../../../Components/Hero/HeroImages'

function Hero() {
  return (
    <div>
        <div className='py-16 px-6'>
      <h1 className='uppercase mb-6 font-F37-light text-5xl text-center'>MILLBOARD DECKING COLLECTIONS</h1>
      <div className='flex justify-center gap-6'>
        <div className='flex items-center gap-2'>
          <img src='https://res.cloudinary.com/ddtzxyzex/image/upload/v1728868130/products/Icons/collection.svg' alt='collection' className=''/>
          <p > 3 Collections</p>
        </div>
        <div className='flex items-center gap-2'>
          <img src='https://res.cloudinary.com/ddtzxyzex/image/upload/v1728868129/products/Icons/color-palete.svg' alt='collection' className=''/>
          <p > 10 Colours</p>
        </div>
      </div>
    </div>
        <HeroImages
        imageLeft='https://millboard.widen.net/content/80yeaev6sz/web/MDE176Y_Enhanced%20Grain_Ebony%20Grey_Lifestyle%2045%20angle%20detail.png?crop=yes&w=560&h=691&itok=kK0BOOOB'
        imageRight='https://millboard.widen.net/content/80yeaev6sz/web/MDE176Y_Enhanced%20Grain_Ebony%20Grey_Lifestyle%2045%20angle%20detail.png?crop=yes&w=560&h=691&itok=kK0BOOOB'
      />
    </div>
        
        

  )
}

export default Hero