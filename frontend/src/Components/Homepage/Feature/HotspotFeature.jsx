import React from 'react';
import MillboardFeatureWithHotspot from './MillboardFeatureWithHotspot';

function HotspotFeature() {
  return (
    <div className='mt-10 py-10 hidden lg:block'>
      <h2 className='text-center text-4xl font-bold uppercase'>
        Decking & Cladding - the Millboard Way
      </h2>
      <p className='px-60 py-7 text-center'>
        Millboard is the finest wood-look composite decking and composite cladding, enhancing outdoor spaces with enduring distinction. Hand-moulded from the finest pieces of oak, it boasts refined timber grain that mimics natural timber but is engineered to offer an enhanced decking experience.
      </p>
      <div className='py-40 '>
        <MillboardFeatureWithHotspot />
      </div>
     
    </div>
  );
}

export default HotspotFeature;
