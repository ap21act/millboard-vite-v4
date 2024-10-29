import React from 'react';
import TitleWithDetails from '../../../../Components/Accessories/TitleWithDetails';
import Hero from '../../../../Components/Accessories/Hero';
import Breadcrumb from '../../../../Components/Components/Common/Breadcrumb';
import FileDownload from '../../../../Components/Downloads/FileDownload';
import HeroBanner from '../../../../Components/Hero/HeroBanner';
import LostHeadFixing from '../../../../Components/Homepage/LostHeadFixing';

const titlesData = [
  {
    subtitle: 'Fixing 01',
    title: 'Durafix®',
    description: "Our decking system is complemented by our unique Durafix screws. These hidden fixings make installing Millboard straightforward. The Durafix fixings can be used in two ways: through the face of the boards, or through the side of the boards using the DuoFix Side-Fixing Guide. DuoFix provides a quick and easy fixing solution, leaving a clean, hidden fixing finish. When fixing through the face of the boards there’s no need to pre-drill, countersink or use clip fixings, simply fix the boards in accordance with our installation guide. Once the screws have been applied, the innovative Lastane® coating on the board flexes back over the screw-heads, leaving a minimal witness mark. Made from A2 stainless steel, the screws have a self-cutting tip, six-point torx head, and are waxed for ease of use. Each box of Durafix® fixings also includes a T15 hexshank drill bit. You will need around 22 fixings for each length of Millboard decking for residential applications and 26 fixings for commercial applications. To find out more, see our installation guides.   Our Durafix® fixings are virtually hidden beneath the unique Lastane® surface on our composite decking boards, allowing you to obtain a near flawless finish in your projects that wouldn't be possible with other materials.",

    subHead: 'Product Code: FT60P250',
    imageUrl: 'https://millboard.widen.net/content/3d90090a-7286-4946-8f5e-cd089706be10/web/FT35P100_DuraFix%2035mm_FT45P250_DuraFix%2045mm_FT60P250_DuraFix%2060mm%20Screws.jpg',
  },
  {
    subtitle: 'Fixing 02',
    title: 'Subframe hexhead screw',
    description: "Our subframe screw fixings make installing Millboard Plas-Pro subframes simple. With just a pre-drilled hole required, these heavy-duty coated hex flange head screws have a type 17 ‘gash’ point to reduce drive torque. They are also suitable for timber subframe systems. Please note screw coating colour may vary.",

    subHead: 'Product Code: FH90P050',
    imageUrl: 'https://millboard.widen.net/content/e015da6d-b47c-4df7-8a11-d776ffe1bb9e/web/FH90P050_Subframe_Hexhead_Screw_6.3x90mm.jpg',
  },
  {
    subtitle: 'Fixing 03',
    title: 'DuoFix Spare Driver Bit Kit',
    description: (
      <p>
        When using the DuoFix Side-Fixing Guide to align Durafix® screws into the side of our boards, the DuoFix Driver Bit is essential. As well as the complimentary DuoFix Driver Bit that comes packaged with the DuoFix Side-Fixing Guide, the DuoFix Spare Driver Bit Kit is now available to purchase.
        <br /><br />
        Each kit contains 2 Driver Bits, 4 Nylon Washers, and 4 Stainless Steel Washers.
        <br />
        <br />
        Please note that driver bits wear over time, and we expect each of our driver bits to last up to 1000 uses.
      </p>
    ),
    subHead: 'Product Code: FH90P050',
    imageUrl: 'https://millboard.widen.net/content/144f746e-b817-4550-9309-da8e31c106f9/web/FPFGDB2_DuoFix_Spare_Driver_Bit_Pack.jpg',
  },
  
  {
    subtitle: 'Fixing 04',
    title: 'Spring-Grip 8mm Hex-head Driver Tool',
    description: "The Spring-Grip 8mm Hex-head Driver Tool has been designed to work with the fixings supplied in the DuoSpan bracket boxes. The ‘Spring-Grip’ function aids a faster install by gripping the head of the special non-magnetic fixing, holding the fixing in the driver bit during the install.",

    subHead: 'Product Code:  FHD0855',
    imageUrl: 'https://millboard.widen.net/content/61dc6e3d-777b-43a3-a6d6-2e599124a95c/web/FHD0855_Spring-Grip_8mm_Hex-head_Driver_Tool.jpg',
  },
  {
    subtitle: 'Fixing 05',
    title: 'Millboard Multi-Spacer 3-6mm',
    description: "The robust Millboard Multi-spacer is specifically designed to enable the fixing of Millboard decking both quicker and more accurately. At the same time, ‘The Millboard Multi-spacer’ allows accurate spacing of any of the four most popular board spacings, using just the one spacer Tool.",

    subHead: 'Product Code: FP36P010',
    imageUrl: 'https://millboard.widen.net/content/b142b3d4-681e-4f78-904b-04869a816b2b/web/FP36P010_Millboard_Multi-Spacer_3-6mm.jpg',
  },
  
 
  
];
const data = [
    { product: '35mm Durafix', use: 'Installing fascia boards onto Plas-Pro or timber' },
    { product: '45mm Durafix', use: 'Installing decking boards onto Plas-Pro or DuoSpan' },
    { product: '60mm Durafix', use: 'Installing decking boards onto wood' },
  ];


function Fixings() {
  return (
    <div>
        <Breadcrumb
        category="decking"
        subCategory="accessories"
        type="decking-accessories"
        name="Fixings"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type="Decking"
        name="Fixings®"
        description="
        Our range of fixings are exclusive to MIllboard and enable a beautiful finish everytime, espeicially when used with the handy fixing tool."
       
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
      <div className=" p-6">
      <table className="w-full max-w-md mx-auto border border-primary">
        <thead>
          <tr>
            <th className="border border-primary px-4 py-4 text-center font-semibold">Product</th>
            <th className="border border-primary px-4 py-4 text-center font-semibold">Use</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border border-primary px-5 py-3 text-center">{row.product}</td>
              <td className="border border-primary px-5 py-3 text-center">{row.use}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <LostHeadFixing />
      
    </div>
  );
}

export default Fixings;
