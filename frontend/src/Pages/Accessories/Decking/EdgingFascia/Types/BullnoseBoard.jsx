import React,{useEffect} from 'react';
import EdgingFasciaProductPage from '../EdgingFasciaProductPage'; // Import the reusable ProductPage component
import Breadcrumb from '../../../../../Components/Components/Common/Breadcrumb';

function BullnoseBoard() {
  const heroData = {
    name: 'Bullnose Edge',
    description: 'Composite decking edging profile with a bullnose finish, for curved edges of decks.',
  };

  const specificationData = {
    size: ' 150 x 3600 x 32mm',
    construction: 'Polymer resin core /Lastane® surface',
  };

  const imagesData = {
    imageLeft: 'https://millboard.widen.net/content/pnaj8wzcf2/web/MEBB360G_Bullnose%20Board_Golden%20Oak_Project%20Imagery_Steps%20and%20Bench.jpg',
    imageRight: 'https://millboard.widen.net/content/cdgyywwnsk/web/MEBB360G_Bullnose_Board_Golden_Oak_Closeup%2045%20degree.jpg',
  };

  const paragraphText = (
    <>
      The Bullnose Board is designed to be  {' '}
      <span className="text-green-dark">used in a wide range of applications, </span>rom under-lip lighting to coping for planters and seating, this adaptable profile opens up a wide range of possibilities.
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
        name="Bullnose Board"
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

export default BullnoseBoard;
