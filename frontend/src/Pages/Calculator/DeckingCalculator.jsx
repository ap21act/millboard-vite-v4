import React from 'react'
import Hero from './Hero'
import CardComponent from './CardComponent'
import ProjectType from './ProjectType'
import Dimensions from './Dimensions'
import DeckingType from './DeckingType/DeckingType'
import Fascia from './Fascia'
import Edging from './Edging'
import Steps from './Steps'
import Subframe from './Subframe'


function DeckingCalculator() {
  return (
    <div className='font-F37-light'>
        <Hero />  
        <ProjectType />
        <Dimensions />
        <DeckingType />
        <Fascia />  
        <Edging />
        <Steps />
        <Subframe />
        
 
    </div>
  )
}

export default DeckingCalculator