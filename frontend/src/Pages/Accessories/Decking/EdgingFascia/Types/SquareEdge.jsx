import React,{useEffect} from 'react';
import EdgingFasciaProductPage from '../EdgingFasciaProductPage'; // Import the reusable ProductPage component
import Breadcrumb from '../../../../../Components/Components/Common/Breadcrumb';
function SquareEdgeProduct() {
  const heroData = {
    name: 'Square Edge',
    description: 'Composite decking edging profile with a square edge finish, for curved edges of decks.',
  };

  const specificationData = {
    size: '146 x 3600 x 16mm',
    construction: 'Polymer resin core /Lastane® surface',
  };

  const imagesData = {
    imageLeft: 'https://millboard.widen.net/content/yiz3lltge6/web/MFN360C_Fascia_Coppered%20Oak_and_MEUF24C_Flexible%20Square%20Edge_Coppered%20Oak_Steps%201.jpg',
    imageRight: 'https://millboard.widen.net/content/2zleza6zn3/web/MEUF24R_Square_Edge_Burnt_Cedar_Closeup%2045%20degree.jpg',
  };

  const paragraphText = (
    <>
      The Flexible square edging is designed to provide a nice curved edge to a deck whilst providing the crisp{' '}
      <span className="text-green-dark">contemporary feel.</span>
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
        name="Square Edge"
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

export default SquareEdgeProduct;
