import React, { useEffect, useState } from 'react';
import ProductButtonIcon from '../Components/Common/ProductButtonIcon';
import ButtonLink from '../Components/Common/ButtonLink';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/Slices/cartSlice';
import { setSelectedSpecification } from '../../Redux/Slices/specificationSlice';

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  // Retrieve the selected specification from Redux
  const selectedSpecification = useSelector((state) => state.specification.selectedSpecification);
  
  // Board image state
  const [boardImage, setBoardImage] = useState(product?.images?.boardImage || '');

  // Set default specification on component mount
  useEffect(() => {
    if (product?.boardSpecifications?.length > 0) {
      const defaultSpec = product.boardSpecifications[0];
      dispatch(setSelectedSpecification(defaultSpec)); // Set default spec in Redux
    }
  }, [product, dispatch]);

  // Update board image when the selected specification changes
  useEffect(() => {
    if (selectedSpecification) {
      const specIndex = product.boardSpecifications.indexOf(selectedSpecification);
      setBoardImage(product.images?.boardImage || '');
    }
  }, [selectedSpecification, product]);

  // Handle board width change
  const onBoardWidthChange = (spec) => {
    dispatch(setSelectedSpecification(spec)); // Update selected specification in Redux
  };

  // Handle adding to cart
 // Handle adding to cart
// Function to handle adding to cart
const handleAddToCart = () => {
  if (!selectedSpecification) return;

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
    boardImage: boardImage, // Use the current board image
  };

  // Dispatch the replaceItem action
  dispatch(addToCart(cartItem));
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
            <h2>ProductButton Icon</h2> {/* Placeholder for ProductButtonIcon */}
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
              onClick={() => onBoardWidthChange(spec)}
              className={`border px-4 py-2 ${
                selectedSpecification?.sku === spec.sku ? 'bg-primary text-white' : 'bg-white text-black'
              }`}
              disabled={selectedSpecification?.sku === spec.sku}
            />
          ))}
        </div>

        {/* Add Free Sample button */}
        <button className="btn-length mt-6 min-w-full" onClick={handleAddToCart}>
          Add Free Sample
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
