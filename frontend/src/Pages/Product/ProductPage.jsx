// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import ProductSpecification from '../../Components/Product/Specification/ProductSpecification';
// import DeckingFAQs from '../../Components/FAQs/DeckingFAQs';
// import DeckingDownload from '../../Components/Downloads/DeckingDownload';
// import InspirationGallery from '../../Components/InspirationGallery/InspirationGallery';
// import CladdingFeatures from '../../Components/Features/CladdingFeatures';
// import ProductGallery from '../../Components/ProductGallery/ProductGallery';
// import ProductDetails from '../../Components/ProductDetails/ProductDetails';
// import CartInfo from '../../Components/Cart/CartInfo';
// import { fetchProductsBySlug } from '../../Redux/Slices/productSlice'; // Import the correct action
// import { generateSlug } from '../../Utils'; // Utility function for generating slugs

// const ProductPage = () => {
//   const dispatch = useDispatch();
//   const { category, subCategory, type, name } = useParams(); // Extract all parts of the slug from the URL

//   // Generate a slug from the parameters
//   let selectedSlug = generateSlug(category, subCategory, type, name);
//   console.log('Generated Slug:', selectedSlug); // Debugging line

//   // Convert the generated slug to match the backend slug format
//   // selectedSlug = selectedSlug.replace(/_/g, '/');
//   console.log('Transformed Slug for Matching:', selectedSlug); // Debugging line

//   // Get products and status from Redux store
//   const products = useSelector((state) => state.product.items);
//   const status = useSelector((state) => state.product.status);
//   const error = useSelector((state) => state.product.error);

//   // Fetch products when component mounts or selectedSlug changes
//   useEffect(() => {
//     if ((status === 'idle' || status === 'failed') && selectedSlug) {
//       console.log('Dispatching fetchProductsBySlug with:', selectedSlug); // Debugging line
//       dispatch(fetchProductsBySlug(selectedSlug)); // Fetch only products of the selected slug
//     }
//   }, [status, selectedSlug, dispatch]);

//   // Find the product using the transformed slug
//   const product = Array.isArray(products) && products.length > 0 ? products.find((p) => p.slug === selectedSlug) : null;
//   console.log('Products in State:', products); // Debugging line
//   console.log('Found Product:', product); // Debugging line

//   if (status === 'loading') {
//     return <div>Loading product...</div>;
//   }

//   if (status === 'failed') {
//     return <div>Failed to load product. {error || 'Please try again later.'}</div>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   // Set the initial specification to the first one by default
//   const [selectedSpecification, setSelectedSpecification] = useState(
//     product.boardSpecifications.length > 0 ? product.boardSpecifications[0] : {}
//   );

//   useEffect(() => {
//     if (product && product.boardSpecifications.length > 0) {
//       setSelectedSpecification({ ...product.boardSpecifications[0] });
//     }
//   }, [product]);

//   // Function to handle board width change
//   const handleBoardWidthChange = (specification) => {
//     setSelectedSpecification({ ...specification });
//   };

//   // Prepare an array of all board images along with URLs for ProductButtonIcon
//   const productImages = products.map((p) => ({
//     src: p.images.boardImage,
//     link: `/products/${generateSlug(p.category, p.subCategory, p.type, p.name)}`,
//   }));

//   const renderProductDetails = () => (
//     <>
//       <ProductGallery product={product} />
//       <ProductDetails
//         product={product}
//         onBoardWidthChange={handleBoardWidthChange}
//         selectedSpecification={selectedSpecification} // Pass selected specification to ProductDetails
//         categoryImages={productImages} // Pass category images to ProductDetails
//       />
//     </>
//   );

//   return (
//     <div className="max-w-screen-xl mx-auto p-4 gap-6">
//       {/* For large screens, use flex layout */}
//       <div className="hidden lg:flex">
//         {/* ProductGallery will take most of the space */}
//         <div className="w-3/5 overflow-y-auto">{renderProductDetails()}</div>

//         {/* ProductDetails will remain sticky while ProductGallery scrolls */}
//         <div className="w-2/5 h-screen sticky top-0">{renderProductDetails()}</div>
//       </div>

//       {/* For small screens, stack ProductGallery and ProductDetails */}
//       <div className="lg:hidden space-y-4">{renderProductDetails()}</div>

//       {/* Product-Specific Features and Galleries */}
//       <CartInfo />
//       <CladdingFeatures />
//       {product?.images?.inspirationGallery && (
//         <InspirationGallery inspirationImages={product.images.inspirationGallery} />
//       )}
//       <ProductSpecification selectedSpecification={selectedSpecification} />
//       <DeckingFAQs />
//     </div>
//   );
// };

// export default ProductPage;

import React from 'react'

function ProductPage() {
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage
