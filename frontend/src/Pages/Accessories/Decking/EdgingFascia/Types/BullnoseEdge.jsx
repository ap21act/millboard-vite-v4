import React,{useEffect} from 'react';
import EdgingFasciaProductPage from '../EdgingFasciaProductPage'; // Import the reusable ProductPage component
import Breadcrumb from '../../../../../Components/Components/Common/Breadcrumb';

function BullnoseEdge() {
  const heroData = {
    name: 'Bullnose Edge',
    description: 'Composite decking edging profile with a bullnose finish, for curved edges of decks.',
  };

  const specificationData = {
    size: '50 x 2400 x 32mm',
    construction: 'Flexible polymer resin core/Lastane® surface',
  };

  const imagesData = {
    imageLeft: 'https://millboard.widen.net/content/4xpmviihcs/web/MEBF50A_Bullnose_Edging_Antique%20Oak_Project%20Imagery_Pool%20Edging.jpg',
    imageRight: 'https://millboard.widen.net/content/mf5xpmqhjh/web/MEBF50A_Bullnose_Edging_Antique_Oak_Closeup%2045%20degree.jpg',
  };

  const paragraphText = (
    <>
      The Flexible Bullnose edging is designed to provide a nice curved edge to a deck and to help  {' '}
      <span className="text-green-dark">resist high wear points </span>with a thicker Lastane ® layer
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
        name="Bullnose Edge"
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

export default BullnoseEdge;
