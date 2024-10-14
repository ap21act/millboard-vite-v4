import React from 'react';
import MillboardFeatureWithHotspot from './MillboardFeatureWithHotspot';

function HotspotFeature() {
  return (
    <div className='mt-10 py-10'>
      <h2 className='text-center text-4xl font-bold uppercase'>
        Decking & Cladding - the Millboard Way
      </h2>
      <p className='px-10 pt-5'>
        Millboard is the finest wood-look composite decking and composite cladding, enhancing outdoor spaces with enduring distinction. Hand-moulded from the finest pieces of oak, it boasts refined timber grain that mimics natural timber but is engineered to offer an enhanced decking experience.
      </p>
      <div className='py-40 mb-3'>
        <MillboardFeatureWithHotspot />
      </div>
      <div className="pt-10">
        <p className='text-center'>
        Millboard is the finest wood-look composite decking and composite cladding, enhancing outdoor spaces with enduring distinction. Hand-moulded from the finest pieces of oak, it boasts refined timber grain that mimics natural timber but is engineered to offer an enhanced decking experience.
        </p>
        <div className="flex justify-center items-center mt-5">
  <button className="btn-length uppercase justify-center  text-center">
    Why Choose Millboard
  </button>
</div>

        
      </div>
    </div>
  );
}

export default HotspotFeature;
