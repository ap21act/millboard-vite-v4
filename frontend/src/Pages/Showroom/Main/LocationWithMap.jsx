import React, { useState, useRef, useEffect } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import CustomLink from '../../../Components/Components/Common/CustomLink';
import 'mapbox-gl/dist/mapbox-gl.css';

// Your locations
const locations = [
  {
    id: 1,
    link:'/our-showrooms/kentish-town',
    name: "Living Outdoors Showroom Kingsbury Builders Merchant",
    address: "61 Caversham Road, London, Kentish Town NW5 2DH",
    position: { lat: 51.548480, lng: -0.136420 },
  },
  {
    id: 2,
    link:'/our-showrooms/potters-bar',
    name: "Outdoors Showroom Kingsbury Joinery",
    address: "Cranborne Industrial Estate, Cranborne Rd, Potters Bar EN6 3JN",
    position: { lat: 51.700390, lng: -0.204300 },
  },
  // Add more locations as needed...
];

const containerStyle = {
  width: '100%',
  height: '500px',
};

// Set the initial center to Kentish Town
const initialCenter = {
  lat: 51.548480,
  lng: -0.136420,
};

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_API_TOKEN; // Make sure to replace with your Mapbox token

const LocationWithMap = () => {
  const [selectedPosition, setSelectedPosition] = useState(initialCenter);
  const [selectedMarkerId, setSelectedMarkerId] = useState(1); // Default to Kentish Town (id: 1)
  const mapRef = useRef(null);

  // Use Effect to fit bounds on load
  useEffect(() => {
    if (mapRef.current) {
      // England's approximate bounding box (south-west and north-east coordinates)
      const bounds = [
        [-6.38, 49.87], // South-West corner (longitude, latitude)
        [1.77, 55.81]   // North-East corner (longitude, latitude)
      ];
      mapRef.current.fitBounds(bounds, { padding: 20 });
    }
  }, []);

  // Function to handle both SVG and button clicks
  const handleLocationClick = (location) => {
    setSelectedPosition(location.position); // Update the map center
    setSelectedMarkerId(location.id); // Set the selected marker ID
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row p-8 gap-10">
      {/* Left Locations List */}
      <div className="lg:w-2/5 w-full overflow-auto pr-4 space-y-8">
        <h2 className="text-2xl font-semibold mb-4">{locations.length} locations</h2>
        {locations.map((location) => (
          <div 
            key={location.id} 
            className={`flex justify-between items-center border-b border-gray-300 pb-4 ${selectedMarkerId === location.id ? 'text-[#799512]' : ''}`}
          >
            <div>
              <h3 className="font-bold text-lg">{location.name}</h3>
              <p className="">{location.address}</p>
              {/* CustomLink instead of button */}
              <CustomLink 
                to={`${location.link}`} // Dynamic routing for each store
                className="my-2"
                onClick={() => handleLocationClick(location)} // Update map position
              >
                View Store
              </CustomLink>
            </div>
            <div>
              {/* Location Marker Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className={`size-10 hover:text-[#799512] cursor-pointer ${selectedMarkerId === location.id ? 'text-[#799512]' : ''}`}
                onClick={() => handleLocationClick(location)} // SVG click to update map
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Right Mapbox Section */}
      <div className="lg:w-3/5 w-full">
        <Map
          ref={mapRef} // Reference to map for fitting bounds
          initialViewState={{
            latitude: initialCenter.lat,  // Set to Kentish Town initially
            longitude: initialCenter.lng,  // Set to Kentish Town initially
            zoom: 6.5,                    // Adjusted for a more zoomed-out view
          }}
          mapboxAccessToken={MAPBOX_TOKEN}
          style={{ width: '100%', height: '500px' }}
          mapStyle="mapbox://styles/mapbox/light-v10" // Use light monochrome theme
        >
          {/* Optional: Add navigation controls */}
          <NavigationControl position="top-right" />

          {/* Display markers */}
          {locations.map((location) => (
            <Marker 
              key={location.id} 
              longitude={location.position.lng} 
              latitude={location.position.lat} 
              anchor="bottom"
              onClick={() => handleLocationClick(location)}
            >
              {/* Custom SVG Marker - same styling as in Left Locations List */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke={location.id === selectedMarkerId ? "#799512" : "currentColor"} // #799512 if selected
                className="size-10 cursor-pointer"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
};

export default LocationWithMap;
