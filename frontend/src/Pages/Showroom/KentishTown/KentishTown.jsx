import React from 'react'
import GetInTouch from '../GetInTouch'
import Contact from '../Contact'
import Hero from './Hero'
import InspirationGallery from '../../../Components/InspirationGallery/InspirationGallery'

function KentishTown() {
    const showroomImages={
        images:{
            inspirationGallery:[
                'https://millboard.widen.net/content/c428ffcd-60fd-4e69-a0b7-edda94cc7965/web/nigel-belcher-millboard-decking-cladding-showroom-4-c.jpg',
                'https://millboard.widen.net/content/c428ffcd-60fd-4e69-a0b7-edda94cc7965/web/nigel-belcher-millboard-decking-cladding-showroom-4-c.jpg',
                'https://millboard.widen.net/content/089afcde-7a42-4b33-b790-8779053e8c24/web/nigel-belcher-millboard-decking-cladding-showroom-1-c.jpg',

                
                
            ]
    }
}
  return (
    <div>
        <Hero/>
        <InspirationGallery product={showroomImages} title="Gallery"/>
        <div className='flex gap-6 pt-12 pb-14'>
            <Contact />
            <GetInTouch />
        
            
        </div>
    </div>
  )
}

export default KentishTown