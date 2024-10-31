import React from 'react';

import CustomLink from '../Components/Common/CustomLink';

const PoliciesList = () => {
  return (
    <div className='flex justify-center items-center px-4 py-4'>
      <ul className='grid grid-cols-2 gap-x-2 md:flex md:gap-x-10 gap-y-2 '>
        <li>
          <CustomLink to="legal/privacy-policy">Privacy Policy</CustomLink>
        </li>
        <li>
          <CustomLink to="legal/terms-conditions">Terms & Conditions</CustomLink>
        </li>
        <li>
          <CustomLink to="legal/cookies">Cookies</CustomLink>
        </li>
        <li>
          <CustomLink to="legal/delivery-and-returns">Delivery and Returns</CustomLink>
        </li>
      </ul>
    </div>
  );
};

export default PoliciesList;
