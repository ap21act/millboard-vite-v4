import React,{useEffect} from 'react';
import EdgingFasciaProductPage from '../EdgingFasciaProductPage'; // Import the reusable ProductPage component
import Breadcrumb from '../../../../../Components/Components/Common/Breadcrumb';

function FasciaBoard() {
  const heroData = {
    name: 'Fascia Board',
    description: 'Composite decking fascia boards.',
  };

  const specificationData = {
    size: '  146 x 3600 x 16mm',
    construction: 'Polymer resin core /Lastane® surface',
  };

  const imagesData = {
    imageLeft: 'https://millboard.widen.net/content/wabjnebj1i/web/MFN360G_Fascia_Golden%20Oak_and_MEBF50G_Flexible%20Bullnose_Golden%20Oak_Dual%201.jpg',
    imageRight: 'https://millboard.widen.net/content/i3mcqxxqe9/web/MFN360G_Fascia_Board_Golden_Oak_Closeup%2045%20degree.jpg',
  };

  const paragraphText = (
    <>
     The fascia collection discreetly works with your choice of Millboard decking and edging,{' '}
      <span className="text-green-dark">ensuring the final look is seamless  </span>and the subframe is hidden.
    </>
  );
  
// Scroll to the top when the component mounts
useEffect(() => {
  window.scrollTo(0, 0); // Scroll to top-left of the window
}, []);
  return (
    
    <>
    <Breadcrumb
        category="decking"
        subCategory="accessories"
        type="edging-and-fascias"
        name="Fascia Board"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}/>
    <EdgingFasciaProductPage
      heroData={heroData}
      specificationData={specificationData}
      imagesData={imagesData}
      paragraphText={paragraphText}
    />
    </>
  );

}

export default FasciaBoard;
