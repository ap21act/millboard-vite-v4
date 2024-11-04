import React from 'react';
import ProductSpecificationLayout from './ProductSpecificationLayout';

const ProductSpecification = ({ selectedSpecification }) => {
  if (!selectedSpecification) {
    return <div>No specification data available.</div>;
  }

  const specificationsData = [
    { label: 'Weight per m² (kg)', value: selectedSpecification.weight ? `${selectedSpecification.weight}kg` : 'N/A' },
    { label: 'Dimensions (mm)', value: selectedSpecification.length && selectedSpecification.breadth && selectedSpecification.height ? 
      `${selectedSpecification.length}mm x ${selectedSpecification.breadth}mm x ${selectedSpecification.height}mm` : 'N/A' },
    { label: 'SKU', value: selectedSpecification.sku ? selectedSpecification.sku.toUpperCase() : 'N/A' },
    { label: 'Boards per m²', value: selectedSpecification.numberOfBoards ? String(selectedSpecification.numberOfBoards) : 'N/A' },
    { label: 'Fixings per board', value: selectedSpecification.fixing ? String(selectedSpecification.fixing) : 'N/A' },
  ];

  return (
    <div className='max-w-screen-2xl'>
      <ProductSpecificationLayout specifications={specificationsData} />
    </div>
  );
};

export default ProductSpecification;
