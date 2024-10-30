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
        const response = await axios.get(`https://millboard-vite-backend.onrender.com/api/v1/product/find`, {
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
      const response = await axios.post(`http://localhost:7890/api/v1/product/uploadImages/${productID}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image upload response:', response.data);
    } catch (error) {
      console.error('Error uploading images:', error);
    }
  };

  const renderImagePreview = (image) => {
    return image ? <img src={URL.createObjectURL(image)} alt="Preview" className="w-24 h-24 object-cover mb-2" /> : null;
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
          <div>
            <label className="block mb-1">Title Image</label>
            <input
              type="file"
              className="p-2 border rounded"
              onChange={(e) => setTitleImage(e.target.files[0])}
            />
            {renderImagePreview(titleImage)}
          </div>
          <div>
            <label className="block mb-1">Board Image</label>
            <input
              type="file"
              className="p-2 border rounded"
              onChange={(e) => setBoardImage(e.target.files[0])}
            />
            {renderImagePreview(boardImage)}
          </div>
          <div>
            <label className="block mb-1">Product Images</label>
            <input
              type="file"
              multiple
              className="p-2 border rounded"
              onChange={(e) => setProductImages([...e.target.files])}
            />
            <div className="flex flex-wrap gap-2">
              {productImages.length > 0 &&
                Array.from(productImages).map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="Product Preview" className="w-24 h-24 object-cover mb-2" />
                ))}
            </div>
          </div>
          <div>
            <label className="block mb-1">Inspiration Gallery</label>
            <input
              type="file"
              multiple
              className="p-2 border rounded"
              onChange={(e) => setInspirationGallery([...e.target.files])}
            />
            <div className="flex flex-wrap gap-2">
              {inspirationGallery.length > 0 &&
                Array.from(inspirationGallery).map((image, index) => (
                  <img key={index} src={URL.createObjectURL(image)} alt="Gallery Preview" className="w-24 h-24 object-cover mb-2" />
                ))}
            </div>
          </div>
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
        console.log({productID})
        
      </div>
    </div>
  );
};

export default ProductFilter;