import React, { useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import CustomLink from '../../Components/Components/Common/CustomLink';
import 'mapbox-gl/dist/mapbox-gl.css';
import LocationComponent from '../../Components/Components/Common/LocationComponent';


const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_API_TOKEN; // Make sure your Mapbox token is set

function GetInTouch() {
  const [viewport, setViewport] = useState({
    latitude: 51.548480, // Kentish Town latitude
    longitude: -0.136420, // Kentish Town longitude
    zoom: 14,
  });
  const [userLocation, setUserLocation] = useState(null);
  const [showLocationComponent, setShowLocationComponent] = useState(false);

  // Function to handle successful location fetch
  const handleLocationSuccess = (coords) => {
    setUserLocation(coords); // Set user location in state
    openGoogleMapsWithDirections(coords);
  };

  // Function to handle location errors
  const handleLocationError = (error) => {
    console.error('Location error:', error);
    alert('Unable to access your location.');
    setShowLocationComponent(false); // Hide LocationComponent on error
  };

  // Function to open Google Maps with directions
  const openGoogleMapsWithDirections = ({ latitude, longitude }) => {
    const destination = '51.548480,-0.136420'; // Kentish Town coordinates
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Function to initiate "Get directions" process
  const handleGetDirectionsClick = () => {
    setShowLocationComponent(true); // Show LocationComponent to request location
  };

  return (
    <div className="p-10 w-full max-w-lg">
      {/* Conditionally render LocationComponent to request location */}
      {showLocationComponent && (
        <LocationComponent 
          onLocationSuccess={handleLocationSuccess} 
          onLocationError={handleLocationError} 
        />
      )}

      {/* Contact Info */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
        <p className="text-lg text-gray-600 mb-4">
          <a href="tel:+4402074824661,12" className="text-lg font-light">020 7482 4661</a>
        </p>
        <p className="text-lg text-gray-600 mb-4">
          <a href="mailto:info@thelivingoutdoors.com" className="text-lg font-light underline">info@thelivingoutdoors.com</a>
        </p>
        <CustomLink to="/" className="text-lg font-light underline">Visit Website</CustomLink>
      </div>

      {/* Address and Map */}
      <div className="mb-8">
        <h3 className="text-xl font-light text-gray-800 mb-4">Address</h3>
        {/* Mapbox Map Integration */}
        <div className="shadow-md mb-4" style={{ width: '100%', height: '300px' }}>
          <Map
            initialViewState={viewport}
            mapboxAccessToken={MAPBOX_TOKEN}
            style={{ width: '100%', height: '100%' }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onMove={(event) => setViewport(event.viewState)}
          >
            {/* Marker for the showroom location */}
            <Marker 
              latitude={51.548480} 
              longitude={-0.136420} 
              anchor="bottom"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-8 h-8 text-[#799512]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </Marker>
            <NavigationControl position="top-right" />
          </Map>
        </div>
        <address className="not-italic text-lg text-gray-600 leading-relaxed">
          Living Outdoors Showroom <br />
          Kingsbury Builders Merchant<br />
          61 Caversham Road<br />
          Kentish Town<br />
          NW5 2DH<br />
          <a 
            href="#"
            onClick={handleGetDirectionsClick}
            className="pt-2 underline cursor-pointer"
          >
            Get directions
          </a>
        </address>
      </div>
    </div>
  );
}

export default GetInTouch;

