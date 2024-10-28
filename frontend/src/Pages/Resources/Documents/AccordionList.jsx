import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom'; // Import useLocation
import PDFDownloadCard from './PDFDownloadCard';

const AccordionList = ({ data }) => {
  // Track the currently open accordion
  const [openAccordion, setOpenAccordion] = useState(null);

  // React Router hook to get the current location
  const location = useLocation();

  // Function to handle toggling an accordion
  const handleToggle = (id) => {
    // If clicking the same one, close it, otherwise open the new one
    setOpenAccordion((prevState) => (prevState === id ? null : id));

    // Update the URL hash to reflect the open accordion
    if (prevState !== id) {
      window.history.pushState(null, '', `#${id}`);
    }
  };

  // Effect to handle hash changes without a page refresh
  useEffect(() => {
    const currentHash = location.hash.substring(1); // Remove the '#' from hash
    if (currentHash) {
      setOpenAccordion(currentHash);
    } else {
      setOpenAccordion(null);
    }
  }, [location.hash]); 

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} id={item.id} className="mb-6 ">
          <h2
            onClick={() => handleToggle(item.id)}
            className="text-2xl font-semibold mb-2 cursor-pointer"
          >
            {item.title}
            {/* Arrow Icon for Open/Close */}
            <span className={`ml-2 transform ${openAccordion === item.id ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 inline-block"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </h2>

          {/* Conditionally render PDF cards if accordion is open */}
          {openAccordion === item.id && <PDFDownloadCard files={item.filesUrls} />}
        </div>
      ))}
    </div>
  );
};

AccordionList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      filesUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default AccordionList;
