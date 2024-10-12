import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSpecification from '../../Components/Product/Specification/ProductSpecification';
import DeckingFAQs from '../../Components/FAQs/DeckingFAQs';
import DeckingDownload from '../../Components/Downloads/DeckingDownload';
import InspirationGallery from '../../Components/InspirationGallery/InspirationGallery';
import ProductImagesAndDetails from '../../Components/Product/ProductImagesAndDetails';
import { fetchProductsBySlug } from '../../Redux/Slices/productSlice'; // Import the correct action
import { generateSlug } from '../../Utils'; // Utility function for generating slugs

const TryPage = () => {
  const dispatch = useDispatch();
  const { category, subCategory, type, name } = useParams(); // Extract parts of the slug from the URL

  const selectedSlug = generateSlug(category, subCategory, type, name);

  const product = useSelector((state) => state.product.items) || {}; // Ensure product is an object
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  // Get the selected specification from the Redux store
  const selectedSpecification = useSelector((state) => state.specification.selectedSpecification);

  // Fetch product when component mounts or when selectedSlug changes
  useEffect(() => {
    if (status === 'idle' && selectedSlug) {
      dispatch(fetchProductsBySlug(selectedSlug));
    }
  }, [selectedSlug, dispatch, status]);

  // Handle loading, error, and product not found states
  if (status === 'loading') return <div>Loading product...</div>;
  if (status === 'failed') return <div>Failed to load product. {error || 'Please try again later.'}</div>;
  if (!product?._id) return <div>Product not found</div>;

  return (
    <div>
      <ProductImagesAndDetails product={product} />

      <div className="mt-10">
        {/* <DeckingFAQs />
        <DeckingDownload /> */}
{/* 
        {product?.images?.inspirationGallery?.length > 0 && (
          <InspirationGallery inspirationImages={product.images.inspirationGallery} />
        )} */}

        {/* Render ProductSpecification based on the selectedSpecification from Redux */}
        {selectedSpecification && (
          <ProductSpecification selectedSpecification={selectedSpecification} />
        )}
      </div>
    </div>
  );
};

export default TryPage;
