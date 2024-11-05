import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopOnNav from './Components/ScrollToTopOnNav.jsx';
import './Styles/Main/index.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx'; // Keep Home loaded normally
import BackToTopButton from './Components/Components/Common/BackToTopButton.jsx';

// Lazy load other pages
const ProductPage = lazy(() => import('./Pages/Product/ProductPage.jsx'));
const Cart = lazy(() => import('./Components/Cart/Cart.jsx'));
const TryPage = lazy(() => import('./Pages/Try/TryPage.jsx'));
const ProductNotFound = lazy(() => import('./Pages/ProductNotFound.jsx'));
const Collection = lazy(() => import('./Pages/Product/Collection/Collection.jsx'));
const Envello = lazy(() => import('./Pages/Product/envello/Envello.jsx'));
const Showroom = lazy(() => import('./Pages/Showroom/Main/Showroom.jsx'));
const KentishTown = lazy(() => import('./Pages/Showroom/KentishTown/KentishTown.jsx'));
const OrderSample = lazy(() => import('./Pages/Sample/OrderSample.jsx'));
const DeckingCalculator = lazy(() => import('./Pages/Calculator/DeckingCalculator.jsx'));
// Continue lazy loading the other components in a similar way...

// Example for multiple components
const PrivacyPolicy = lazy(() => import('./Pages/Legal/PrivacyPolicy.jsx'));
const CookiePolicy = lazy(() => import('./Pages/Legal/CookiePolicy.jsx'));
const TermsConditions = lazy(() => import('./Pages/Legal/TermsConditions.jsx'));
const DeliveryReturns = lazy(() => import('./Pages/Legal/DeliveryReturns.jsx'));
const AboutUs = lazy(() => import('./Pages/AboutUs/AboutUs.jsx'));
const ThankYou = lazy(() => import('./Components/Cart/ThankYou.jsx'));

// Main App component with lazy-loaded routes
export default function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <Header />
      <main>
        <ScrollToTopOnNav />
        
        {/* Suspense fallback for lazy-loaded components */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/decking/collection" element={<Collection />} />
            <Route path="/products/cladding/collection" element={<Envello />} />
            <Route path="/products/:category/:subCategory/:type/:name" element={<TryPage />} />
            <Route path="/products/:category/:subCategory/:type" element={<TryPage />} />
            <Route path="/product/:category/:subCategory/:type/:productName" element={<ProductPage />} />
            <Route path="/checkout" element={<Cart />} />
            <Route path="*" element={<ProductNotFound />} />
            <Route path="/our-showrooms" element={<Showroom />} />
            <Route path="/our-showrooms/kentish-town" element={<KentishTown />} />
            <Route path="/order-sample" element={<OrderSample />} />
            <Route path="/decking-calculator" element={<DeckingCalculator />} />
            <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal/cookies" element={<CookiePolicy />} />
            <Route path="/legal/terms-conditions" element={<TermsConditions />} />
            <Route path="/legal/delivery-and-returns" element={<DeliveryReturns />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </Suspense>
      </main>
      <BackToTopButton />
      <Footer />
    </>
  );
}
