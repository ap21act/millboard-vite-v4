import React, { useState } from 'react';
import HoverPopup from './HoverPopup';
import CardComponent from './CardComponent';

function ProjectType() {
  const [selectedCard, setSelectedCard] = useState(null); // State to track which card is selected

  // Data for the cards
  const cards = [
    {
      id: 1,
      image: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator/personal-residential.jpg',
      title: 'My Home',
      description: 'Create your dream outdoor space with a new terrace for socializing, relaxation and dining.',
    },
    {
      id: 2,
      image: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator/client-residential.jpg',
      title: "Customer's Home",
      description: 'Give them a beautiful installation that requires little maintenance and can withstand the test of time.',
    },
    {
      id: 3,
      image: 'https://s3.eu-west-1.amazonaws.com/millboard/Decking-Calculator/commercial.jpg',
      title: 'Commercial',
      description: 'Millboard looks exceptional, even when used in commercial or public space applications.',
    },
  ];

  return (
    <div className="py-24">
      {/* Project Type Heading */}
      <div className="flex items-center justify-center gap-16">
        <h1 className="text-center font-F37-light text-4xl">Project Type
                </h1>
        <span>
          <HoverPopup text="Select what your decking will be for –

your home, your client’s home or a commercial build." />
        </span>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center gap-4 mt-6">
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
            isSelected={selectedCard === card.id} // Check if the card is the selected one
            onClick={() => setSelectedCard(card.id)} // Set this card as the selected one
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectType;
