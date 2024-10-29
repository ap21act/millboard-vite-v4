import React from 'react';
import TitleWithDetails from '../../../../Components/Accessories/TitleWithDetails';
import Hero from '../../../../Components/Accessories/Hero';
import Breadcrumb from '../../../../Components/Components/Common/Breadcrumb';


const titlesData = [
  {
    subtitle: 'DuoFix Side-Fixing Guide',
    title: 'DuoFix Side-Fixing Guide',
    description: "The DuoFix Side-Fixing Guide allows the boards to be fixed through the side, resulting in a hidden fixing finish. The Guide lays over the decking board and is suitable for board widths of 145-200mm, making it compatible with the Enhanced Grain and Weathered Oak decking boards, and even some softwood decking boards. When used in combination with Durafix® screws and the complimentary driver bit, the Guide aligns the screws perfectly and controls the fixing depth, too. The DuoFix Side-Fixing Guide provides a 6mm spacing between boards.",

    subHead: 'Product Code:  FPFGK',
    imageUrl: 'https://millboard.widen.net/content/a7aef5ad-f7ac-474c-b3e6-7d7adcd1e0f5/web/FPFGK_DuoFix_Side%20Fixing%20Guide%20in%20use.jpg?crop=yes&w=816&h=612&itok=Jfz6rAfw',
  },

  {
    subtitle: 'DuoFix Side-Fixing Guide',
    title: 'DuoFix Spare Driver Bit Kit',
    description: (
      <p>
        When using the DuoFix Side-Fixing Guide to align Durafix® screws into the side of our boards, the DuoFix Driver Bit is essential. As well as the complimentary DuoFix Driver Bit that comes packaged with the DuoFix Side-Fixing Guide the DuoFix Spare Driver Bit Kit is now available to purchase.
        <br /><br />
        Each kit contains 2 Driver Bits, 4 Nylon Washers and 4 Stainless Steel Washers.
        <br />
        <br />
        Please note that driver bits wear over time, and we expect each of our driver bits to last up to 1000 uses.
      </p>
    ),
    subHead: 'Product Code: FPFGDB2',
    imageUrl: 'https://millboard.widen.net/content/144f746e-b817-4550-9309-da8e31c106f9/web/FPFGDB2_DuoFix_Spare_Driver_Bit_Pack.jpg?crop=yes&w=816&h=612&itok=FTDuSdnb',
  },

];



function Duofix() {
  return (
    <div>
        <Breadcrumb
        category="decking"
        subCategory="accessories"
        type="decking-accessories"
        name="duofix"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type="Decking"
        name="DuoFix Side-Fixing Guide"
        description="
        Our quick and easy fixing solution for a clean finish."
       
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
      
    
      
    </div>
  );
}

export default Duofix;
