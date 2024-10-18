import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import default Toastify CSS

import './Styles/Main/index.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';
import ProductPage from './Pages/Product/ProductPage.jsx';
import Cart from './Components/Cart/Cart.jsx';
import TryPage from './Pages/Try/TryPage.jsx';
import ProductNotFound from './Pages/ProductNotFound.jsx';
import BackToTopButton from './Components/Components/Common/BackToTopButton.jsx';
import Collection from './Pages/Product/Collection/Collection.jsx';
import Envello from './Pages/Product/envello/Envello.jsx';
import Showroom from './Pages/Showroom/Main/Showroom.jsx';
import KentishTown from './Pages/Showroom/KentishTown/KentishTown.jsx';
import OrderSample from './Pages/Sample/OrderSample.jsx';
import DeckingCalculator from './Pages/Calculator/DeckingCalculator.jsx';

export default function App() {
  return (
    <>
      <ToastContainer // Add the ToastContainer here
        position="top-right"
        autoClose={3000}  // Auto close after 3 seconds
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <Header />
      <main className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/decking/collection" element={<Collection />} />
          <Route path="products/cladding/collection" element={<Envello />} />
          <Route path="/products/:category/:subCategory/:type/:name" element={<TryPage />} />
          <Route path="/products/:category/:subCategory/:type" element={<TryPage />} />
          {/* Updated Product Page Route to accept dynamic URL segments */}
          <Route path="/product/:category/:subCategory/:type/:productName" element={<ProductPage />} />
          <Route path="/checkout" element={<Cart />} /> {/* Add route for Cart */}
          <Route path="*" element={<ProductNotFound />} />
          <Route path="/our-showrooms" element={<Showroom />} />
          <Route path="/our-showrooms/kentish-town" element={<KentishTown />} />
          <Route path="/order-sample" element={<OrderSample />} />
          <Route path="/decking-calculator" element = {<DeckingCalculator />} />
        </Routes>
      </main>
      <BackToTopButton /> {/* Add Back to Top button here */}
      <Footer />
    </>
  );
}
