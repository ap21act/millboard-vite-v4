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
    title: 'Flexible connectivity',
    description: 'Multiple bracket types for all types of joints, including Flexible Brackets for non-standard angles. ',
    imageUrl: 'https://millboard.widen.net/content/edf155d6-b26c-4954-aedc-7ebcdcd44684/web/K99FP010%20DuoSpan%2099%20Flexible%20Bracket%203.tif?crop=yes&w=816&h=612&itok=jruQ2ra0',
  },
  {
    title: 'Flexible connectivity',
    description: 'Multiple bracket types for all types of joints, including Flexible Brackets for non-standard angles. ',
    imageUrl: 'https://millboard.widen.net/content/edf155d6-b26c-4954-aedc-7ebcdcd44684/web/K99FP010%20DuoSpan%2099%20Flexible%20Bracket%203.tif?crop=yes&w=816&h=612&itok=jruQ2ra0',
  },
  {
    title: 'Flexible connectivity',
    description: 'Multiple bracket types for all types of joints, including Flexible Brackets for non-standard angles. ',
    imageUrl: 'https://millboard.widen.net/content/edf155d6-b26c-4954-aedc-7ebcdcd44684/web/K99FP010%20DuoSpan%2099%20Flexible%20Bracket%203.tif?crop=yes&w=816&h=612&itok=jruQ2ra0',
  },
  {
    title: 'Flexible connectivity',
    description: 'Multiple bracket types for all types of joints, including Flexible Brackets for non-standard angles. ',
    imageUrl: 'https://millboard.widen.net/content/edf155d6-b26c-4954-aedc-7ebcdcd44684/web/K99FP010%20DuoSpan%2099%20Flexible%20Bracket%203.tif?crop=yes&w=816&h=612&itok=jruQ2ra0',
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
        name="plas-pro"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type=""
        name="DuoSpan® Subframes"
        description="
        DuoSpan® combines the strength of aluminium with the design flexibility of recycled plastic. This achieves a system that provides exceptional ease of installation, enormous strength and durability, and the scope to construct stunning decks and structures that would be impossible with conventional subframes."
      />
    <HeroBanner
          videoSrc="https://millboard.widen.net/content/ntregbnxny/mp4/MDE126A_Enhanced-Grain-SB_Antique-Oak_Herringbone_Video.mp4?quality=hd"
          altText="Video of outdoor decking area"
          className="w-full h-svh" // Responsive sizing with Tailwind
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
