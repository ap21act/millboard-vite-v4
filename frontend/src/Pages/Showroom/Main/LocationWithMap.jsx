import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import CustomLink from '../../../Components/Components/Common/CustomLink';
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

const defaultCenter = {
  lat: 54.5,
  lng: -3.5,
};

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAP_API; // Adjust for Vite

const LocationWithMap = () => {
  const [selectedPosition, setSelectedPosition] = useState(defaultCenter);

  // Function to handle both SVG and button clicks
  const handleLocationClick = (position) => {
    setSelectedPosition(position); // Update the map center
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row p-8 gap-10">
      {/* Left Locations List */}
      <div className="lg:w-1/3 w-full overflow-auto pr-4 space-y-8">
        <h2 className="text-2xl font-semibold mb-4">{locations.length} locations</h2>
        {locations.map((location) => (
          <div 
            key={location.id} 
            className="flex justify-between items-center border-b border-white-background pb-4"
          >
            <div>
              <h3 className="font-bold text-lg">{location.name}</h3>
              <p className="">{location.address}</p>
              {/* CustomLink instead of button */}
              <CustomLink 
                to={`${location.link}`} // Dynamic routing for each store
                className="my-2"
                onClick={() => handleLocationClick(location.position)} // Update map position
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
                className="size-7 hover:text-green active:text-green"
                onClick={() => handleLocationClick(location.position)} // SVG click to update map
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Right Google Map Section */}
      <div className="lg:w-2/3 w-full">
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={selectedPosition}
            zoom={10}
          >
            {locations.map((location) => (
              <Marker 
                key={location.id} 
                position={location.position} 
                onClick={() => setSelectedPosition(location.position)}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default LocationWithMap;
