import React from 'react'
import Hero from './Hero'
import CardComponent from './CardComponent'
import ProjectType from './ProjectType'
import Dimensions from './Dimensions'
import DeckingType from './DeckingType/DeckingType'
import Fascia from './Fascia/Fascia'


function DeckingCalculator() {
  return (
    <div className='font-F37-light'>
        <Hero />  
        <ProjectType />
        <Dimensions />
        <DeckingType />
        <Fascia />  
        
 
    </div>
  )
}

export default DeckingCalculator