import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import MegaInspirationGallery from '../../Components/InspirationGallery/MegaInspirationGallery';
import { setFilter, clearFilters, fetchAllProducts } from '../../Redux/Slices/productSlice';
import queryString from 'query-string';

function InspirationAndIdeasGallery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const products = useSelector((state) => state.product.filteredProducts); // Get filtered products from Redux
  const filterOptions = useSelector((state) => state.product.filterOptions); // Get all available filter options
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    subCategory: '',
    type: '',
    colour: '',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Manage filter panel state

  // Fetch products initially
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  // Load filters from URL on component mount
  useEffect(() => {
    const filtersFromUrl = queryString.parse(location.search);
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      ...filtersFromUrl,
    }));
    Object.entries(filtersFromUrl).forEach(([filterKey, filterValue]) => {
      if (filterValue) {
        dispatch(setFilter({ filterKey, filterValue }));
      }
    });
  }, [location.search, dispatch]);

  // Update filters in Redux and URL
  const handleFilterChange = (filterKey, value) => {
    setSelectedFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [filterKey]: value };

      // Clear dependent filters if a parent filter changes
      if (filterKey === 'category') {
        newFilters.subCategory = '';
        newFilters.type = '';
        newFilters.colour = '';
      } else if (filterKey === 'subCategory') {
        newFilters.type = '';
        newFilters.colour = '';
      } else if (filterKey === 'type') {
        newFilters.colour = '';
      }

      // Update URL with new filters
      const queryStringified = queryString.stringify(newFilters, { skipEmptyString: true });
      navigate({ search: `?${queryStringified}` });

      dispatch(setFilter({ filterKey, filterValue: value }));
      return newFilters;
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      category: '',
      subCategory: '',
      type: '',
      colour: '',
    });
    dispatch(clearFilters());
    navigate({ search: '' });
  };

  // Combine images from all filtered products for the gallery
  const inspirationImages = products.flatMap((product) =>
    [...(product.images?.inspirationGallery || []), ...(product.images?.productImage || [])]
  );

  // Dummy example data
  const product = {
    images: {
      MegaInspirationGallery: inspirationImages,
    },
  };

  // Get filtered options based on selected filters
  const getFilteredOptions = (key) => {
    const filteredProducts = products.filter((product) => {
      return Object.entries(selectedFilters).every(([filterKey, filterValue]) => {
        if (!filterValue || filterKey === key) return true;
        return product[filterKey] && product[filterKey].toLowerCase().includes(filterValue.toLowerCase());
      });
    });

    const options = new Set();
    filteredProducts.forEach((product) => {
      if (product[key]) options.add(product[key]);
    });
    return Array.from(options);
  };

  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-center text-4xl font-semibold mb-8">Inspiration and Ideas Gallery</h2>

      {/* Button to open filter panel */}
      <div className="flex justify-end px-4 mb-4">
        <button
          className="btn-length"
          onClick={() => setIsFilterOpen(true)}
        >
          FILTER & SORT
        </button>
      </div>

      {/* Slide-in Filter Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          isFilterOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold">Filter & Sort</h3>
          <button
            className="text-2xl"
            onClick={() => setIsFilterOpen(false)}
            aria-label="Close Filter Panel"
          >
            &times;
          </button>
        </div>

        <div className="p-4">
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Category</label>
            <select
              value={selectedFilters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="p-2 w-full border rounded-md"
            >
              <option value="">- All -</option>
              {getFilteredOptions('category').map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">SubCategory</label>
            <select
              value={selectedFilters.subCategory}
              onChange={(e) => handleFilterChange('subCategory', e.target.value)}
              className="p-2 w-full border rounded-md"
            >
              <option value="">- All -</option>
              {getFilteredOptions('subCategory').map((subCategory) => (
                <option key={subCategory} value={subCategory}>{subCategory}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Type</label>
            <select
              value={selectedFilters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="p-2 w-full border rounded-md"
            >
              <option value="">- All -</option>
              {getFilteredOptions('type').map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-semibold">Colour/Name</label>
            <select
              value={selectedFilters.colour}
              onChange={(e) => handleFilterChange('colour', e.target.value)}
              className="p-2 w-full border rounded-md"
            >
              <option value="">- All -</option>
              {getFilteredOptions('colour').map((colour) => (
                <option key={colour} value={colour}>{colour}</option>
              ))}
            </select>
          </div>

          <button
            onClick={clearAllFilters}
            className="w-full py-2 bg-red-500 text-white rounded-md mb-4"
          >
            Clear Filters
          </button>

          <button
            onClick={() => setIsFilterOpen(false)}
            className="btn-length"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Backdrop when the filter panel is open */}
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsFilterOpen(false)}
        ></div>
      )}

      {/* Gallery */}
      <MegaInspirationGallery product={product} />
    </div>
  );
}

export default InspirationAndIdeasGallery;
