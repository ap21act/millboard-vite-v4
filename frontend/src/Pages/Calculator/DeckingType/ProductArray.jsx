import React, { useState, useEffect } from 'react';
import TabLayout from './TabLayout'; // Import TabLayout
import Card from './Card'; // Import Card component

function ProductArray({ products }) {
  const [activeType, setActiveType] = useState('enhanced grain'); // Default to 'Enhanced Grain'
  const [selectedProductSlug, setSelectedProductSlug] = useState(null); // Track selected product slug

  // Filter products by the active type selected in TabLayout
  const filteredProducts = products.filter(
    (product) => product.type.toLowerCase() === activeType.toLowerCase()
  );

  useEffect(() => {
    console.log("Filtered Products for type:", activeType, filteredProducts);
  }, [activeType, filteredProducts]);

  // Function to handle tick selection
  const handleTickSelection = (slug) => {
    setSelectedProductSlug(slug); // Set the selected product slug
  };

  return (
    <div>
      {/* TabLayout to handle the tab selection */}
      <TabLayout activeType={activeType} setActiveType={setActiveType} />

      {/* Render filtered products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {filteredProducts.map((product) => (
          <Card 
            key={product.slug} 
            product={product} 
            isSelected={product.slug === selectedProductSlug}  // Pass whether the card is selected
            onTickClick={() => handleTickSelection(product.slug)} // Handle tick selection
          />
        ))}
      </div>
    </div>
  );
}

export default ProductArray;
