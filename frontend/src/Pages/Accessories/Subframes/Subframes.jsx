import React from 'react';
import Hero from '../../../Components/Accessories/Hero.jsx';
import TitleWithImage from '../../../Components/Accessories/Title.jsx';
import Breadcrumb from '../../../Components/Components/Common/Breadcrumb.jsx';

const titlesData = [
  {
    title: 'plas-pro',
    subtitle: 'Decking Subframes 01',
    description: 'By using selected graded materials and cleverly engineered processes, Plas-Pro provides key environmental benefits and the assurance of superior quality performance.',
    imageUrl: 'https://millboard.widen.net/content/a33136ef-284a-41e6-ae15-727a1a9c5d42/web/DuraFix%20Screw_Installation%201.tif?crop=yes&w=816&h=612&itok=5rz3fvmz',
    buttonLabel: 'Explore plas-pro',
    buttonLink: '/plas-pro',
  },

  {
    title: 'Duospan',
    subtitle: 'Decking Subframes 02',
    description: 'DuoSpan® provides the perfect subframe for Millboard decking, as well as a universal support system for other outdoor flooring. ',
    imageUrl: 'https://millboard.widen.net/content/a33136ef-284a-41e6-ae15-727a1a9c5d42/web/DuraFix%20Screw_Installation%201.tif?crop=yes&w=816&h=612&itok=5rz3fvmz',
    buttonLabel: 'Explore Duospan',
    buttonLink: '/duospan',
  },
  {
    title: 'DuoLift',
    subtitle: 'Decking Subframes 03',
    description: 'With DuoLift®, you can quickly achieve a level support system that won’t rot, split or host algae. ',
    imageUrl: 'https://millboard.widen.net/content/a33136ef-284a-41e6-ae15-727a1a9c5d42/web/DuraFix%20Screw_Installation%201.tif?crop=yes&w=816&h=612&itok=5rz3fvmz',
    buttonLabel: 'Explore DuoLift',
    buttonLink: '/duolift',
  },
  
];

function SubFrames() {
  return (
    <div>
       <Breadcrumb
        category="decking"
        subCategory="accessories"
        type="Subframes"
        name={name}
        disableClick={{ home: false, category: true, subCategory: true, type: true }}
      />
      <Hero
        type="Decking"
        name="Subframes"
        description="In order to maximise and ensure the resilience & lifespan of our decking, we supply our own range of subframe solutions - Plas-Pro, DuoSpan and DuoLift.

        A decking subframe is the structure that sits beneath your deck, providing the base that your decking boards are attached to. It's the decking equivalent of the foundations of your house, constructed with the right materials, it will be able to support your deck for many years to come."
      />
      
      {titlesData.map((item, index) => (
        <TitleWithImage
          key={index}
          title={item.title}
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

export default SubFrames;
