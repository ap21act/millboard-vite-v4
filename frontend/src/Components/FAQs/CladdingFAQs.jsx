import React from 'react';
import FAQs from './FAQs';
import { claddingFaqs } from '../../Data/FAQs/faqs'; // Import FAQ data

const CladdingFAQs = () => {
  return (
    <div>
      <FAQs faqsFromDb={claddingFaqs} limit={6} />
    </div>
  );
};

export default CladdingFAQs;
