import React from 'react';
import { useSelector } from 'react-redux';
import NavbarLanguageDropdown from '../Components/NavbarLanguageDropdown';
import Logo from '../../Assets/Images/Logos/logo.svg';

const TopNav = ({ openCart }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className='hidden md:flex px-6 md:px-12 pt-4 md:pt-6 pb-4 md:pb-7 border-b-white-background bg-white-nav justify-between'>
      <div className='gap-2 flex items-center'>
        <NavbarLanguageDropdown />
        <ul className='gap-2 inline-flex text-sm md:text-lg items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-5 w-4 md:w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.654 2.328a1 1 0 0 1 1.18-.598l3.44.916a1 1 0 0 1 .72.858l.497 4.08a1 1 0 0 1-.505 1.01L7.832 9.97a15.036 15.036 0 0 0 6.199 6.199l.378-1.152a1 1 0 0 1 1.01-.504l4.08.497a1 1 0 0 1 .858.72l.916 3.44a1 1 0 0 1-.598 1.18l-2.857 1.143a4 4 0 0 1-3.258-.145c-2.76-1.356-5.35-3.224-7.656-5.53-2.307-2.307-4.174-4.897-5.53-7.656a4 4 0 0 1-.145-3.258L3.654 2.328z"/>
          </svg>
          <a href="tel:02074824661" className="text-sm md:text-base">020 7482 4661</a>
        </ul>
      </div>

      <a href='/'>
        <img src={Logo} alt='logo' className='h-full md:h-16 w-56 md:w-80 transform scale-125 md:scale-150 ' />
      </a>

      <div className='flex gap-2 md:gap-4 items-center'>
        <a href="https://www.instagram.com/living_outdoors.co.uk/" target="_blank" rel="noopener noreferrer" className='flex gap-1 text-sm md:text-base'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="h-5 md:h-6 w-5 md:w-6">
            <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
          </svg>
          <span>Instagram</span>
        </a>

        {/* Basket Icon */}
        <button onClick={openCart} className='relative'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
          {totalItems > 0 && (
            <div className="absolute -top-2 -right-3 h-4 w-4 flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
              {totalItems}
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default TopNav;
