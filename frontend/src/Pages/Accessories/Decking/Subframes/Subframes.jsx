import React from 'react';
import Hero from '../../../../Components/Accessories/Hero.jsx';
import TitleWithImage from '../../../../Components/Accessories/Title.jsx';
import Breadcrumb from '../../../../Components/Components/Common/Breadcrumb.jsx';

const titlesData = [
  {
    title: 'plas-pro',
    subtitle: 'Decking Subframes 01',
    description: 'By using selected graded materials and cleverly engineered processes, Plas-Pro provides key environmental benefits and the assurance of superior quality performance.',
    imageUrl: 'https://millboard.widen.net/content/9250b69a-8eb7-4029-811d-c76d7477945a/web/Case%20Study_Decking,%20Enhanced%20Grain%20Golden%20Oak,%20Dell%20Park%20(1).jpg?crop=yes&w=816&h=612&itok=kgeTKMSQ',
    buttonLabel: 'Explore plas-pro',
    buttonLink: '/plas-pro',
  },

  {
    title: 'Duospan',
    subtitle: 'Decking Subframes 02',
    description: 'DuoSpan® provides the perfect subframe for Millboard decking, as well as a universal support system for other outdoor flooring. ',
    imageUrl: 'https://millboard.widen.net/content/5dc4fcda-bdea-4211-bd7e-954f8df9ec17/web/DuoSpan_Installation%20Image%2017.JPG?crop=yes&w=816&h=612&itok=Q81mdLPO',
    buttonLabel: 'Explore Duospan',
    buttonLink: '/duospan',
  },
  {
    title: 'DuoLift',
    subtitle: 'Decking Subframes 03',
    description: 'With DuoLift®, you can quickly achieve a level support system that won’t rot, split or host algae. ',
    imageUrl: 'https://millboard.widen.net/content/bdc9fba3-7b1c-4cd2-9763-2f2757d7662e/web/PMCP010%20DuoLift_Joist_Cradle_laid%20out.jpg?crop=yes&w=816&h=612&itok=HUMtsZnM',
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
