import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { deckingFaqs, claddingFaqs, subframeFaqs, safetyFaqs, edgingFasciaFaqs } from '../../Data/FAQs/faqs';

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div
    className={`accordion border border-solid border-black-background p-4 rounded-xl transition duration-500 mb-8 ${
      isOpen ? 'bg-white-nav border-green' : ''
    }`}
  >
    <button
      className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-black-background w-full transition duration-500 hover:text-green"
      onClick={onToggle}
    >
      <h5>{faq.question}</h5>
      <svg
        className={`w-6 h-6 text-primary transition duration-500 ${isOpen ? 'hidden' : 'block'}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 12H18M12 18V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg
        className={`w-6 h-6 text-black-background transition duration-500 ${isOpen ? 'block' : 'hidden'}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 12H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    <div
      className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${
        isOpen ? 'max-h-64' : 'max-h-0'
      }`}
    >
      <div className="text-base text-primary font-normal leading-6 pt-3">{faq.answer}</div>
    </div>
  </div>
);

const FAQSection = ({ title, faqs, sectionId }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id={sectionId} className="mb-16">
      <h3 className="text-3xl uppercase font-F37-light mb-8">{title}</h3>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} isOpen={openIndex === index} onToggle={() => handleToggle(index)} />
      ))}
    </div>
  );
};

const AllFAQsPage = () => {
  const location = useLocation();

  // Scroll to the relevant section if a hash is present
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', ''); // remove the `#`
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-F37-light text-center uppercase font-bold text-black-background leading-[3.25rem] mb-16">
        Frequently Asked Questions
      </h2>



      {/* FAQ Sections */}
      <FAQSection title="Millboard Decking" faqs={deckingFaqs} sectionId="decking" />
      <FAQSection title="Envello Cladding" faqs={claddingFaqs} sectionId="cladding" />
      <FAQSection title="Subframe" faqs={subframeFaqs} sectionId="subframe" />
      <FAQSection title="Safety" faqs={safetyFaqs} sectionId="safety" />
      <FAQSection title="Edging & Fascia" faqs={edgingFasciaFaqs} sectionId="edging-fascia" />
    </section>
  );
};

export default AllFAQsPage;
