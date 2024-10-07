import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductSpecification from '../../Components/Product/Specification/ProductSpecification';
import DeckingFAQs from '../../Components/FAQs/DeckingFAQs';
import DeckingDownload from '../../Components/Downloads/DeckingDownload';
import InspirationGallery from '../../Components/InspirationGallery/InspirationGallery';
import CladdingFeatures from '../../Components/Features/CladdingFeatures';
import ProductGallery from '../../Components/ProductGallery/ProductGallery';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';
import { productDataArray } from '../../data/productDataArray';
import CartInfo from '../../Components/Cart/CartInfo';

const ProductPage = () => {
  const { category, subCategory, type, productName } = useParams(); // Extract full slug from URL

  // Normalize and find the product using the slug details
  const product = productDataArray.find(
    (p) =>
      p.category.toLowerCase().trim() === category.toLowerCase().trim() &&
      p.subCategory.toLowerCase().trim() === subCategory.toLowerCase().trim() &&
      p.type.toLowerCase().trim().replace(/\s+/g, "-") === type.toLowerCase().trim() &&
      p.name.toLowerCase().trim().replace(/\s+/g, "-") === productName.toLowerCase().trim()
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  // Set the initial specification to the first one by default
  const [selectedSpecification, setSelectedSpecification] = useState(
    product.boardSpecifications.length > 0 ? product.boardSpecifications[0] : {}
  );

  useEffect(() => {
    if (product && product.boardSpecifications.length > 0) {
      setSelectedSpecification({ ...product.boardSpecifications[0] });
    }
  }, [product]);

  // Function to handle board width change
  const handleBoardWidthChange = (specification) => {
    setSelectedSpecification({ ...specification });
  };

  // Prepare an array of all board images along with URLs for ProductButtonIcon
  const productImages = productDataArray.map((p) => ({
    src: p.images.boardImage,
    link: `/product/${p.category.toLowerCase()}/${p.subCategory.toLowerCase()}/${p.type.toLowerCase().replace(/\s+/g, "-")}/${p.name.toLowerCase().replace(/\s+/g, "-")}`
  }));

  return (
    <div className="max-w-screen-xl mx-auto p-4 gap-6">
      {/* For large screens, use flex layout */}
      <div className="hidden lg:flex">
        {/* ProductGallery will take most of the space */}
        <div className="w-3/5 overflow-y-auto">
          <ProductGallery product={product} />
        </div>

        {/* ProductDetails will remain sticky while ProductGallery scrolls */}
        <div className="w-2/5 h-screen sticky top-0">
          {product && (
            <ProductDetails
              product={product}
              onBoardWidthChange={handleBoardWidthChange}
              selectedSpecification={selectedSpecification} // Pass selected specification to ProductDetails
              categoryImages={productImages} // Pass category images to ProductDetails
            />
          )}
        </div>
      </div>

      {/* For small screens, stack ProductGallery and ProductDetails */}
      <div className="lg:hidden space-y-4">
        {/* ProductGallery comes first on small screens */}
        <ProductGallery product={product} />

        {/* ProductDetails comes below the carousel on small screens */}
        {product && (
          <ProductDetails
            product={product}
            onBoardWidthChange={handleBoardWidthChange}
            selectedSpecification={selectedSpecification} // Pass selected specification to ProductDetails
            categoryImages={productImages} // Pass category images to ProductDetails
          />
        )}
      </div>

      {/* Product-Specific Features and Galleries */}
      <CartInfo />
      <CladdingFeatures />
      <InspirationGallery inspirationImages={product.images.inspirationGallery} /> {/* Pass the inspiration gallery images */}
      <ProductSpecification selectedSpecification={selectedSpecification} />
      <DeckingFAQs />
    </div>
  );
};

export default ProductPage;
