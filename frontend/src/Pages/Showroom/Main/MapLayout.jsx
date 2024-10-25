import React, { useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapLayout = () => {
  // Your Mapbox token
  const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_API_TOKEN;

  // Set the initial state for the map's viewport
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10,
  });

  return (
    <div style={{ height: '500px', width: '500px' }}>
      <Map
        initialViewState={viewport}
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        {/* Optional: Add navigation controls */}
        <NavigationControl position="top-right" />

        {/* Example Marker */}
        <Marker latitude={37.7749} longitude={-122.4194}>
          <div>📍</div>
        </Marker>
      </Map>
    </div>
  );
};

export default MapLayout;
