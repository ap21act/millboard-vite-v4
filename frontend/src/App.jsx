import { Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/decking/collection" element={<Collection />} />
          <Route path="products/cladding/collection" element= {<Envello />} />
          <Route path="/products/:category/:subCategory/:type/:name" element={<TryPage />} />
          {/* Updated Product Page Route to accept dynamic URL segments */}
          <Route path="/product/:category/:subCategory/:type/:productName" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} /> {/* Add route for Cart */}
          <Route path="*" element={<ProductNotFound />} />
        </Routes>
      </main>
      <BackToTopButton /> {/* Add Back to Top button here */}
      <Footer />
    </>
  );
}
