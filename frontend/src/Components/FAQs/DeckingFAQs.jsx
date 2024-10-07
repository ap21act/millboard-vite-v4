import React from 'react';
import FAQs from './FAQs';
import { deckingFaqs } from '../../Data/FAQs/Cladding'; // Import FAQ data

const DeckingFAQs = () => {
  return (
    <div>
      <FAQs faqsFromDb={deckingFaqs} limit={6} />
    </div>
  );
};

export default DeckingFAQs;
