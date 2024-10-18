import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSpecification from '../../Components/Product/Specification/ProductSpecification';
import ProductImagesAndDetails from '../../Components/Product/ProductImagesAndDetails';
import InspirationGallery from '../../Components/InspirationGallery/InspirationGallery';
import { fetchAllProducts } from '../../Redux/Slices/productSlice'; // Updated import
import CladdingFeatures from '../../Components/Features/CladdingFeatures'; // Import CladdingFeatures component
import Breadcrumb from '../../Components/Components/Common/Breadcrumb';

const TryPage = () => {
  const dispatch = useDispatch();
  const { category, subCategory, type, name } = useParams(); // Extract parts of the slug from the URL

  // Fetch all products from Redux store
  const allProducts = useSelector((state) => state.product.allProducts);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  // Get the selected specification from Redux store
  const selectedSpecification = useSelector((state) => state.specification.selectedSpecification);
  console.log("TryPage received selectedSpecification:", selectedSpecification);

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

  return (
    <div className='container mx-auto p-4'>
      {/* Breadcrumb Component */}
      <Breadcrumb category={category} subCategory={subCategory} type={type} name={name} />
      <ProductImagesAndDetails product={product} />

      <div className="mt-10">
        {product?.images?.inspirationGallery?.length > 0 && (
          <InspirationGallery inspirationImages={product.images.inspirationGallery} />
        )}
        <CladdingFeatures/>
        <InspirationGallery product={product} /> 
        <div className="mt-10">
  {selectedSpecification ? (
    <ProductSpecification selectedSpecification={selectedSpecification} />
  ) : (
    <div>Loading specification...</div>
  )}
</div>



        
        

      </div>
    </div>
  );
};

export default TryPage;
