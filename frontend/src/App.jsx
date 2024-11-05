import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTopOnNav from './Components/ScrollToTopOnNav.jsx';
import './Styles/Main/index.css';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';
import BackToTopButton from './Components/Components/Common/BackToTopButton.jsx';
import LazyLoadSection from './Components/Components/Common/LazyLoadSection.jsx';

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
const EdgingFascia = lazy(() => import('./Pages/Accessories/Decking/EdgingFascia/EdgingFascia.jsx'));
const Subframes = lazy(() => import('./Pages/Accessories/Decking/Subframes/Subframes.jsx'));
const DeckingAccessories = lazy(() => import('./Pages/Accessories/Decking/Accessories/DeckingAccessories.jsx'));
const SquareEdge = lazy(() => import('./Pages/Accessories/Decking/EdgingFascia/Types/SquareEdge.jsx'));
const BullnoseEdge = lazy(() => import('./Pages/Accessories/Decking/EdgingFascia/Types/BullnoseEdge.jsx'));
const BullnoseBoard = lazy(() => import('./Pages/Accessories/Decking/EdgingFascia/Types/BullnoseBoard.jsx'));
const FasciaBoard = lazy(() => import('./Pages/Accessories/Decking/EdgingFascia/Types/FasciaBoard.jsx'));
const PlasPro = lazy(() => import('./Pages/Accessories/Decking/Subframes/Types/PlasPro.jsx'));
const Duospan = lazy(() => import('./Pages/Accessories/Decking/Subframes/Types/Duospan.jsx'));
const InspirationAndIdeasGallery = lazy(() => import('./Pages/Inspiration&Ideas/InspirationAndIdeasGallery.jsx'));
const DocumentResources = lazy(() => import('./Pages/Resources/Documents/DocumentResources.jsx'));
const HowToVideos = lazy(() => import('./Pages/Resources/Videos/HowToVideos.jsx'));
const Duolift = lazy(() => import('./Pages/Accessories/Decking/Subframes/Types/Duolift.jsx'));
const Fixings = lazy(() => import('./Pages/Accessories/Decking/Accessories/Fixings.jsx'));
const Duofix = lazy(() => import('./Pages/Accessories/Decking/Accessories/Duofix.jsx'));
const TouchUpPaint = lazy(() => import('./Pages/Accessories/Decking/Accessories/TouchUpPaint.jsx'));
const Decor = lazy(() => import('./Pages/Product/decor/Decor.jsx'));
const WhyMillboard = lazy(() => import('./Pages/Why/WhyMillboard/WhyMillboard.jsx'));
const Sustainability = lazy(() => import('./Pages/Why/Sustainability/Sustainability.jsx'));
const AllFAQsPage = lazy(() => import('./Components/FAQs/AllFAQsPage.jsx'));
const PottersBar = lazy(() => import('./Pages/Showroom/PottersBar/PottersBar.jsx'));
const CladdingAccessories = lazy(() => import('./Pages/Accessories/Cladding/CladdingAccessories.jsx'));
const PrivacyPolicy = lazy(() => import('./Pages/Legal/PrivacyPolicy.jsx'));
const CookiePolicy = lazy(() => import('./Pages/Legal/CookiePolicy.jsx'));
const TermsConditions = lazy(() => import('./Pages/Legal/TermsConditions.jsx'));
const DeliveryReturns = lazy(() => import('./Pages/Legal/DeliveryReturns.jsx'));
const AboutUs = lazy(() => import('./Pages/AboutUs/AboutUs.jsx'));
const ThankYou = lazy(() => import('./Components/Cart/ThankYou.jsx'));

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

            {/* Lazy load other routes with LazyLoadSection */}
            <Route path="/products/decking/collection" element={<LazyLoadSection><Collection /></LazyLoadSection>} />
            <Route path="/products/cladding/collection" element={<LazyLoadSection><Envello /></LazyLoadSection>} />
            <Route path="/products/:category/:subCategory/:type/:name" element={<LazyLoadSection><TryPage /></LazyLoadSection>} />
            <Route path="/products/:category/:subCategory/:type" element={<LazyLoadSection><TryPage /></LazyLoadSection>} />
            <Route path="/products/cladding/collection/decor" element={<LazyLoadSection><Decor /></LazyLoadSection>} />
            <Route path="/why/explore/why-millboard" element={<LazyLoadSection><WhyMillboard /></LazyLoadSection>} />
            <Route path="/why/impact/sustainability" element={<LazyLoadSection><Sustainability /></LazyLoadSection>} />
            <Route path="/product/:category/:subCategory/:type/:productName" element={<LazyLoadSection><ProductPage /></LazyLoadSection>} />
            <Route path="/checkout" element={<LazyLoadSection><Cart /></LazyLoadSection>} />
            <Route path="*" element={<LazyLoadSection><ProductNotFound /></LazyLoadSection>} />
            <Route path="/our-showrooms" element={<LazyLoadSection><Showroom /></LazyLoadSection>} />
            <Route path="/our-showrooms/kentish-town" element={<LazyLoadSection><KentishTown /></LazyLoadSection>} />
            <Route path="/our-showrooms/potters-bar" element={<LazyLoadSection><PottersBar /></LazyLoadSection>} />
            <Route path="/order-sample" element={<LazyLoadSection><OrderSample /></LazyLoadSection>} />
            <Route path="/decking-calculator" element={<LazyLoadSection><DeckingCalculator /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/edging-and-fascias" element={<LazyLoadSection><EdgingFascia /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/edging-and-fascias/square-edge" element={<LazyLoadSection><SquareEdge /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/edging-and-fascias/bullnose-edge" element={<LazyLoadSection><BullnoseEdge /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/edging-and-fascias/bullnose-board" element={<LazyLoadSection><BullnoseBoard /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/edging-and-fascias/fascia-board" element={<LazyLoadSection><FasciaBoard /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/subframes" element={<LazyLoadSection><Subframes /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/subframes/plas-pro" element={<LazyLoadSection><PlasPro /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/subframes/duospan" element={<LazyLoadSection><Duospan /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/subframes/duolift" element={<LazyLoadSection><Duolift /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/decking-accessories" element={<LazyLoadSection><DeckingAccessories /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/decking-accessories/fixings" element={<LazyLoadSection><Fixings /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/decking-accessories/duofix" element={<LazyLoadSection><Duofix /></LazyLoadSection>} />
            <Route path="/products/decking/accessories/decking-accessories/touch-up-paint" element={<LazyLoadSection><TouchUpPaint /></LazyLoadSection>} />
            <Route path="/inspiration-and-ideas/ideas/gallery" element={<LazyLoadSection><InspirationAndIdeasGallery /></LazyLoadSection>} />
            <Route path="/resources" element={<LazyLoadSection><DocumentResources /></LazyLoadSection>} />
            <Route path="/how-to-guides" element={<LazyLoadSection><HowToVideos /></LazyLoadSection>} />
            <Route path="/faqs" element={<LazyLoadSection><AllFAQsPage /></LazyLoadSection>} />
            <Route path="/products/cladding/accessories/cladding-accessories" element={<LazyLoadSection><CladdingAccessories /></LazyLoadSection>} />
            <Route path="/legal/privacy-policy" element={<LazyLoadSection><PrivacyPolicy /></LazyLoadSection>} />
            <Route path="/legal/cookies" element={<LazyLoadSection><CookiePolicy /></LazyLoadSection>} />
            <Route path="/legal/terms-conditions" element={<LazyLoadSection><TermsConditions /></LazyLoadSection>} />
            <Route path="/legal/delivery-and-returns" element={<LazyLoadSection><DeliveryReturns /></LazyLoadSection>} />
            <Route path="/about-us" element={<LazyLoadSection><AboutUs /></LazyLoadSection>} />
            <Route path="/thank-you" element={<LazyLoadSection><ThankYou /></LazyLoadSection>} />
          </Routes>
        </Suspense>
      </main>

      <BackToTopButton />
      <Footer />
    </>
  );
}
