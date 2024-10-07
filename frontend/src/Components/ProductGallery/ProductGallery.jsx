import React from 'react';
import ImageCarousel from '../Components/Common/ImageCarousel'; // Import your carousel component
import { extractNameFromUrl } from '../../Utils'; // Import the utility function

const ProductGallery = ({ productIndex = 0 }) => {
  // Static product data
  const products = [
    {
      _id: "66f282859f4f2ec9ba65ade5",
      name: "Golden Oak",
      category: "Decking",
      subCategory: "Collection",
      type: "Enhanced Grain",
      description:
        "The Enhanced Grain decking profile has been molded from real oak masters with different widths and grain patterns, creating a unique balance for both contemporary and traditional designs.",
      colour: "Golden Oak",
      images: {
        titleImage: "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727168464/Decking/Collection/Enhanced%20Grain/Antique%20Oak/InspirationGallery/ca2ubrbwvjl0jnfjfb24.png",
        boardImage: "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727168464/Decking/Collection/Enhanced%20Grain/Antique%20Oak/InspirationGallery/ca2ubrbwvjl0jnfjfb24.png",
        productImages: [
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727168464/Decking/Collection/Enhanced%20Grain/Antique%20Oak/InspirationGallery/ca2ubrbwvjl0jnfjfb24.png",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727168464/Decking/Collection/Enhanced%20Grain/Antique%20Oak/InspirationGallery/ca2ubrbwvjl0jnfjfb24.png",
        ],
        inspirationGallery: [
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174632/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage1.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174632/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage2.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174633/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage3.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174634/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage4.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174635/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage5.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174636/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage6.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174637/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage7.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174638/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage8.jpg",
        ],
      },
      boardSpecifications: [
        {
          boardWidth: 220,
          weight: 11.9,
          fixing: 10,
          numberOfBoards: 1.53,
          sku: "MCBF360G",
          length: 200,
          breadth: 26,
          height: 3600,
        },
        {
          boardWidth: 240,
          weight: 9,
          fixing: 11,
          numberOfBoards: 1.69,
          sku: "MCBF361G",
          length: 221,
          breadth: 33,
          height: 321,
        },
      ],
    },
    {
      _id: "66f282859f4f2ec9ba65ade5",
      name: "Golden Oak",
      category: "Decking",
      subCategory: "Collection",
      type: "Enhanced Grain",
      description:
        "The Enhanced Grain decking profile has been molded from real oak masters with different widths and grain patterns, creating a unique balance for both contemporary and traditional designs.",
      colour: "Golden Oak",
      images: {
        titleImage: "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727168464/Decking/Collection/Enhanced%20Grain/Antique%20Oak/InspirationGallery/ca2ubrbwvjl0jnfjfb24.png",
        boardImage: "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727168472/Decking/Collection/Enhanced%20Grain/Antique%20Oak/InspirationGallery/fbsuxwtgcnvqu1tdaqbf.png",
        productImages: [
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727168464/Decking/Collection/Enhanced%20Grain/Antique%20Oak/InspirationGallery/ca2ubrbwvjl0jnfjfb24.png",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727168464/Decking/Collection/Enhanced%20Grain/Antique%20Oak/InspirationGallery/ca2ubrbwvjl0jnfjfb24.png",
        ],
        inspirationGallery: [
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174632/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage1.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174632/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage2.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174633/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage3.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174634/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage4.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174635/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage5.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174636/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage6.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174637/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage7.jpg",
          "http://res.cloudinary.com/ddtzxyzex/image/upload/v1727174638/Decking/Collection/Enhanced_Grain/Golden_Oak/inspirationImage8.jpg",
        ],
      },
      boardSpecifications: [
        {
          boardWidth: 220,
          weight: 11.9,
          fixing: 10,
          numberOfBoards: 1.53,
          sku: "MCBF360G",
          length: 200,
          breadth: 26,
          height: 3600,
        },
        {
          boardWidth: 240,
          weight: 9,
          fixing: 11,
          numberOfBoards: 1.69,
          sku: "MCBF361G",
          length: 221,
          breadth: 33,
          height: 321,
        },
      ],
    },
    // Add more products if needed...
  ];

  // Get the product to display based on productIndex
  const product = products[productIndex];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* For larger screens (keep your grid layout) */}
      <div className="hidden lg:block space-y-1 max-w-screen-md mx-auto p-4">
        {/* First row with one image */}
        <div className="w-full overflow-hidden">
          <img 
            src={product.images.productImages[0]} 
            alt={extractNameFromUrl(product.images.productImages[0])} 
            className="object-cover w-full hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ height: 'clamp(343px, 13.3093rem + 34.6805vw, 712px)' }} 
            loading="lazy" 
          />
        </div>

        {/* Second row with two images in flex container */}
        <div className="flex gap-1">
          <div className="w-1/2 overflow-hidden">
            <img 
              src={product.images.boardImage} 
              alt={extractNameFromUrl(product.images.boardImage)} 
              className="object-cover w-full cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ height: 'clamp(280px, 6.3964rem + 17.3494vw, 352px)' }}
              loading="lazy" 
            />
          </div>
          <div className="w-1/2 overflow-hidden">
            <img 
              src={product.images.titleImage} 
              alt={extractNameFromUrl(product.images.titleImage)} 
              className="object-cover w-full cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              style={{ height: 'clamp(280px, 6.3964rem + 17.3494vw, 352px)' }}
              loading="lazy" 
            />
          </div>
        </div>

        {/* Third row with one image */}
        <div className="w-full overflow-hidden">
          <img 
            src={product.images.productImages[1]} 
            alt={extractNameFromUrl(product.images.productImages[1])} 
            className="object-cover w-full hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ height: 'clamp(343px, 13.3093rem + 34.6805vw, 712px)' }} 
            loading="lazy" 
          />
        </div>
      </div>

      {/* For smaller screens (mobile carousel) */}
      <div className="lg:hidden">
        <ImageCarousel 
          images={[
            { src: product.images.productImages[0], alt: extractNameFromUrl(product.images.productImages[0]) },
            { src: product.images.boardImage, alt: extractNameFromUrl(product.images.boardImage) },
            { src: product.images.titleImage, alt: extractNameFromUrl(product.images.titleImage) },
            { src: product.images.productImages[1], alt: extractNameFromUrl(product.images.productImages[1]) },
          ]} 
        />
      </div>
    </div>
  );
};

export default ProductGallery;
