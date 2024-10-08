import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [titleImage, setTitleImage] = useState(null);
  const [boardImage, setBoardImage] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [inspirationGallery, setInspirationGallery] = useState([]);
  const [productID, setProductID] = useState('');

  useEffect(() => {
    // Fetch products from backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:7890/api/v1/product/find`, {
          params: { name }
        });
        setProducts(response.data.data);
        setFilteredProducts(response.data.data); // Default view shows all fetched products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    if (name) {
      fetchProducts();
    }
  }, [name]);

  useEffect(() => {
    // Apply filters on products
    let updatedProducts = products;
  
    if (category) {
      updatedProducts = updatedProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
    }
  
    if (subCategory) {
      updatedProducts = updatedProducts.filter(
        (product) => product.subCategory.toLowerCase() === subCategory.toLowerCase()
      );
    }
  
    if (type) {
      updatedProducts = updatedProducts.filter(
        (product) => product.type.toLowerCase() === type.toLowerCase()
      );
    }
  
    setFilteredProducts(updatedProducts);
  }, [category, subCategory, type, products]);

  const handleImageUpload = async (e) => {
    e.preventDefault();
  
    if (!productID) {
      console.error('Product ID is not set. Please select a product.');
      return;
    }
  
    console.log('Uploading images for Product ID:', productID);
  
    const formData = new FormData();
    formData.append('titleImage', titleImage);
    formData.append('boardImage', boardImage);
    productImages.forEach((image, index) => {
      formData.append(`productImages`, image);
    });
    inspirationGallery.forEach((image, index) => {
      formData.append(`inspirationGallery`, image);
    });
  
    try {
      const response = await axios.put(`http://localhost:7890/api/v1/product/uploadImages/${productID}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image upload response:', response.data);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };
  

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search by name"
          className="p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <select
          className="p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Decking">Decking</option>
          <option value="Cladding">Cladding</option>
        </select>
  
        <select
          className="p-2 border rounded"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        >
          <option value="">Select Sub-Category</option>
          <option value="Collection">Collection</option>
          {/* Add more sub-categories as needed */}
        </select>
  
        <select
          className="p-2 border rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Type</option>
          <option value="Enhanced Grain">Enhanced Grain</option>
          <option value="Board & Batten+">Board & Batten+</option>
          <option value="Shadow Line+">Shadow Line+</option>
          {/* Add more types as needed */}
        </select>
      </div>
  
      <form onSubmit={handleImageUpload} className="mb-4">
        <div className="flex flex-wrap gap-4">
          <input
            type="file"
            className="p-2 border rounded"
            onChange={(e) => setTitleImage(e.target.files[0])}
          />
          <input
            type="file"
            className="p-2 border rounded"
            onChange={(e) => setBoardImage(e.target.files[0])}
          />
          <input
            type="file"
            multiple
            className="p-2 border rounded"
            onChange={(e) => setProductImages([...e.target.files])}
          />
          <input
            type="file"
            multiple
            className="p-2 border rounded"
            onChange={(e) => setInspirationGallery([...e.target.files])}
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">Upload Images</button>
        </div>
      </form>
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border rounded p-4 shadow-sm">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm">{product.category} - {product.type}</p>
            <p className="text-sm">{product.description}</p>
            <button 
              onClick={() => setProductID(product._id)}
              className="mt-2 p-2 bg-green-500 text-white rounded"
            >
              Select Product
            </button>
            
          </div>
        ))}
      </div>
      console.log({productID});
    </div>
  );
};

export default ProductFilter;