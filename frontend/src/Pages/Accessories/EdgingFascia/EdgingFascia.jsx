import React from 'react';
import Hero from '../../../Components/Accessories/Hero.jsx';
import TitleWithImage from '../../../Components/Accessories/Title.jsx';
import Breadcrumb from '../../../Components/Components/Common/Breadcrumb.jsx';

const titlesData = [
  {
    title: 'Fixings',
    subtitle: 'Decking Accessories',
    description: 'Our range of fixings are exclusive to Millboard and enable a beautiful finish every time, especially when used with the handy fixing tool.',
    imageUrl: 'https://millboard.widen.net/content/a33136ef-284a-41e6-ae15-727a1a9c5d42/web/DuraFix%20Screw_Installation%201.tif?crop=yes&w=816&h=612&itok=5rz3fvmz',
    buttonLabel: 'Explore Fixings',
    buttonLink: '/fixings',
  },
  {
    title: 'Duofix Guide',
    subtitle: 'Decking Accessories',
    description: 'Our quick & easy fixing solution for a clean finish.',
    imageUrl: 'https://millboard.widen.net/content/a33136ef-284a-41e6-ae15-727a1a9c5d42/web/DuraFix%20Screw_Installation%201.tif?crop=yes&w=816&h=612&itok=5rz3fvmz',
    buttonLabel: 'Explore Duofix',
    buttonLink: '/duofix',
  },
  {
    title: 'Touch Up Coating',
    subtitle: 'Decking Accessories',
    description: 'Perfect for blending in cut ends, our touch-up coating is supplied in 500ml tins and in a range of colours to match your choice of Millboard decking.',
    imageUrl: 'https://millboard.widen.net/content/a33136ef-284a-41e6-ae15-727a1a9c5d42/web/DuraFix%20Screw_Installation%201.tif?crop=yes&w=816&h=612&itok=5rz3fvmz',
    buttonLabel: 'Explore Touch Up Coating',
    buttonLink: '/touch-up-paint',
  }
];

function EdgingFascia() {
  return (
    <div>
       <Breadcrumb
        category="decking"
        subCategory="accessories"
        type="Edging & Fascia"
        name={name}
        disableClick={{ home: false, category: true, subCategory: true, type: true }}
      />
      <Hero
        type="Decking"
        name="Edging & Fascia"
        description="Millboard decking edges and fascia are the perfect finishing touches to transform your deck into a stunning and long-lasting masterpiece. From under-lip lighting to coping for planters and seating, Millboard provides the perfect solution."
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

export default EdgingFascia;
