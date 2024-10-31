// Showrooms.js
import React from 'react';
import { Route } from 'react-router-dom';
import Showroom from './Main/Showroom.jsx';
import KentishTown from './KentishTown/KentishTown.jsx';
import PottersBar from './PottersBar/PottersBar.jsx';

const Showrooms = [
  <Route path="/our-showrooms" element={<Showroom />} key="showroom" />,
  <Route path="/our-showrooms/kentish-town" element={<KentishTown />} key="kentish-town" />,
  <Route path="/our-showrooms/potters-bar" element={<PottersBar />} key="potters-bar" />,
];

export default Showrooms;
