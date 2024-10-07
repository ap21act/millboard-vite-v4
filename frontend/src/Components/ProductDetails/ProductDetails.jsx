import React, { useEffect, useState } from 'react';
import ProductButtonIcon from '../Components/Common/ProductButtonIcon';
import ButtonLink from '../Components/Common/ButtonLink';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/Slices/cartSlice'; // Adjust import as necessary

const ProductDetails = ({ product, onBoardWidthChange, selectedSpecification, categoryImages }) => {
  const dispatch = useDispatch();
  const [boardImage, setBoardImage] = useState(product.images.boardImage);

  useEffect(() => {
    // Update boardImage whenever selectedSpecification changes
    const specIndex = product.boardSpecifications.indexOf(selectedSpecification);
    if (specIndex !== -1 && product.images.productImages[specIndex]) {
      setBoardImage(product.images.productImages[specIndex]);
    }
  }, [selectedSpecification, product]);

  // Function to handle adding to cart
  const handleAddToCart = () => {
    const cartItem = {
      productId: product._id,
      name: product.name,
      subCategory: product.subCategory,
      type: product.type,
      category: product.category,
      sku: selectedSpecification.sku,
      boardWidth: selectedSpecification.boardWidth,
      boardLength: selectedSpecification.length,
      boardBreadth: selectedSpecification.breadth,
      boardHeight: selectedSpecification.height,
      quantity: 1,
      boardImage: product.images.boardImage, // Ensure this is correct
    };
    dispatch(addToCart(cartItem));
    console.log("Added to cart:", cartItem);
  };
  

  return (
    <div className="sticky top-0">
      <div className="container max-w-screen-sm">
        <h4 className="text-2xl mb-2">{product.category}</h4>
        <h1 className="text-5xl uppercase mb-8">{product.type}</h1>
        <p className="font-F37-light text font-normal">{product.description}</p>

        <div className="border-t border-white-background mt-10">
          <div className="flex justify-start gap-4 my-6 items-baseline">
            <span className="font-F37-light text font-normal">Colour</span>
            <h5 className="text-lg">{product.colour}</h5>
          </div>
          <div className="flex flex-wrap gap-2">
            {/* Use categoryImages instead of just a single boardImage */}
            <ProductButtonIcon images={categoryImages} />
          </div>
        </div>

        <div className="my-6">
          <span className="font-F37-light text font-normal">Board Width</span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.boardSpecifications.map((spec, index) => (
            <ButtonLink
              key={index}
              text={`${spec.boardWidth}mm`}
              onClick={() => {
                console.log("Button clicked for specification:", spec);
                onBoardWidthChange({ ...spec });
              }}
              className={`border px-4 py-2 ${
                selectedSpecification?.sku === spec.sku ? 'bg-primary text-white' : 'bg-white text-black'
              }`}
            />
          ))}
        </div>

        {/* Updated Add Free Sample button with handleAddToCart function */}
        <button className="btn-length mt-6 min-w-full" onClick={handleAddToCart}>
          Add Free Sample
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
