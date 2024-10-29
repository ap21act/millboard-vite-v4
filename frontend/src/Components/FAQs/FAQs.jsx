import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FAQs = ({ faqsFromDb, isMainPage, limit }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedFaqs, setSelectedFaqs] = useState([]);

  // Handle accordion toggle
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Static last FAQ for non-main pages
  const staticLastFaq = {
    question: 'More frequently asked questions',
    answer: (
      <>
        From what to expect when you first unpack your Millboard, to aftercare tips and answers to all of your most common questions.{' '}
        <Link to="/faqs" className="font-extrabold text-red hover:text-primary">
          Visit our FAQs Page
        </Link>{' '}
        now for all of your Millboard related queries.
      </>
    ),
  };

  // Utility function to shuffle and pick random FAQs
  const getRandomFaqs = (faqs, count) => {
    const shuffled = [...faqs].sort(() => 0.5 - Math.random()); // Create a shuffled copy of the array
    return shuffled.slice(0, count);
  };

  // Update FAQs on component mount or when props change
  useEffect(() => {
    if (isMainPage) {
      setSelectedFaqs(faqsFromDb);
    } else {
      const randomFaqs = getRandomFaqs(faqsFromDb, limit);
      setSelectedFaqs([...randomFaqs, staticLastFaq]);
    }
  }, [faqsFromDb, isMainPage, limit]);

  return (
    <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-4xl font-F37-light text-center uppercase font-bold text-black-background leading-[3.25rem]">
          Frequently asked questions
        </h2>
      </div>
      <div>
        {selectedFaqs.map((faq, index) => (
          <div
            key={index}
            className={`accordion border border-solid border-black-background p-4 rounded-xl transition duration-500 mb-8 lg:p-4 ${
              openIndex === index ? 'bg-white-nav border-green' : ''
            }`}
          >
            <button
              className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-black-background w-full transition duration-500 hover:text-green"
              onClick={() => handleToggle(index)}
            >
              <h5>{faq.question}</h5>
              <svg
                className={`w-6 h-6 text-primary transition duration-500 ${openIndex === index ? 'hidden' : 'block'}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 12H18M12 18V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg
                className={`w-6 h-6 text-black-background transition duration-500 ${openIndex === index ? 'block' : 'hidden'}`}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 12H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div
              className={`accordion-content w-full overflow-hidden pr-4 transition-max-height duration-500 ease-in-out ${
                openIndex === index ? 'max-h-64' : 'max-h-0'
              }`}
            >
              <div className="text-base text-primary font-normal leading-6 pt-3">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

FAQs.propTypes = {
  faqsFromDb: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.node.isRequired, // Allow JSX in `answer`
    })
  ).isRequired,
  isMainPage: PropTypes.bool,
  limit: PropTypes.number,
};

FAQs.defaultProps = {
  isMainPage: false,
  limit: 4,
};

export default FAQs;
