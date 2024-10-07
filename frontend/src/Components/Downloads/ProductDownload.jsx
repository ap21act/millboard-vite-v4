import React from 'react';
import FileDownload from './FileDownload'; // Import FileDownload component from the same Downloads folder

const filesData = [
    'https://millboard.widen.net/content/fhmduhmjib/original/Enhanced-Grain-Slip-Testing---BS-7976-2-(Slider-55---Barefoot).pdf',
    'https://millboard.widen.net/content/fhmduhmjib/original/Enhanced-Grain-Slip-Testing---BS-7976-2-(Slider-55---Barefoot).pdf',
    'https://millboard.widen.net/content/fhmduhmjib/original/Enhanced-Grain-Slip-Testing---BS-7976-2-(Slider-55---Barefoot).pdf',
    'https://millboard.widen.net/content/fhmduhmjib/original/Enhanced-Grain-Slip-Testing---BS-7976-2-(Slider-55---Barefoot).pdf',
    'https://millboard.widen.net/content/fhmduhmjib/original/Enhanced-Grain-Slip-Testing---BS-7976-2-(Slider-55---Barefoot).pdf',
    'https://millboard.widen.net/content/fhmduhmjib/original/Enhanced-Grain-Slip-Testing---BS-7976-2-(Slider-55---Barefoot).pdf',
    'https://millboard.widen.net/content/fhmduhmjib/original/Enhanced-Grain-Slip-Testing---BS-7976-2-(Slider-55---Barefoot).pdf',
    // Add more Cloudinary URLs as needed
];

const DeckingDownload = () => {
  return (
    <div>
      <FileDownload files={filesData} />
    </div>
  );
};

export default DeckingDownload;
