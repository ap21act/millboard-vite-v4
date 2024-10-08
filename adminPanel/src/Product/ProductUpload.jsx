import React, { useState } from 'react';
import axios from 'axios';

const ProductUploadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Decking',
    subCategory: 'Collection',
    type: 'Enhanced Grain',
    description: "Moulded from timbers that are selected from oak boards for a textured look and feel, the Enhanced Grain collection's contemporary design accurately recreates the subtle nuances of natural wood. Each of the shades are slip-resistant and showcase their organic patinas beautifully",
    colour: '',
    boardSpecifications: [
      {
        boardWidth: '176',
        weight: '',
        fixing: '',
        numberOfBoards: '',
        sku: '',
        length: '',
        breadth: '',
        height: '',
      },
    ],
  });

  const [files, setFiles] = useState({
    titleImage: null,
    boardImage: null,
    productImage: [],
    inspirationGallery: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;

    if (typeof index !== 'undefined' && formData.boardSpecifications[index]) {
      const updatedBoardSpecifications = [...formData.boardSpecifications];
      updatedBoardSpecifications[index][name] = value;
      setFormData({
        ...formData,
        boardSpecifications: updatedBoardSpecifications,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    if (name === 'productImage' || name === 'inspirationGallery') {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: [...selectedFiles],
      }));
    } else {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: selectedFiles[0],
      }));
    }
  };

  const addBoardSpecification = () => {
    setFormData({
      ...formData,
      boardSpecifications: [
        ...formData.boardSpecifications,
        {
          boardWidth: '',
          weight: '',
          fixing: '',
          numberOfBoards: '',
          sku: '',
          length: '',
          breadth: '',
          height: '',
        },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!files.titleImage || !files.boardImage) {
      alert('Please provide all required images.');
      setIsLoading(false);
      return;
    }

    const formDataToSend = new FormData();

    // Append text fields
    Object.keys(formData).forEach((key) => {
      if (key === 'boardSpecifications') {
        formDataToSend.append('boardSpecifications', JSON.stringify(formData.boardSpecifications));
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    // Append files
    if (files.titleImage) {
      formDataToSend.append('titleImage', files.titleImage);
    }
    if (files.boardImage) {
      formDataToSend.append('boardImage', files.boardImage);
    }
    files.productImage.forEach((file) => {
      formDataToSend.append('productImage', file);
    });
    files.inspirationGallery.forEach((file) => {
      formDataToSend.append('inspirationGallery', file);
    });

    // Log FormData fields for debugging
    for (let pair of formDataToSend.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    try {
      const API_BASE_URL = 'http://localhost:7890/api/v1/product/add';

      const response = await axios.post(API_BASE_URL, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Product created successfully!');
      // Reset form state
      setFormData({
        name: '',
        category: 'Decking',
        subCategory: 'Collection',
        type: 'Enhanced Grain',
        description: "Moulded from timbers that are selected from oak boards for a textured look and feel, the Enhanced Grain collection's contemporary design accurately recreates the subtle nuances of natural wood. Each of the shades are slip-resistant and showcase their organic patinas beautifully",
        colour: '',
        boardSpecifications: [
          {
            boardWidth: '176',
            weight: '',
            fixing: '',
            numberOfBoards: '',
            sku: '',
            length: '',
            breadth: '',
            height: '',
          },
        ],
      });
      setFiles({
        titleImage: null,
        boardImage: null,
        productImage: [],
        inspirationGallery: [],
      });
    } catch (error) {
      console.error('Full Error Object:', error);

      if (error.response) {
        console.error('Backend Error:', error.response.data);
        const errorMessage = error.response.data.message || 'An unknown error occurred.';
        alert(`Failed to create product: ${errorMessage}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('Failed to create product: No response from the server. Please try again.');
      } else {
        console.error('Error', error.message);
        alert(`Failed to create product: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white-background p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Product Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Product Name"
            required
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="Decking">Decking</option>
            <option value="Cladding">Cladding</option>
          </select>
        </div>

        {/* Sub-category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subCategory">Sub-category</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subCategory"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleInputChange}
            required
          >
            <option value="Collection">Collection</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">Type</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="type"
            name="type"
            type="text"
            value={formData.type}
            onChange={handleInputChange}
            placeholder="Type"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Description"
            required
          />
        </div>

        {/* Colour */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="colour">Colour</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="colour"
            name="colour"
            type="text"
            value={formData.colour } // Default to name if no color provided
            onChange={handleInputChange}
            placeholder="Colour"
            required
          />
        </div>

        {/* File Inputs */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="titleImage">Title Image</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="titleImage"
            name="titleImage"
            type="file"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="boardImage">Board Image</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="boardImage"
            name="boardImage"
            type="file"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productImage">Product Images (Upload Multiple)</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="productImage"
            name="productImage"
            type="file"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inspirationGallery">Inspiration Gallery Images (Upload Multiple)</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="inspirationGallery"
            name="inspirationGallery"
            type="file"
            multiple
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Board Specifications */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Board Specifications</label>
          {formData.boardSpecifications.map((specification, index) => (
            <div key={index} className="flex flex-wrap -mx-2 mb-4">
              <div className="w-1/2 px-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`boardWidth_${index}`}>Board Width (mm)</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id={`boardWidth_${index}`}
                  name="boardWidth"
                  value={specification.boardWidth}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Board Width (mm)"
                  required
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`weight_${index}`}>Weight (kg)</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id={`weight_${index}`}
                  name="weight"
                  value={specification.weight}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Weight (kg)"
                  required
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`fixing_${index}`}>Fixing per Board</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id={`fixing_${index}`}
                  name="fixing"
                  value={specification.fixing}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Fixing per Board"
                  required
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`numberOfBoards_${index}`}>Number of Boards</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id={`numberOfBoards_${index}`}
                  name="numberOfBoards"
                  value={specification.numberOfBoards}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Number of Boards"
                  required
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`sku_${index}`}>SKU</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id={`sku_${index}`}
                  name="sku"
                  value={specification.sku}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="SKU"
                  required
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`length_${index}`}>Length (mm)</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id={`length_${index}`}
                  name="length"
                  value={specification.length}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Length (mm)"
                  required
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`breadth_${index}`}>Breadth (mm)</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id={`breadth_${index}`}
                  name="breadth"
                  value={specification.breadth}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Breadth (mm)"
                  required
                />
              </div>

              <div className="w-1/2 px-2 mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`height_${index}`}>Height (mm)</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                  id={`height_${index}`}
                  name="height"
                  value={specification.height}
                  onChange={(e) => handleInputChange(e, index)}
                  placeholder="Height (mm)"
                  required
                />
              </div>
            </div>
          ))}

          <div className="text-right">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={addBoardSpecification}
            >
              Add Another Board Specification
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Uploading...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUploadForm;
