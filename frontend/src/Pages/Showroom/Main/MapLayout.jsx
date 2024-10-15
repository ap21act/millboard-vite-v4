import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Your locations
const locations = [
  {
    id: 1,
    name: "Living Outdoors Kingsbury Builders Merchant",
    position: { lat: 53.2707, lng: -9.0568 }, // Galway, Ireland
  },
  {
    id: 2,
    name: "Millboard Midlands Showroom",
    position: { lat: 52.4068, lng: -1.5197 }, // Coventry, UK
  },
];

// Center of the map
const center = {
  lat: 54.5,
  lng: -3.5,
};

const containerStyle = {
  width: '100%',
  height: '600px',
};

// SVG for the marker as a data URL
const customMarkerIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#4CAF50" width="40" height="40">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
  </svg>
`;

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAP_API; // Correct Vite environment variable

const MapLayout = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleMapLoad = (map) => {
    setMapLoaded(true); // Set flag when map has loaded
  };

  // Function to get the user's current location
  const getCurrentLocation = (destination) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;

          // Open Google Maps with directions
          const url = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destination.lat},${destination.lng}`;
          window.open(url, "_blank");
        },
        () => {
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div>
      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          onLoad={handleMapLoad} // Ensure map has loaded before rendering markers
        >
          {/* Render markers only after the Google Maps API is loaded */}
          {mapLoaded &&
            locations.map((location) => (
              <Marker
                key={location.id}
                position={location.position}
                onClick={() => getCurrentLocation(location.position)} // Handle marker click
                icon={{
                  url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(customMarkerIcon)}`, // Custom SVG marker as a data URL
                  scaledSize: mapLoaded ? new window.google.maps.Size(40, 40) : null, // Use window.google.maps.Size only if map has loaded
                }}
              />
            ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapLayout;
