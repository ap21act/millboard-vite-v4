import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSpecification from '../../Components/Product/Specification/ProductSpecification';
import ProductImagesAndDetails from '../../Components/Product/ProductImagesAndDetails';
import InspirationGallery from '../../Components/InspirationGallery/InspirationGallery';
import { fetchAllProducts } from '../../Redux/Slices/productSlice'; // Updated import
import CladdingFeatures from '../../Components/Features/CladdingFeatures'; // Import CladdingFeatures component
import Breadcrumb from '../../Components/Components/Common/Breadcrumb';
import FAQs from '../../Components/FAQs/FAQs';
import { deckingFaqs, claddingFaqs } from '../../Data/FAQs/faqs'; // Import both Decking and Cladding FAQs

const TryPage = () => {
  const dispatch = useDispatch();
  const { category, subCategory, type, name } = useParams(); // Extract parts of the slug from the URL

  // Fetch all products from Redux store
  const allProducts = useSelector((state) => state.product.allProducts);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  // Get the selected specification from Redux store
  const selectedSpecification = useSelector((state) => state.specification.selectedSpecification);
 

  // Correct slug format
  const slug = `${category}/${subCategory}/${type}/${name}`;
  const product = allProducts.find((prod) => prod.slug === slug); // Filter product by slug

  useEffect(() => {
    dispatch(fetchAllProducts()); // Dispatch action to fetch products on component mount
  }, [dispatch]);

  // Handle loading, error, and product not found states
  if (status === 'loading') return <div>Loading products...</div>;
  if (status === 'failed') return <div>Failed to load products: {error}</div>;
  if (!product) return <div>Product not found</div>;

  // Conditionally choose FAQs based on product type
  const faqs = product.type === 'cladding' ? claddingFaqs : deckingFaqs;
  

  return (
    <div className='container mx-auto p-4'>
      {/* Breadcrumb Component */}
      <Breadcrumb
        category={category}
        subCategory={subCategory}
        type={type}
        name={name}
        disableClick={{ home: false, category: true, subCategory: false, type: true }}
      />
      <ProductImagesAndDetails product={product} />

      <div className="mt-10">
        {/* Conditionally render CladdingFeatures or other features if needed */}
        {product.type === 'cladding' && <CladdingFeatures />}
        
        <InspirationGallery product={product} />
        
        <div className="mt-10">
          {selectedSpecification ? (
            <ProductSpecification selectedSpecification={selectedSpecification} />
          ) : (
            <div>Loading specification...</div>
          )}
          
          {/* Render the correct FAQ section based on product type */}
          <FAQs faqsFromDb={faqs} />
        </div>
      </div>
    </div>
  );
};

export default TryPage;
