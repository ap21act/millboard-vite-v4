import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import default Toastify CSS
import {deckingFaqs} from './Data/FAQs/faqs.jsx'
import ScrollToTopOnNav from './Components/ScrollToTopOnNav.jsx';
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
import EdgingFascia from './Pages/Accessories/Decking/EdgingFascia/EdgingFascia.jsx';
import Subframes from './Pages/Accessories/Decking/Subframes/Subframes.jsx';
import DeckingAccessories from './Pages/Accessories/Decking/Accessories/DeckingAccessories.jsx';
import SquareEdge from './Pages/Accessories/Decking/EdgingFascia/Types/SquareEdge.jsx';
import BullnoseEdge from './Pages/Accessories/Decking/EdgingFascia/Types/BullnoseEdge.jsx';
import BullnoseBoard from './Pages/Accessories/Decking/EdgingFascia/Types/BullnoseBoard.jsx';
import FasciaBoard from './Pages/Accessories/Decking/EdgingFascia/Types/FasciaBoard.jsx';
import PlasPro from './Pages/Accessories/Decking/Subframes/Types/PlasPro.jsx';
import Duospan from './Pages/Accessories/Decking/Subframes/Types/Duospan.jsx';
import InspirationAndIdeasGallery from './Pages/Inspiration&Ideas/InspirationAndIdeasGallery.jsx';
import DocumentResources from './Pages/Resources/Documents/DocumentResources.jsx';
import HowToVideos from './Pages/Resources/Videos/HowToVideos.jsx';
import Duolift from './Pages/Accessories/Decking/Subframes/Types/Duolift.jsx';
import Fixings from './Pages/Accessories/Decking/Accessories/Fixings.jsx';
import Duofix from './Pages/Accessories/Decking/Accessories/Duofix.jsx';
import TouchUpPaint from './Pages/Accessories/Decking/Accessories/TouchUpPaint.jsx';
import Decor from './Pages/Product/decor/Decor.jsx';
import WhyMillboard from './Pages/Why/WhyMillboard/WhyMillboard.jsx';
import Sustainability from './Pages/Why/Sustainability/Sustainability.jsx';
import AllFAQsPage from './Components/FAQs/AllFAQsPage.jsx';
import PottersBar from './Pages/Showroom/PottersBar/PottersBar.jsx';
import CladdingAccessories from './Pages/Accessories/Cladding/CladdingAccessories.jsx';
import PrivacyPolicy from './Pages/Legal/PrivacyPolicy.jsx';
import CookiePolicy from './Pages/Legal/CookiePolicy.jsx';
import TermsConditions from './Pages/Legal/TermsConditions.jsx';
import DeliveryReturns from './Pages/Legal/DeliveryReturns.jsx';
import AboutUs from './Pages/AboutUs/AboutUs.jsx';
import ThankYou from './Components/Cart/ThankYou.jsx';

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
      <main className="  ">
        <ScrollToTopOnNav /> {/* Add ScrollToTop component here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/decking/collection" element={<Collection />} />
          <Route path="products/cladding/collection" element={<Envello />} />
          <Route path="/products/:category/:subCategory/:type/:name" element={<TryPage />} />
          <Route path="/products/:category/:subCategory/:type" element={<TryPage />} />
          <Route path="/products/cladding/collection/decor" element={<Decor />} />
          <Route path="/why/explore/why-millboard" element={<WhyMillboard />} />
          <Route path ="/why/impact/sustainability" element={<Sustainability />} />
          {/* Updated Product Page Route to accept dynamic URL segments */}
          <Route path="/product/:category/:subCategory/:type/:productName" element={<ProductPage />} />
          <Route path="/checkout" element={<Cart />} /> {/* Add route for Cart */}
          <Route path="*" element={<ProductNotFound />} />
          <Route path="/our-showrooms" element={<Showroom />} />
          <Route path="/our-showrooms/kentish-town" element={<KentishTown />} />
          <Route path="/our-showrooms/potters-bar" element={<PottersBar />} />
          <Route path="/order-sample" element={<OrderSample />} />
          <Route path="/decking-calculator" element = {<DeckingCalculator />} />
          <Route path="/products/decking/accessories/edging-and-fascias" element={<EdgingFascia />} />
          <Route path="/products/decking/accessories/edging-and-fascias/square-edge" element={<SquareEdge />} />
          <Route path="/products/decking/accessories/edging-and-fascias/bullnose-edge" element={<BullnoseEdge />} />
          <Route path="/products/decking/accessories/edging-and-fascias/bullnose-board" element={<BullnoseBoard />} />
          <Route path="/products/decking/accessories/edging-and-fascias/fascia-board" element={<FasciaBoard />} />
          <Route path="/products/decking/accessories/subframes" element={<Subframes />} />
          <Route path="/products/decking/accessories/subframes/plas-pro" element={<PlasPro />} />
          <Route path="/products/decking/accessories/subframes/duospan" element={<Duospan />} />
          <Route path="/products/decking/accessories/subframes/duolift" element={<Duolift />} />

          <Route path="/products/decking/accessories/decking-accessories" element={<DeckingAccessories />} />
          <Route path="/products/decking/accessories/decking-accessories/fixings" element={<Fixings />} />
          <Route path="/products/decking/accessories/decking-accessories/duofix" element={<Duofix />} />
          <Route path="/products/decking/accessories/decking-accessories/touch-up-paint" element={<TouchUpPaint />} />
          <Route path="inspiration-and-ideas/ideas/gallery" element={<InspirationAndIdeasGallery />} />
          <Route path="/resources" element={<DocumentResources />} />
          <Route path="/how-to-guides" element = {<HowToVideos />} />
          <Route path="/faqs" element={<AllFAQsPage  />} />
          <Route path="/products/cladding/accessories/cladding-accessories" element={<CladdingAccessories />} />
          <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal/cookies" element={<CookiePolicy />} />
          <Route path="/legal/terms-conditions" element={<TermsConditions />} />
          <Route path="/legal/delivery-and-returns" element={<DeliveryReturns />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/thankyou" element={<ThankYou    />}/>
          
        </Routes>
      </main>
      <BackToTopButton /> {/* Add Back to Top button here */}
      <Footer />
    </>
  );
}
