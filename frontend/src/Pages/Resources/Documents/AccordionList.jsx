import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CategoryAccordion from './CategoryAccordion';

const AccordionList = ({ data }) => {
  // Track the currently open accordion by ID
  const [openAccordionId, setOpenAccordionId] = useState(null);

  // Handle toggling the accordion
  const handleToggle = (id) => {
    // If the clicked accordion is already open, close it
    if (openAccordionId === id) {
      setOpenAccordionId(null);
    } else {
      // Otherwise, open the clicked accordion
      setOpenAccordionId(id);
    }
  };

  // Open the accordion based on URL hash
  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the # symbol
    if (hash) {
      setOpenAccordionId(hash);
    }
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} id={item.id} className="mb-6">
          <CategoryAccordion
            title={item.title}
            filesUrls={item.filesUrls}
            isOpen={openAccordionId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
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
