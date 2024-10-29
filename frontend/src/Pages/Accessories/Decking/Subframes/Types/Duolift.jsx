import React from 'react';
import TitleWithDetails from '../../../../../Components/Accessories/TitleWithDetails';
import Hero from '../../../../../Components/Accessories/Hero';
import Breadcrumb from '../../../../../Components/Components/Common/Breadcrumb';
import FileDownload from '../../../../../Components/Downloads/FileDownload';
import HeroBanner from '../../../../../Components/Hero/HeroBanner';

const titlesData = [
  {
    subtitle: 'Subframes 01',
    title: 'DuoLift Joist Cradle 15-60mm',
    description: 'Providing an exceptional height range of 45mm, from 15-60mm, the DuoLift® Joist Cradle enables precision height adjustment with 5mm markings on the side and each quarter turn of the adjustment ring representing a 1mm rise or fall. The Joist Cradle allows the installer to adjust the height whilst the joist is in place, locking tabs provide a secure finish once correct height has been determined.',
    head: 'Dimensions: 15-60mm',
    subHead: 'Product Code: PMCP010',
    imageUrl: 'https://millboard.widen.net/content/9b842e9c-57e1-4af0-9c87-c181c7af2fe7/web/PMCP010_DuoLift_Joist%20Cradle%2015-60mm.tif',
  },
  {
    subtitle: 'Subframes 02',
    title: 'DuoLift Self-Levelling Joint 20mm',
    description: 'Adding 20mm to the height of the supports, the DuoLift® Self-levelling Joint provides easy and effective levelling of a subframe up to 5º, ready for decking installation. Suitable for standing directly onto a solid substrate, or for providing a joint for a higher support.',
    head: 'Dimensions: 20mm',
    subHead: 'Product Code: PMLP010',
    imageUrl: 'https://millboard.widen.net/content/53ac17c5-809d-4204-b27b-909bd3f60e3c/web/PMLP010_DuoSpan_Self%20levelling%20joint.tif',
  },
  {
    subtitle: 'Subframes 03',
    title: 'DuoLift Riser 45mm',
    description: 'The Riser component of the DuoLift® system increases the height in increments of 45mm. It is capable of sitting directly onto a solid substrate under the Joist Cradle and Self-Levelling Joint or forming part of a higher stack with a foot beneath.',
    head: 'Dimensions: 45mm',
    subHead: 'Product Code: PMRP010',
    imageUrl: 'https://millboard.widen.net/content/18c1c3d1-bd4c-4400-89a9-668c85c45a13/web/PMRP010_DuoLift%20Riser%2045mm.tif',
  },
  {
    subtitle: 'Subframes 04',
    title: 'DuoLift Foot 45mm',
    description: 'The DuoLift® Foot provides a very stable footing for more elevated subframes, raising the height by 45mm and spreading the load further across the substrate, due to the 220mm base supporting a maximum combined height of 350mm.',
    head: 'Dimensions: 45mm',
    subHead: 'Product Code: PMFP010',
    imageUrl: 'https://millboard.widen.net/content/517efe36-30bd-419d-b999-b7ce3a586bbb/web/PMFP010_DuoLift_Feet%2045mm.tif',
  },
  {
    subtitle: 'Subframes 05',
    title: 'DuoLift Acoustic Separation Pad 3mm',
    description: 'Agglomerated cork and recycled rubber pads offer a layer of protection between joist supports and membranes, as well as providing an acoustic benefit.',
    head: 'Dimensions: 3mm',
    subHead: 'Product Code: PMAP010',
    imageUrl: 'https://millboard.widen.net/content/6ff89c70-bfbf-485e-afdd-18da59552d94/web/PMAP010_DuoLift_Acoustic_Separation_Pad.jpg?crop=yes&w=816&h=612&itok=YBeqFgza',
  },
 
  
];
const filesData = [
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
  ];

function Duolift() {
  return (
    <div>
        <Breadcrumb
        category="decking"
        subCategory="accessories"
        type="subframes"
        name="Duolift"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type="Subframes"
        name="DuoLift® Pedestal"
        description="
        The ultimate support system for your frame. The DuoLift® joist pedestal system was designed to make installation significantly easier and to ensure successful outcomes."
        hasBorder={false}
      />
     <p className=" text-base sm:text-lg md:text-lg bg-white-nav border-b-white shadow-md lg:text-lg text-center font-F37-light px-4 sm:px-8 md:px-16 lg:px-48 py-10 md:py-24 lg:py-20">
     Providing substantial height flexibility within four stackable components, DuoLift® removes the common problem of having to order varying height pedestals for a single area. Height-adjustable from 15mm, DuoLift™ makes accurate height-setting easy, and is self-levelling from 35mm upwards.<br/><br/>With DuoLift®, you can quickly achieve a level support system that won’t rot, split or host algae. DuoLift®’s range of feet, pedestals, risers and cradles are even suitable for use in damp environments.
     </p>
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

export default Duolift;
