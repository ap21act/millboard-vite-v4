import React from 'react';
import AvailableColor from '../../../../Components/Accessories/AvailableColor';
import FAQs from '../../../../Components/FAQs/FAQs';
import Specification from './Types/Specification';
import HeroImages from '../../../../Components/Hero/HeroImages';
import FileDownload from '../../../../Components/Downloads/FileDownload';
import Hero from '../../../../Components/Accessories/Hero';
import ProductFeatures from '../../../../Components/Components/Common/ProductFeatures';
import { edgingFasciaFaqs } from '../../../../Data/FAQs/faqs'; // Constant FAQ data
import { featuresData } from '../../../../Data/Features/Cladding'; // Constant features data

const filesData = [
  'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
  'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
  'https://millboard.widen.net/view/pdf/8wm9rgljst/Millboard-Typical-Step-Details-with-Bullnose-Board-on-full-build-up.pdf',
]; // Constant files data

function EdgingFasciaProductPage({ heroData, specificationData, imagesData, paragraphText }) {
  return (
    <div>
      {/* Hero Section */}
      <Hero name={heroData.name} description={heroData.description} />

      {/* Image Section */}
      <HeroImages imageLeft={imagesData.imageLeft} imageRight={imagesData.imageRight} />

      {/* Paragraph Section */}
      <p className="bg-primary text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center font-F37-light px-4 sm:px-8 md:px-16 lg:px-48 py-10 md:py-14 lg:py-20">
  {paragraphText}
</p>


      {/* Features Section */}
      <ProductFeatures features={featuresData} className="bg-primary" />

      {/* Specification Section */}
      <Specification size={specificationData.size} construction={specificationData.construction} />

      {/* Available Colors Section */}
      <AvailableColor />

      {/* File Download Section */}
      <FileDownload files={filesData} />

      {/* FAQs Section */}
      <FAQs faqsFromDb={edgingFasciaFaqs} />
    </div>
  );
}

export default EdgingFasciaProductPage;
