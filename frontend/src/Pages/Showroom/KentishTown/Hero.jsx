import React from 'react'
import HeroBanner from '../../../Components/Hero/HeroBanner'

function Hero() {
  return (
    <>
    <div className='py-16 px-6' >
        <h1 className='uppercase mb-6 font-F37-light text-5xl text-center leading-normal '>living outdoors Showroom</h1>
        <h2 className='uppercase  font-F37-light text-3xl text-center mb-6'>Kentish Town, London</h2>
        <p className='text-center font-xl font-F37-light '>Display Center</p>
    </div>
    <HeroBanner
          videoSrc="https://millboard.widen.net/content/ntregbnxny/mp4/MDE126A_Enhanced-Grain-SB_Antique-Oak_Herringbone_Video.mp4?quality=hd"
          altText="Video of outdoor decking area"
          className="" // Responsive sizing with Tailwind
    />
    <div>
        <div className='py-20 px-6 flex bg-white-nav'>
            <div className='pr-16 mr-8'>
            <p className='py-3   font-F37-light'>Nigel Belcher Stone Paving was established 45 years ago and supplies many of the premier landscape gardeners in the South East. Millboard decking and cladding has become a best-selling product line and is an integral part of their business.</p>
            <p className='py-3   font-F37-light'>A small team with expert knowledge, they pride themselves on delivering a positive customer experience, whilst helping you search for the perfect materials to create your dream garden. </p>
            </div>
            <div className='px-16'>
            <p className='py-3   font-F37-light'>Operating out of one branch in West Berkshire they host a large display area, with almost 100 m2 of Millboard Decking and Cladding installed. Conveniently located an 8 minute drive from Junction 13 on the M4, their Display Centre shows Millboard in a range of applications, including their offices which are cladded in Envello Shadow Line. </p>
            <p className='py-3  font-F37-light'>As Premier Millboard Distributors, Nigel and his team enjoy discussing the design elements of your projects, and can offer advice to help you make the most out of the vast Millboard product range. </p>
            <p className='py-3 font-F37-light'>As Premier Millboard Distributors, Nigel and his team enjoy discussing the design elements of your projects, and can offer advice to help you make the most out of the vast Millboard product range. </p>
            </div>


        </div>
    </div>
    </>
  )
}

export default Hero