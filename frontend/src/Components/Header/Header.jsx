import React, { useState } from 'react';
import MegaMenu from './MegaMenu';
import TopNav from './TopNav';
import SideCart from '../Cart/SideCart'; // New SideCart component for side popup

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div>
      <TopNav openCart={openCart} />
      <MegaMenu />
      <SideCart isOpen={isCartOpen} closeCart={closeCart} />
    </div>
  );
}

export default Header;
