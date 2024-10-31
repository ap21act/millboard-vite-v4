import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductButtonIcon from '../Components/ProductButtonArray/ProductButtonIcon';
import ButtonLink from '../Components/Common/ButtonLink';
import { addToCart, removeFromCart } from '../../Redux/Slices/cartSlice';
import { setSelectedSpecification } from '../../Redux/Slices/specificationSlice';
import ProductButtonArray from '../Components/ProductButtonArray/ProductButtonArray';
import { showSuccessToast, showErrorToast, showInfoToast } from '../../Components/Components/Common/ToastNotification'; // Import the toast notifications

const ProductDetails = ({ product }) => {
  const dispatch = useDispatch();

  // Retrieve the selected specification from Redux
  const selectedSpecification = useSelector((state) => state.specification.selectedSpecification);
  
  // Retrieve cart items from Redux to check if the SKU is already in the cart
  const cartItems = useSelector((state) => state.cart.items);
  
  // Count the total number of items in the cart
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // Board image state
  const [boardImage, setBoardImage] = useState(product?.images?.boardImage || '');

  // Check if the current selected SKU is in the cart
  const isItemInCart = cartItems.some(item => item.sku === selectedSpecification?.sku);

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
    dispatch(setSelectedSpecification(spec));
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    if (!selectedSpecification) return;

    if (totalItemsInCart >= 4) {
      showErrorToast('You can only add up to 3 samples to the cart.');
      return; // Prevent adding more items
    }

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
      slug: product.slug,
      
    };

    dispatch(addToCart(cartItem));
    showSuccessToast('Sample added to cart!');
  };

  // Handle removing from cart
  const handleRemoveFromCart = () => {
    if (!selectedSpecification) return;

    dispatch(removeFromCart({ productId: product._id, sku: selectedSpecification.sku }));
    showInfoToast('Sample removed from cart.');
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
          <div className="flex flex-wrap">
            <ProductButtonArray type={product.type} />
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
              {/* Decking Calculator Link */}
              {product.category === 'Decking' && (
  <a
    href="https://deckplanner.millboard.com"
    target="_blank"
    rel="noopener noreferrer"
    className="border-primary  text-xl uppercase mt-6 min-w-full flex items-center justify-center gap-2 p-3 border hover:text-green-progress transition-colors"
  >
    <img
      src="https://res.cloudinary.com/ddtzxyzex/image/upload/v1729601520/products/Icons/calculator.svg"
      alt="Decking Calculator Icon"
      className="h-6 w-6 transition-transform " 
    />
    <span className="text-center">Decking Calculator</span>
  </a>
)}

        

        {/* Add/Remove Cart Button */}
        {isItemInCart ? (
          <button className="btn-length mt-6 min-w-full" onClick={handleRemoveFromCart}>
            Remove from Cart
          </button>
        ) : (
          <button 
  className={`btn-length mt-6 min-w-full ${totalItemsInCart >= 3 ? 'opacity-70 cursor-not-allowed' : ''}`}
  onClick={() => {
    if (totalItemsInCart >= 3) {
      showErrorToast('You can only add up to 3 samples to the cart.');
    } else {
      handleAddToCart();
    }
  }}
>
  Add Free Sample
</button>

        )}
      </div>
    </div>
  );
};

export default ProductDetails;
