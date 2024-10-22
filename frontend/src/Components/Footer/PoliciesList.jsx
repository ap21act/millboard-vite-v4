import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const PoliciesList = () => {
  return (
    <div className='flex justify-center items-center'>
      <ul className='flex  gap-x-6'>
        <li>
          <Link to="legal/privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link to="legal/terms-conditions">Terms & Conditions</Link>
        </li>
        <li>
          <Link to="legal/cookies">Cookies</Link>
        </li>
        <li>
          <Link to="legal/modern-slavery-statement">Modern Slavery Statement</Link>
        </li>
      </ul>
    </div>
  );
};

export default PoliciesList;
