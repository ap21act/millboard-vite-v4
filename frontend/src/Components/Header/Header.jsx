import React from 'react'
import MegaMenu from './MegaMenu'
import TopNav from './TopNav'

function Header() {
  console.log("Header component is rendering...");
  return (
    <div>
        <TopNav/>
        <MegaMenu />
    </div>
  )
}

export default Header