import React from 'react';
import ProductFeatures from '../Components/Common/ProductFeatures';
import {claddingFeatures} from '../../Data/Features/Cladding'; // Import feature data

const CladdingFeatures = () => {
  return (
    <div>
      <ProductFeatures features={claddingFeatures}  />
    </div>
  );
};

export default CladdingFeatures;