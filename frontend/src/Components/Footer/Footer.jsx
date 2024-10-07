import React from 'react'
import TopNavFooter from './TopNavFooter.jsx'
import FooterMain from './FooterMain.jsx'
import Logos from './Logos.jsx'
import PoliciesList from './PoliciesList.jsx'
import FooterBottom from './FooterBottom.jsx'

function Footer() {
  return (
    <div className=''>
        <TopNavFooter />
        <FooterMain />
        <Logos />
        <PoliciesList />
        <FooterBottom />
        
    </div>
  )
}

export default Footer