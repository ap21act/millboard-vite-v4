import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSpecification from '../../Components/Product/Specification/ProductSpecification';
import ProductImagesAndDetails from '../../Components/Product/ProductImagesAndDetails';
import InspirationGallery from '../../Components/InspirationGallery/InspirationGallery';
import { fetchAllProducts, fetchProductById } from '../../Redux/Slices/productSlice'; 
import CladdingFeatures from '../../Components/Features/CladdingFeatures';
import Breadcrumb from '../../Components/Components/Common/Breadcrumb';
import FAQs from '../../Components/FAQs/FAQs';
import { deckingFaqs, claddingFaqs } from '../../Data/FAQs/faqs';

const TryPage = () => {
  const dispatch = useDispatch();
  const { category, subCategory, type, name } = useParams();
  
  // Fetch necessary data from Redux store
  const allProducts = useSelector((state) => state.product.allProducts);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);
  const selectedSpecification = useSelector((state) => state.specification.selectedSpecification);

  // Correct slug format
  const slug = `${category}/${subCategory}/${type}/${name}`;
  let product = allProducts.find((prod) => prod.slug === slug);

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(fetchAllProducts()); // Fetch basic product data on mount
    }
    
    if (!product && status !== 'loading') {
      const foundProduct = allProducts.find((prod) => prod.slug === slug);
      if (foundProduct) {
        dispatch(fetchProductById(foundProduct._id)); // Fetch product details if not in allProducts
      }
    }
  }, [dispatch, allProducts, product, status, slug]);

  // Handle loading, error, and product not found states
  if (status === 'loading') return <div>Loading products...</div>;
  if (status === 'failed') return <div>Failed to load products: {error}</div>;
  if (!product) return <div>Product not found</div>;

  // Choose FAQs based on product type
  const faqs = product.type === 'cladding' ? claddingFaqs : deckingFaqs;

  return (
    <div className="container mx-auto p-4">
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
        {/* Conditionally render CladdingFeatures if product type is cladding */}
        <CladdingFeatures />
        

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
