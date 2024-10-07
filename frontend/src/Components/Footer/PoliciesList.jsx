import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const PoliciesList = () => {
  return (
    <div className='flex justify-center items-center'>
      <ul className='flex  gap-x-6'>
        <li>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/terms-conditions">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="/cookies">Cookies</Link>
        </li>
        <li>
          <Link to="/modern-slavery-statement">Modern Slavery Statement</Link>
        </li>
      </ul>
    </div>
  );
};

export default PoliciesList;
