import React from 'react'
import TopNavFooter from './TopNavFooter.jsx'
import FooterMain from './FooterMain.jsx'
import Logos from './Logos.jsx'
import PoliciesList from './PoliciesList.jsx'
import FooterBottom from './FooterBottom.jsx'
import FooterPopup from '../../Pages/Home/FooterPopup.jsx'

function Footer() {
  return (
    <div className=''>
        <FooterPopup />
        <TopNavFooter />
        <FooterMain />
        <Logos />
        <PoliciesList />
        <FooterBottom />
        
    </div>
  )
}

export default Footer