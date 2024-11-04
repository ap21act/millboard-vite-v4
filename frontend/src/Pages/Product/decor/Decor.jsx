import React from 'react';
import Breadcrumb from '../../../Components/Components/Common/Breadcrumb';
import Hero from '../../../Components/Accessories/Hero';
import HeroImages from '../../../Components/Hero/HeroImages';
import ProductFeatures from '../../../Components/Components/Common/ProductFeatures';
import { featuresData } from '../../../Data/Features/Cladding';
import { extractNameFromUrl } from '../../../Utils';
import FileDownload from '../../../Components/Downloads/FileDownload';

function Decor() {
  const heroData = {
    name: 'ENVELLO DÉCOR',
    description: 'These metallic accents are designed to perfectly complement our Shadow Line+ Cladding systems, adding a touch of luxury and sophistication to your projects.',
  };

  const imagesData = {
    imageLeft: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730198951/products/cladding/collection/decor/hero/MCL360R_Shadow_Line_Plus_Burnt_Cedar_GLDC32G_Decor_Curve_32mm_Gold_Lifestyle_Cameo_1.webp',
    imageRight: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_sharpen/v1730198953/products/cladding/collection/decor/hero/GLDC16G_Decor_Curve_16mm_Gold_End.webp',
  };

  const paragraphText = (
    <>
      Millboard’s Envello Décor range is the market’s first premium, purpose-made cladding trim that will add both{' '}
      <span className="text-green-dark">decorative uniqueness </span> and{' '}
      <span className="text-green-dark">structural durability </span> to any outdoor living space. 
    </>
  );

  // Define availableColours array here or import it
  const availableColours = [
    // Décor Shutter with Burnt Cedar
    { type: 'Décor Shutter', name: 'Gold - Burnt Cedar', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/c_pad,ar_16:9/v1730199178/products/cladding/collection/decor/colours/GLDS16G_Decor_Shutter_16mm_Gold_GLDS32G_Decor_Shutter_32mm_Gold_MCL360R_Shadow_Line_Plus_Burnt_Cedar_Overhead.jpg' },
    { type: 'Décor Shutter', name: 'Carbon - Burnt Cedar', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/c_pad,ar_16:9/v1730199189/products/cladding/collection/decor/colours/GLDS16C_Decor_Shutter_16mm_Carbon_GLDS32C_Decor_Shutter_32mm_Carbon_MCL360R_Shadow_Line_Plus_Burnt_Cedar_Overhead.jpg' },
    { type: 'Décor Shutter', name: 'Bronze - Burnt Cedar', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199181/products/cladding/collection/decor/colours/GLDS16B_Decor_Shutter_16mm_Bronze_GLDS32B_Decor_Shutter_32mm_Bronze_MCL360R_Shadow_Line_Plus_Burnt_Cedar_Overhead.jpg' },
    
    // Décor Shutter with Limed Oak
    { type: 'Décor Shutter', name: 'Gold - Limed Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199115/products/cladding/collection/decor/colours/GLDS16G_Decor_Shutter_16mm_Gold_GLDS32G_Decor_Shutter_32mm_Gold_MCL360L_Shadow_Line_Plus_Limed_Oak_Overhead.jpg' },
    { type: 'Décor Shutter', name: 'Carbon - Limed Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199117/products/cladding/collection/decor/colours/GLDS16C_Decor_Shutter_16mm_Carbon_GLDS32C_Decor_Shutter_32mm_Carbon_MCL360L_Shadow_Line_Plus_Limed_Oak_Overhead.jpg' },
    { type: 'Décor Shutter', name: 'Bronze - Limed Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199120/products/cladding/collection/decor/colours/GLDS16B_Decor_Shutter_16mm_Bronze_GLDS32B_Decor_Shutter_32mm_Bronze_MCL360L_Shadow_Line_Plus_Limed_Oak_Overhead.jpg' },
  
    // Décor Shutter with Golden Oak
    { type: 'Décor Shutter', name: 'Gold - Golden Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199131/products/cladding/collection/decor/colours/GLDS16G_Decor_Shutter_16mm_Gold_GLDS32G_Decor_Shutter_32mm_Gold_MCL360G_Shadow_Line_Plus_Golden_Oak_Overhead.jpg' },
    { type: 'Décor Shutter', name: 'Carbon - Golden Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199133/products/cladding/collection/decor/colours/GLDS16C_Decor_Shutter_16mm_Carbon_GLDS32C_Decor_Shutter_32mm_Carbon_MCL360G_Shadow_Line_Plus_Goldn_Oak_Overhead.jpg' },
    { type: 'Décor Shutter', name: 'Bronze - Golden Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199136/products/cladding/collection/decor/colours/GLDS16B_Decor_Shutter_16mm_Bronze_GLDS32B_Decor_Shutter_32mm_Bronze_MCL360G_Shadow_Line_Plus_Golden_Oak_Overhead.jpg' },
  
    // Décor Shutter with Smoked Oak
    { type: 'Décor Shutter', name: 'Gold - Smoked Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199112/products/cladding/collection/decor/colours/GLDS16G_Decor_Shutter_16mm_Gold_GLDS32G_Decor_Shutter_32mm_Gold_MCL360D_Shadow_Line_Plus_Smoked_Oak_Overhead.jpg' },
    { type: 'Décor Shutter', name: 'Carbon - Smoked Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199156/products/cladding/collection/decor/colours/GLDS16C_Decor_Shutter_16mm_Carbon_GLDS32C_Decor_Shutter_32mm_Carbon_MCL360D_Shadow_Line_Plus_Smoked_Oak_Overhead.jpg' },
    { type: 'Décor Shutter', name: 'Bronze - Smoked Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199145/products/cladding/collection/decor/colours/GLDS16B_Decor_Shutter_16mm_Bronze_GLDS32B_Decor_Shutter_32mm_Bronze_MCL360D_Shadow_Line_Plus_Smoked_Oak_Overhead.jpg' },
  
    // Décor Shutter with Antique Oak
    { type: 'Décor Shutter', name: 'Gold - Antique Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199139/products/cladding/collection/decor/colours/GLDS16G_Decor_Shutter_16mm_Gold_GLDS32G_Decor_Shutter_32mm_Gold_MCL360A_Shadow_Line_Plus_Antique_Oak_Overhead.jpg' },
    { type: 'Décor Shutter', name: 'Carbon - Antique Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199172/products/cladding/collection/decor/colours/GLDS16C_Decor_Shutter_16mm_Carbon_GLDS32C_Decor_Shutter_32mm_Carbon_MCL360A_Shadow_Line_Plus_Antique_Oak_Overhead.jpg' },
    { type: 'Décor Shutter', name: 'Bronze - Antique Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199161/products/cladding/collection/decor/colours/GLDS16B_Decor_Shutter_16mm_Bronze_GLDS32B_Decor_Shutter_32mm_Bronze_MCL360A_Shadow_Line_Plus_Antique_Oak_Overhead.jpg' },
  
    // Décor Curve with Burnt Cedar
    { type: 'Décor Curve', name: 'Gold - Burnt Cedar', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199183/products/cladding/collection/decor/colours/GLDC16G_Decor_Curve_16mm_Gold_GLDC32G_Decor_Curve_32mm_Gold_MCL360R_Shadow_Line_Plus_Burnt_Cedar_Overhead..jpg' },
    { type: 'Décor Curve', name: 'Carbon - Burnt Cedar', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199192/products/cladding/collection/decor/colours/GLDC16C_Decor_Curve_16mm_Carbon_GLDC32C_Decor_Curve_32mm_Carbon_MCL360R_Shadow_Line_Plus_Burnt_Cedar_Overhead.jpg' },
    { type: 'Décor Curve', name: 'Bronze - Burnt Cedar', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199186/products/cladding/collection/decor/colours/GLDC16B_Decor_Curve_16mm_Bronze_GLDC32B_Decor_Curve_32mm_Bronze_MCL360R_Shadow_Line_Plus_Burnt_Cedar_Overhead.jpg' },
  
    // Décor Curve with Limed Oak
    { type: 'Décor Curve', name: 'Gold - Limed Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199126/products/cladding/collection/decor/colours/GLDC16G_Decor_Curve_16mm_Gold_GLDC32G_Decor_Curve_32mm_Gold_MCL360L_Shadow_Line_Plus_Limed_Oak_Overhead.jpg' },
    { type: 'Décor Curve', name: 'Carbon - Limed Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199123/products/cladding/collection/decor/colours/GLDC16C_Decor_Curve_16mm_Carbon_GLDC32C_Decor_Curve_32mm_Carbon_MCL360L_Shadow_Line_Plus_Limed_Oak_Overhead.jpg' },
    { type: 'Décor Curve', name: 'Bronze - Limed Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199128/products/cladding/collection/decor/colours/GLDC16B_Decor_Curve_16mm_Bronze_GLDC32B_Decor_Curve_32mm_Bronze_MCL360L_Shadow_Line_Plus_Limed_Oak_Overhead.jpg' },
  
    // Décor Curve with Golden Oak
    { type: 'Décor Curve', name: 'Gold - Golden Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199150/products/cladding/collection/decor/colours/GLDC16G_Decor_Curve_16mm_Gold_GLDC32G_Decor_Curve_32mm_Gold_MCL360G_Shadow_Line_Plus_Golden_Oak_Overhead.jpg' },
    { type: 'Décor Curve', name: 'Carbon - Golden Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199142/products/cladding/collection/decor/colours/GLDC16C_Decor_Curve_16mm_Carbon_GLDC32C_Decor_Curve_32mm_Carbon_MCL360G_Shadow_Line_Plus_Golden_Oak_Overhead.jpg' },
    { type: 'Décor Curve', name: 'Bronze - Golden Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199147/products/cladding/collection/decor/colours/GLDC16B_Decor_Curve_16mm_Bronze_GLDC32B_Decor_Curve_32mm_Bronze_MCL360G_Shadow_Line_Plus_Golden_Oak_Overhead.jpg' },
  
    // Décor Curve with Smoked Oak
    { type: 'Décor Curve', name: 'Gold - Smoked Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199153/products/cladding/collection/decor/colours/GLDC16G_Decor_Curve_16mm_Gold_GLDC32G_Decor_Curve_32mm_Gold_MCL360D_Shadow_Line_Plus_Smoked_Oak_Overhead.jpg' },
    { type: 'Décor Curve', name: 'Carbon - Smoked Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199164/products/cladding/collection/decor/colours/GLDC16C_Decor_Curve_16mm_Carbon_GLDC32C_Decor_Curve_32mm_Carbon_MCL360D_Shadow_Line_Plus_Smoked_Oak_Overhead.jpg' },
    { type: 'Décor Curve', name: 'Bronze - Smoked Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199166/products/cladding/collection/decor/colours/GLDC16B_Decor_Curve_16mm_Bronze_GLDC32B_Decor_Curve_32mm_Bronze_MCL360D_Shadow_Line_Plus_Smoked_Oak_Overhead.jpg' },
  
    // Décor Curve with Antique Oak
    { type: 'Décor Curve', name: 'Gold - Antique Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199158/products/cladding/collection/decor/colours/GLDC16G_Decor_Curve_16mm_Gold_GLDC32G_Decor_Curve_32mm_Gold_MCL360A_Shadow_Line_Plus_Antique_Oak_Overhead..jpg' },
    { type: 'Décor Curve', name: 'Carbon - Antique Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199175/products/cladding/collection/decor/colours/GLDC16C_Decor_Curve_16mm_Carbon_GLDC32C_Decor_Curve_32mm_Carbon_MCL360A_Shadow_Line_Plus_Antique_Oak_Overhead.jpg' },
    { type: 'Décor Curve', name: 'Bronze - Antique Oak', image: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730199169/products/cladding/collection/decor/colours/GLDC16B_Decor_Curve_16mm_Bronze_GLDC32B_Decor_Curve_32mm_Bronze_MCL360A_Shadow_Line_Plus_Antique_Oak_Overhead.jpg' }
  ];
  const filesData = [
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
    'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
  ]; // Constant files data
  
  

  return (
    <>
      <Breadcrumb
        category="cladding"
        subCategory="collection"
        type="Décor"
        name=""
        disableClick={{ home: false, category: true, subCategory: false, type: true }}
      />
      <Hero name={heroData.name} description={heroData.description} />
      <HeroImages imageLeft={imagesData.imageLeft} imageRight={imagesData.imageRight} />
      <p className="bg-primary text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center font-F37-light px-4 sm:px-8 md:px-16 lg:px-48 py-10 md:py-14 lg:py-20">
        {paragraphText}
      </p>
      <ProductFeatures features={featuresData} className="bg-primary" />
      
      <div className="px-4 pb-10 pt-4">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-center font-F37-light uppercase my-7">available colours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 pt-4">
            {availableColours.map((product, index) => (
              <div key={index} className="flex flex-col items-start space-y-4 pb-9">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={extractNameFromUrl(product.image)}
                  className="w-full object-cover aspect-square shadow-md transition-transform duration-300 "
                  loading='lazy'
                />
                <div className="w-full text-left">
                  {/* Product Type and Name */}
                  <p className="font-F37-light text-md sm:text-md border-transparent transition-colors duration-200">
                    {product.type}
                  </p>
                  <p className="text-lg mt-1">
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 
      {/* Specifications  */}

      <div className="px-64 py-8 font-F37-light border-y">
      <h2 className="text-4xl font-bold mb-4 uppercase tracking-wider">Specifications</h2>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Style and Sizes:</h3>
        <ul className="list-none space-y-1">
          <li>Décor Curve 47 x 16 x 3600mm</li>
          <li>Décor Curve 60 x 16 x 3600mm</li>
          <li>Décor Shutter 47 x 16 x 3600mm</li>
          <li>Décor Shutter 61 x 16 x 3600mm</li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Colours:</h3>
        <p>Bronze, Carbon and Gold</p>
      </div>

      <div className="mb-4 ">
        <h3 className="text-lg font-semibold mb-2">Testing:</h3>
        <p className='w-3/4'>
          Tested to the rigorous demands of BS EN 13501-1, Envello Décor when used in conjunction with the Shadow Line+ system achieves a classification of Euroclass C. 
          This testing is carried out by a UKAS accredited lab and is tested in accordance with how the cladding will be fitted as per the installation guide.
        </p>
      </div>

      <div className="mb-4">
        <p>RRP Per strip shutter or curve 16mm £72.96</p>
        <p>RRP Per strip shutter or curve 32mm £96.96</p>
      </div>
    </div>
      {/* File Download Section */}
      <FileDownload files={filesData} />
    </>
  );
}

export default Decor;
