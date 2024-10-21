import React, { useEffect } from 'react';
import Hero from '../../../../Components/Accessories/Hero.jsx';
import Title from '../../../../Components/Accessories/Title.jsx';
import Breadcrumb from '../../../../Components/Components/Common/Breadcrumb.jsx';

const titlesData = [
  {
    title: 'Square Edge',
    subtitle: 'Edging & Fascia 01',
    head:"Flexible, versatile and beautiful.",
    description: 'The Flexible square edging is designed to provide a nice curved edge to a deck whilst providing the crisp contemporary feel.',
    imageUrl: 'https://millboard.widen.net/content/2e70fed9-638b-4134-9f8d-c5c0a13c8814/web/MEUF24V_Square_Edge_Vintage_Oak.jpg',
    buttonLabel: 'Explore Square Edge',
    buttonLink: '/square-edge',
  },
  {
    title: 'Bullnose Edge',
    subtitle: 'Edging & Fascia 02',
    head:"The flexibility of the square edge, with the curve of the bullnose board.",
    description: 'The Flexible Bullnose edging is designed to provide a nice curved edge to a deck and to help resist high wear points with a thicker Lastane® layer.',
    imageUrl: 'https://millboard.widen.net/content/41ac8d99-b947-4df4-b674-b973d79af334/web/MFN360G_Fascia_Golden%20Oak_and_MEBF50G_Flexible%20Bullnose_Golden%20Oak_Dual%201.jpg?',
    buttonLabel: 'Explore Bullnose Edge',
    buttonLink: '/bullnose-edge',
  },
  {
    title: 'bullnose board',
    subtitle: 'Edging & Fascia 03',
    head:"The finishing touch for true distinction.",
    description: 'The Bullnose Board is designed to be used in a wide range of applications, from under-lip lighting to coping for planters and seating, this adaptable profile opens up a wide range of possibilities.',
    imageUrl: 'https://millboard.widen.net/content/8f64508e-4ab3-4345-9961-d63b1ed6bd75/web/MEBB360G_Bullnose%20Board_Golden%20Oak_Project%20Imagery_Planter.jpg',
    buttonLabel: 'Explore Bullnose Board',
    buttonLink: '/bullnose-board',
  },
  {
    title: 'Fascia Board',
    subtitle: 'Edging & Fascia 04',
    head:"The perfect companion for steps and raised decks.",
    description: 'The fascia collection discreetly works with your choice of Millboard decking and edging, ensuring the final look is seamless and the subframe is hidden.',
    imageUrl: 'https://millboard.widen.net/content/5db459f3-ddca-4d65-abc0-87b053677e93/web/MDE176R_Enhanced%20Grain_Burnt%20Cedar_Lifestyle%20step%20detail.png',
    buttonLabel: 'Explore Fascia Board',
    buttonLink: '/fascia-board',
  },
  
];

function EdgingFascia() {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top-left of the window
  }, []);

  return (
    <div>
       <Breadcrumb
        category="decking"
        subCategory="accessories"
        type="edging-and-fascias"
        name={name}
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type="Decking"
        name="Edging & Fascia"
        description="Millboard decking edges and fascia are the perfect finishing touches to transform your deck into a stunning and long-lasting masterpiece. From under-lip lighting to coping for planters and seating, Millboard provides the perfect solution."
      />
      
      {titlesData.map((item, index) => (
        <Title
          key={index}
          title={item.title}
          head={item.head}
          subtitle={item.subtitle}
          description={item.description}
          imageUrl={item.imageUrl}
          buttonLabel={item.buttonLabel}
          buttonLink={item.buttonLink}
          isEven={index % 2 === 0} // Alternating layout automatically
        />
      ))}
    </div>
  );
}

export default EdgingFascia;
