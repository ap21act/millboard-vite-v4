import React from 'react'
import Hero from './Hero'
import TitleWithLine from '../../../Components/Components/Common/TitleWithLine'
import EnvelloList from './EnvelloList'
import CladdingBenifit from './CladdingBenifit'
import Breadcrumb from '../../../Components/Components/Common/Breadcrumb'

function Envello() {
  return (
    <div>
        <Breadcrumb category={"cladding"} subCategory={"collection"}
        disableClick={{  category: true }}   />
        <Hero  />
        <TitleWithLine 
        title="envello®" 
        subtitle="millboard" 
        lineWidth="w-16"           // Custom width for the green line (optional)

        subtitleSpace={'\u00A0\u00A0 \u00A0\u00A0'} // Adding non-breaking spaces before the subtitle (optional)
      />
      <EnvelloList/>
      <CladdingBenifit  />
    </div>
  )
}

export default Envello