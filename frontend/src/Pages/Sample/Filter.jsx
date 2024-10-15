import React, { useState, useEffect } from 'react';

const Filter = ({ products, setFilteredProducts }) => {
  const [selectedCategories, setSelectedCategories] = useState(['Cladding', 'Decking']); // Default selected categories

  // Toggle category selection
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Update filtered products based on selected categories
  useEffect(() => {
    const filtered = Object.values(products).filter((group) =>
      selectedCategories.includes(group.category)
    );

    setFilteredProducts(
      filtered.reduce((acc, group) => {
        const key = `${group.category}-${group.type}-${group.boardWidth}`;
        acc[key] = group;
        return acc;
      }, {})
    );
  }, [selectedCategories, products, setFilteredProducts]);

  // Custom SVG Checkmark
  const CheckmarkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-4 w-4 mr-2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );

  return (
    <div className="flex justify-center items-center py-6 border-t border-b">
      <span className="text-lg font-semibold mr-4">Filters:</span>
      <button
        className={`flex items-center px-4 py-2 border transition-colors duration-300 ${
          selectedCategories.includes('Cladding') ? 'bg-green-progress text-white' : ''
        }`}
        onClick={() => toggleCategory('Cladding')}
      >
        {selectedCategories.includes('Cladding') && <CheckmarkIcon />} {/* Use custom checkmark */}
        CLADDING
      </button>
      <button
        className={`flex items-center ml-2 px-4 py-2 border transition-colors duration-300 ${
          selectedCategories.includes('Decking') ? 'bg-green text-white' : ''
        }`}
        onClick={() => toggleCategory('Decking')}
      >
        {selectedCategories.includes('Decking') && <CheckmarkIcon />} {/* Use custom checkmark */}
        DECKING
      </button>
    </div>
  );
};

export default Filter;
