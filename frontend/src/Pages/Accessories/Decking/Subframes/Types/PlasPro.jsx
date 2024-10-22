import React from 'react';
import TitleWithDetails from '../../../../../Components/Accessories/TitleWithDetails';
import Hero from '../../../../../Components/Accessories/Hero';
import Breadcrumb from '../../../../../Components/Components/Common/Breadcrumb';
import FileDownload from '../../../../../Components/Downloads/FileDownload';

const titlesData = [
  {
    title: 'Plas-Pro 125 x 50mm Joist/Bearer',
    subtitle: 'Subframes 01',
    head: 'Dimensions: 125mm x 50mm x 3000mm',   
    subHead: 'Product Code: P1205B300.',
    description: 'Designed to be used in conjunction with Plas-Pro 100 x 100mm Posts when installed over a soil/earth base. ',
    imageUrl: 'https://www.millboard.com/sites/default/files/styles/text_and_image_card_4_3_816x612_/public/2024-03/P1205B300_Plas-Pro_125_x_50mm_Joist.jpg',
  },
  {
    title: 'Plas-Pro 50 x 50mm Joist',
    subtitle: 'Subframes 02',
    head: 'Dimensions: 50mm x 50mm x 2400mm',
    subHead: 'Product Code: P0505B240',
    description: 'Designed to be used in conjunction with the DuoLift system when installed over a solid/stable substrate.',
    imageUrl: 'https://millboard.widen.net/content/a7f75f80-acb8-468b-93db-9c5eac532a6f/web/P0505B240_Plas-Pro_50_x_50mm_Joist.jpg',
  },
  {
    title: 'Plas-Pro 60 x 30mm Joist',
    subtitle: 'Subframes 03',
    head: 'Dimensions: 60mm x 30mm x 2800mm',
    subHead: 'Product Code: P0603H280',
    description: 'Designed to be used in low-level areas with a solid/stable base. Not to be raised with cradles.',
    imageUrl: 'https://millboard.widen.net/content/b740848f-73c8-40fc-848e-7350db4e7fb8/web/P0603H280_Plas-Pro_60_x_30mm_Joist.jpg',
  },
  {
    title: 'Plas-Pro 100 x 100mm Post',
    subtitle: 'Subframes 04',
    head: 'Dimensions: 100mm x 100mm x 3000mm',
    subHead: 'Product Code: P1010B300',
    description: 'Designed to be used in conjunction with Plas-Pro 125 x 50mm Joist/Bearers when installed over a soil/earth base.',
    imageUrl: 'https://millboard.widen.net/content/8f2e6951-aa7b-4f80-9a8a-89ff63c4c687/web/P1010B300_Plas-Pro_100_x_100mm_Post.jpg',
  },
  // More entries...
];
const filesData = [
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
  ];

function PlasPro() {
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
        type="Subframes"
        name="Plas-Pro"
        description="The foundation of your deck is critical to its long-term performance, a well constructed subframe comprised of high quality materials, set correctly in an appropriate foundation."
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

export default PlasPro;
