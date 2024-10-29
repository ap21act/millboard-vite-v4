import React from 'react';
import TitleWithDetails from '../../../../../Components/Accessories/TitleWithDetails';
import Hero from '../../../../../Components/Accessories/Hero';
import Breadcrumb from '../../../../../Components/Components/Common/Breadcrumb';
import FileDownload from '../../../../../Components/Downloads/FileDownload';
import HeroBanner from '../../../../../Components/Hero/HeroBanner';

const titlesData = [
  {
    title: 'Flexible connectivity',
    description: 'Multiple bracket types for all types of joints, including Flexible Brackets for non-standard angles. ',
    imageUrl: 'https://millboard.widen.net/content/edf155d6-b26c-4954-aedc-7ebcdcd44684/web/K99FP010%20DuoSpan%2099%20Flexible%20Bracket%203.tif',
  },
  {
    title: 'Slot-and-screw assembly',
    description: 'Screw-locating grooves and self-drilling screws ensure accurate alignment and a fast fix that’s right every time. ',
    imageUrl: 'https://millboard.widen.net/content/82428a89-1eab-4a03-b72c-66688a0a59df/web/K48CP030_DuoSpan_Hold%20Down%20Clip%20installation.tif',
  },
  {
    title: 'Unique curved constructions',
    description: 'The combination of rigid DuoSpan® with flexible Plas-Pro enables the construction of stunning curved formations. ',
    imageUrl: 'https://millboard.widen.net/content/0c6c7add-20be-4d97-9ffe-87fbd079de85/web/DuoSpan%20Framework%20Image_Large%20Joist%20Structure.tif',
  },
  {
    title: 'Exceptional spans',
    description: 'The DuoSpan® 99mm Joist provides an exceptional 1800mm span in residential applications, reducing posts or joist supports required.',
    imageUrl: 'https://millboard.widen.net/content/ffbe248d-6062-4e49-9d88-080a181570e2/web/DuoSpan%20Framework%20Image_Large%20subframe%20build%202.png',
  },
  {
    title: 'Corrosion-resistant',
    description: 'Galvanic corrosion between different metals is minimised with our cathodic barrier fixings',
    imageUrl: 'https://millboard.widen.net/content/da888b8d-34aa-4a2e-a7ff-d7a1af248c14/web/K99FP010%20DuoSpan%2099%20Flexible%20Bracket.tif',
  },
  {
    title: 'Simple, stable fixing',
    description: 'Decking and cladding can be easily and securely screwed directly into the DuoSpan® subframe at almost any angle using Durafix 45mm screws.',
    imageUrl: 'https://millboard.widen.net/content/589e9610-e6da-4dad-ae18-fa7a88625b4c/web/FT45P250_DuraFix_4.5x45mm.jpg',
  },
  
];
const filesData = [
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
  ];

function Duospan() {
  return (
    <div>
        <Breadcrumb
        category="decking"
        subCategory="accessories"
        type="subframes"
        name="duospan"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type=""
        name="DuoSpan® Subframes"
        description="
        DuoSpan® combines the strength of aluminium with the design flexibility of recycled plastic. This achieves a system that provides exceptional ease of installation, enormous strength and durability, and the scope to construct stunning decks and structures that would be impossible with conventional subframes."
        hasBorder={false}
      />
    <HeroBanner
          videoSrc="https://millboard.widen.net/content/ntregbnxny/mp4/MDE126A_Enhanced-Grain-SB_Antique-Oak_Herringbone_Video.mp4?quality=hd"
          altText="Video of outdoor decking area"
          className="w-full h-screen mt-8" // Responsive sizing with Tailwind
        />
      {titlesData.map((item, index) => (
        <TitleWithDetails
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          head={item.head}
          subHead={item.subHead}  // Passing the subHead prop
          description={item.description}
          imageUrl={item.imageUrl}
          isEven={index % 2 === 0}  // Alternating layout automatically
        />
      ))}
      <FileDownload files={filesData} />
    </div>
  );
}

export default Duospan;
