import React from 'react'

function Specification({ construction, size }) {
  return (
    <div className='py-12 px-4 sm:px-8 lg:px-16 w-full border-y'>
      <h3 className='mb-6 uppercase font-F37-light text-2xl md:text-3xl lg:text-4xl'>
        Specifications
      </h3>
      
      <div className="space-y-4">
        <p className='font-F37-light text-base sm:text-lg lg:text-xl'>
          <span className='font-extrabold'>Construction:</span> {construction}
        </p>
        <p className='font-F37-light text-base sm:text-lg lg:text-xl'>
          <span className='font-extrabold'>Size:</span> {size}
        </p>
      </div>
    </div>
  )
}

export default Specification;
