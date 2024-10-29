import React from 'react';
import Hero from '../../../../Components/Accessories/Hero.jsx';
import TitleWithImage from '../../../../Components/Accessories/Title.jsx';
import Breadcrumb from '../../../../Components/Components/Common/Breadcrumb.jsx';

const titlesData = [
  {
    title: 'fixings',
    subtitle: 'Decking Accessories 01',
    description: 'Our range of fixings are exclusive to Millboard and enable a beautiful finish everytime, especially when used with the handy fixing tool.',
    imageUrl: 'https://millboard.widen.net/content/a33136ef-284a-41e6-ae15-727a1a9c5d42/web/DuraFix%20Screw_Installation%201.tif?crop=yes&w=816&h=612&itok=5rz3fvmz',
    buttonLabel: 'Explore Fixings',
    buttonLink: '/fixings',
  },

  {
    title: 'DuoFix Guide',
    subtitle: 'Decking Accessories 02',
    description: 'Our quick & easy fixing solution for a clean finish. ',
    imageUrl: 'https://millboard.widen.net/content/a7aef5ad-f7ac-474c-b3e6-7d7adcd1e0f5/web/FPFGK_DuoFix_Side%20Fixing%20Guide%20in%20use.jpg',
    buttonLabel: 'Explore DuoFix',
    buttonLink: '/duofix',
  },
  {
    title: 'Touch up coating',
    subtitle: 'Decking Accessories 03',
    description: 'Perfect for blending in cut ends, our touch-up coating is supplied in 500ml tins and in a range of colours to match your choice of Millboard decking. ',
    imageUrl: 'https://millboard.widen.net/content/cdd8cc78-a016-4572-9fb0-e2f07f8d32a4/web/AP500A_Antique_Oak_Touch_Up_Paint_500ml.jpg?crop=yes&w=816&h=612&itok=1cgILDFb',
    buttonLabel: 'Explore Touch up coating',
    buttonLink: '/touch-up-paint',
  },
  
];

function DeckingAccessories() {
  return (
    <div>
       <Breadcrumb
        category="decking"
        subCategory="accessories"
        type="decking-accessories"
        name={name}
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type="Decking"
        name="Accessories"
        description="At Millboard, we understand that the smallest details can make a world of difference. We have meticulously designed a variety of decking accessories, including touch-up paint, screw head drivers, screws, and spacers, to make installing your deck and the final finish as effortless and perfect as possible."
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

export default DeckingAccessories;
