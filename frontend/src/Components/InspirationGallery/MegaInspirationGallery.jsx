// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { extractNameFromUrl } from '../../Utils'; // Import utility functions
// import ImageCarousel from '../Components/Common/ImageCarousel'; // Import your carousel component

// const ITEMS_PER_PAGE = 11; // Number of images per page

// const MegaInspirationGallery = ({ product, title = "" }) => {
//   const [randomImages, setRandomImages] = useState([]);
//   const [currentPage, setCurrentPage] = useState(0); // Track the current page
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   // Extract inspiration images from the product prop
//   const inspirationImages = product?.images?.MegaInspirationGallery || [];

//   // Randomize images on component mount
//   useEffect(() => {
//     if (inspirationImages.length > 0) {
//       const randomizedImages = [...inspirationImages].sort(() => Math.random() - 0.5);
//       setRandomImages(randomizedImages);
//     }
//   }, [inspirationImages]); // Depend on inspirationImages to rerun if the prop changes

//   const openModal = (index) => {
//     setSelectedImageIndex(index);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Pagination logic
//   const paginatedImages = randomImages.slice(
//     currentPage * ITEMS_PER_PAGE,
//     (currentPage + 1) * ITEMS_PER_PAGE
//   );

//   const totalPages = Math.ceil(randomImages.length / ITEMS_PER_PAGE);

//   const goToNextPage = () => {
//     if (currentPage < totalPages - 1) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const goToPreviousPage = () => {
//     if (currentPage > 0) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (!paginatedImages.length) {
//     return <div>Loading...</div>; // Handle loading state
//   }

//   return (
//     <div className="max-w-screen-xl mx-auto px-4">
//       <p className="font-F37-light text-center py-10 text-4xl uppercase">{title}</p>

//       {/* Gallery */}
//       <div className="grid grid-cols-3 gap-1 mt-1">
//         {/* Smaller Images on the left side, stacked vertically */}
//         <div className="grid grid-rows-2 gap-1">
//           {paginatedImages.slice(0, 2).map((src, index) => (
//             <div
//               className="overflow-hidden cursor-pointer"
//               key={index}
//               onClick={() => openModal(index)}
//               style={{
//                 minHeight: 'clamp(168px, 15vw, 404px)', // Consistent height
//                 minWidth: 'clamp(168px, 15vw, 404px)',  // Consistent width
//               }}
//             >
//               <img
//                 src={src}
//                 alt={extractNameFromUrl(src)}
//                 className="w-full h-full object-cover gallery-image-hover"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Large Image on the right side */}
//         {paginatedImages[2] && (
//           <div
//             className="col-span-2 overflow-hidden cursor-pointer"
//             style={{
//               minHeight: 'clamp(375px, 30vw, 816px)', // Consistent height for large image
//               minWidth: '100%',                        // Span the available width
//             }}
//             onClick={() => openModal(2)}
//           >
//             <img
//               src={paginatedImages[2]}
//               alt={extractNameFromUrl(paginatedImages[2])}
//               className="w-full h-full object-cover gallery-image-hover"
//               loading="lazy"
//             />
//           </div>
//         )}
//       </div>

//       {/* Second row with two larger images */}
//       <div className="grid grid-cols-2 gap-1 mt-1">
//         {paginatedImages.slice(3, 5).map((src, index) => (
//           <div
//             key={index + 3}
//             className="overflow-hidden cursor-pointer"
//             onClick={() => openModal(index + 3)}
//           >
//             <img
//               src={src}
//               alt={extractNameFromUrl(src)}
//               style={{
//                 width: '100%',
//                 height: 'clamp(300px, 30vw, 612px)',
//               }}
//               className="gallery-image-hover"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Third row with three images */}
//       <div className="grid grid-cols-3 gap-1 mt-1">
//         {paginatedImages.slice(5, 8).map((src, index) => (
//           <div
//             key={index + 5}
//             className="overflow-hidden cursor-pointer"
//             onClick={() => openModal(index + 5)}
//           >
//             <img
//               src={src}
//               alt={extractNameFromUrl(src)}
//               style={{
//                 width: '100%',
//                 height: 'clamp(186px, 20vw, 404px)',
//               }}
//               className="gallery-image-hover"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Fourth row with three images */}
//       <div className="grid grid-cols-3 gap-x-1 gap-y-0 mt-1">
//         {/* Large image on the left spanning two columns */}
//         {paginatedImages[8] && (
//           <div
//             className="col-span-2 overflow-hidden cursor-pointer"
//             style={{
//               minHeight: 'clamp(375px, 30vw, 816px)', // Consistent height for large image
//               minWidth: '100%',                        // Span the available width
//             }}
//             onClick={() => openModal(8)}
//           >
//             <img
//               src={paginatedImages[8]}
//               alt={extractNameFromUrl(paginatedImages[8])}
//               className="w-full h-full object-cover gallery-image-hover"
//               loading="lazy"
//             />
//           </div>
//         )}

//         {/* Two smaller images on the right, stacked vertically */}
//         <div className="grid grid-rows-2 gap-1">
//           {paginatedImages.slice(9, 11).map((src, index) => (
//             <div
//               className="overflow-hidden cursor-pointer"
//               key={index}
//               onClick={() => openModal(index)}
//               style={{
//                 minHeight: 'clamp(168px, 15vw, 404px)', // Consistent height
//                 minWidth: 'clamp(168px, 15vw, 404px)',  // Consistent width
//               }}
//             >
//               <img
//                 src={src}
//                 alt={extractNameFromUrl(src)}
//                 className="w-full h-full object-cover gallery-image-hover"
//                 loading="lazy"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination Controls */}
//       {/* Pagination Controls */}
// <div className="flex justify-center items-center mt-6 space-x-2">
//   {/* Previous Button */}
//   <button
//     onClick={goToPreviousPage}
//     disabled={currentPage === 0}
//     className={`px-3 py-1 border rounded-md ${
//       currentPage === 0 ? 'text-gray-400 border-gray-300' : 'text-gray-700 border-gray-500'
//     }`}
//   >
//     &lt;
//   </button>

//   {/* Page Numbers */}
//   {Array.from({ length: totalPages }, (_, index) => {
//     // Logic for truncating the pagination numbers
//     const isPageVisible =
//       index === 0 ||
//       index === totalPages - 1 ||
//       (index >= currentPage - 1 && index <= currentPage + 1);

//     // Render page number or dots
//     if (isPageVisible) {
//       return (
//         <button
//           key={index}
//           onClick={() => setCurrentPage(index)}
//           className={`px-3 py-1 border rounded-md ${
//             currentPage === index
//               ? 'bg-green text-white border-green'
//               : 'text-primary border-primary'
//           }`}
//         >
//           {index + 1}
//         </button>
//       );
//     } else if (
//       (index === currentPage - 2 && currentPage > 2) ||
//       (index === currentPage + 2 && currentPage < totalPages - 3)
//     ) {
//       return (
//         <span key={index} className="px-3 py-1 text-primary">
//           ...
//         </span>
//       );
//     }

//     return null;
//   })}

//   {/* Next Button */}
//   <button
//     onClick={goToNextPage}
//     disabled={currentPage === totalPages - 1}
//     className={`px-3 py-1 border rounded-md ${
//       currentPage === totalPages - 1
//         ? 'text-white bg-green '
//         : 'text-primary border-primary'
//     }`}
//   >
//     &gt;
//   </button>
// </div>


//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//           onClick={closeModal}
//         >
//           <div
//             className="relative w-11/12 h-auto mx-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white bg-opacity-100 font-extrabold text-3xl"
//               aria-label="Close Modal"
//             >
//               &times;
//             </button>
//             <ImageCarousel
//               images={randomImages.map((src) => ({
//                 src,
//                 alt: extractNameFromUrl(src),
//               }))}
//               initialIndex={selectedImageIndex}
//               buttonColor="#fff"
//               paginationColor="#fff"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // PropTypes for validation
// MegaInspirationGallery.propTypes = {
//   product: PropTypes.shape({
//     images: PropTypes.shape({
//       MegaInspirationGallery: PropTypes.arrayOf(PropTypes.string),
//     }),
//   }).isRequired,
// };

// export default MegaInspirationGallery;

import React from 'react'

function MegaInspirationGallery() {
  return (
    <div>MegaInspirationGallery</div>
  )
}

export default MegaInspirationGallery