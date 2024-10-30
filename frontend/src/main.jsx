import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './Styles/Main/index.css';
import store from './Redux/store.js'; // Import the Redux store

// Create the root element and wrap the app with Provider and BrowserRouter
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Redux store provider */}
      <BrowserRouter> {/* React Router provider */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
