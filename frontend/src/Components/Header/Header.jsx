import React, { useState } from 'react';
import MegaMenu from './MegaMenu';
import TopNav from './TopNav';
import SideCart from '../Cart/SideCart'; // New SideCart component for side popup
import SmallScreenHeader from './SmallScreenHeader'; // Import the new small screen header

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div>
      {/* Large Screen Header */}
      <div className="hidden md:block">
        <TopNav openCart={openCart} />
        <MegaMenu />
      </div>

      {/* Small Screen Header */}
      <div className="block md:hidden">
        <SmallScreenHeader />
      </div>

      {/* Side Cart Popup */}
      <SideCart isOpen={isCartOpen} closeCart={closeCart} />
    </div>
  );
}

export default Header;
