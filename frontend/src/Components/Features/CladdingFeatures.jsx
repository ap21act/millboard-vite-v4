import React from 'react';
import ProductFeatures from '../Components/Common/ProductFeatures';
import {featuresData} from '../../Data/Features/Cladding'; // Import feature data

const CladdingFeatures = () => {
  return (
    <div>
      <ProductFeatures features={featuresData}  />
    </div>
  );
};

export default CladdingFeatures;