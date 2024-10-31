import React, { useState,useEffect } from 'react';
import { requestLocation } from '../../../Utils';

const LocationComponent = ({ onLocationSuccess, onLocationError }) => {
  useEffect(() => {
    requestLocation()
      .then((coords) => {
        onLocationSuccess(coords); // Pass coordinates up to the parent component
      })
      .catch((err) => {
        onLocationError(err);
      });
  }, [onLocationSuccess, onLocationError]);

  return null; // This component doesn't render anything visible
};

export default LocationComponent;
