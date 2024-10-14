import React from 'react'
import HeroImages from '../../../Components/Hero/HeroImages'

function Hero() {
  return (
    <div>
        <div className='py-16 px-6'>
      <h1 className='uppercase mb-6 font-F37-light text-5xl text-center'>MIllboard Envello Collection</h1>
      <div className='flex justify-center gap-6'>
        <div className='flex items-center gap-2'>
          <img src='https://res.cloudinary.com/ddtzxyzex/image/upload/v1728868130/products/Icons/collection.svg' alt='collection' className=''/>
          <p > 3 Collections</p>
        </div>
        <div className='flex items-center gap-2'>
          <img src='https://res.cloudinary.com/ddtzxyzex/image/upload/v1728868129/products/Icons/color-palete.svg' alt='collection' className=''/>
          <p > 6 Colours</p>
        </div>
      </div>
    </div>
        <HeroImages
        imageLeft='https://millboard.widen.net/content/80yeaev6sz/web/MDE176Y_Enhanced%20Grain_Ebony%20Grey_Lifestyle%2045%20angle%20detail.png?crop=yes&w=560&h=691&itok=kK0BOOOB'
        imageRight='https://millboard.widen.net/content/80yeaev6sz/web/MDE176Y_Enhanced%20Grain_Ebony%20Grey_Lifestyle%2045%20angle%20detail.png?crop=yes&w=560&h=691&itok=kK0BOOOB'
      />
      <p className='py-16 px-44 text-center font-F37-light'>Millboard's Envello Cladding redefines exterior design, offering the perfect solution for both home transformations and commercial spaces. With a seamless blend of aesthetics and performance, Envello Cladding creates an unparalleled outdoor experience.

Crafted from a 100% wood-free, fibre-glass reinforced resin-mineral composite, Millboard cladding doesn’t require sealing to prevent moisture ingress, delivering exceptional durability and a superior finish.

Sharing many of the same unique advantages as our renowned decking, Millboard composite cladding stands in a league of its own, far surpassing traditional and composite alternatives.</p>
    </div>
        
        

  )
}

export default Hero