import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSpecification from '../../Components/Product/Specification/ProductSpecification';
import ProductImagesAndDetails from '../../Components/Product/ProductImagesAndDetails';
import InspirationGallery from '../../Components/InspirationGallery/InspirationGallery';
<<<<<<< Updated upstream
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
  
=======
import { fetchAllProducts, fetchProductById } from '../../Redux/Slices/productSlice';
import CladdingFeatures from '../../Components/Features/CladdingFeatures';
import Breadcrumb from '../../Components/Components/Common/Breadcrumb';
import FAQs from '../../Components/FAQs/FAQs';
import { deckingFaqs, claddingFaqs } from '../../Data/FAQs/faqs';
import { generateSlug} from '../../Utils'; // Import the generateSlug utility

const TryPage = () => {
  const dispatch = useDispatch();
  const { category, subCategory, type, name } = useParams();

  // Fetch necessary data from Redux store
  const allProducts = useSelector((state) => state.product.allProducts);
  const product = useSelector((state) => state.product.selectedProduct); // Updated to use selectedProduct from fetchProductById
>>>>>>> Stashed changes
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  // Get the selected specification from Redux store
  const selectedSpecification = useSelector((state) => state.specification.selectedSpecification);
 

<<<<<<< Updated upstream
  // Correct slug format
  const slug = `${category}/${subCategory}/${type}/${name}`;
  const product = allProducts.find((prod) => prod.slug === slug); // Filter product by slug

  useEffect(() => {
    dispatch(fetchAllProducts()); // Dispatch action to fetch products on component mount
  }, [dispatch]);
=======
  useEffect(() => {
    // Fetch all products if not already loaded
    if (!allProducts.length) {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, allProducts.length]);

  useEffect(() => {
    if (allProducts.length && category && subCategory && type && name) {
      const slug = generateSlug({ category, subCategory, type, name });
      console.log('Generated slug:', slug);
  
      const productSummary = allProducts.find((prod) => generateSlug(prod) === slug);
      console.log('Matching product:', productSummary);
  
      if (productSummary && productSummary._id) {
        dispatch(fetchProductById(productSummary._id)); // Fetch detailed product data
      }
    }
  }, [dispatch, allProducts, category, subCategory, type, name]);
// Log to check if selectedProduct is being set
useEffect(() => {
  console.log('Selected Product from Redux:', product);
}, [product]);  
>>>>>>> Stashed changes

  // Handle loading, error, and product not found states
  if (status === 'loading') return <div>Loading product details...</div>;
  if (status === 'failed') return <div>Failed to load product details: {error}</div>;
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
<<<<<<< Updated upstream
        {/* Conditionally render CladdingFeatures or other features if needed */}
        {product.type === 'cladding' && <CladdingFeatures />}
        <CladdingFeatures />
        
=======
        {/* Conditionally render CladdingFeatures if product type is cladding */}
        {product.type === 'cladding' && <CladdingFeatures />}

>>>>>>> Stashed changes
        <InspirationGallery product={product} />
        
        <div className="mt-10">
          {selectedSpecification ? (
            <ProductSpecification selectedSpecification={selectedSpecification} />
          ) : (
            <div>Loading specification...</div>
          )}
          Downloads
          {/* Render the correct FAQ section based on product type */}
          <FAQs faqsFromDb={faqs} />
        </div>
      </div>
    </div>
  );
};

export default TryPage;
