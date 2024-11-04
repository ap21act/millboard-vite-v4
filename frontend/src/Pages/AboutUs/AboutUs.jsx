import React from 'react';
import Hero from '../../Components/Accessories/Hero';
import Breadcrumb from '../../Components/Components/Common/Breadcrumb';
import TitleWithDetails from '../../Components/Accessories/TitleWithDetails';
import Timeline from '../Why/WhyMillboard/Timeline';

const features = [
  { title: 'Life', description: 'Guaranteed for 25 years, Millboard decking is the most authentic and enduring wood-free outdoor flooring product on the market.' },
  { title: 'Living', description: 'Millboard decking is hand-moulded from original timber, then hand-coloured by British craftsmen to replicate the beauty of natural wood.' },
  { title: 'Safer', description: 'Millboard is wood-free and non-porous, which means high resistance to algae growth and excellent anti-slip properties.' },
  { title: 'Lighter', description: "Our unique, closed 'cellular' internal structure reduces weight while maintaining strength." },
];

const features1 = [
    {
      title: 'Tough',
      description: 'The unique Lastane layer resists scratches and stains and is designed to withstand demanding outdoor environments.',
    },
    {
      title: 'Enduring',
      description: 'The dual-tone Lastane surface is hand-tinted using pigments designed to replicate the look of natural timber.',
    },
    {
      title: 'Safer',
      description: 'Millboard is wood-free and non-porous, which means high resistance to algae growth and excellent anti-slip properties.',
    },
    {
      title: 'Lighter',
      description: "Our unique, closed 'cellular' internal structure reduces weight while maintaining strength.",
    },
    {
      title: 'Stronger',
      description: 'The structural core is a blend of natural minerals bonded in a polymer resin with long fibre reinforcement for added strength.',
    },
    {
      title: 'Durable',
      description: "Millboard decking is solid, not hollow. This makes it strong and means it won’t warp, rot, or harbor insects and pests like timber would.",
    },
    {
      title: 'Innovative',
      description: 'Our product is the result of continuous innovation, incorporating advanced materials and techniques to set new standards in outdoor decking.',
    },
    {
      title: 'Eco-Friendly',
      description: 'Millboard is committed to sustainability, using responsibly sourced materials and eco-friendly manufacturing practices to reduce environmental impact.',
    },
  ];

const paragraphText = (
  <>
    We believe in pushing boundaries and challenging the impossible. Our journey began with a simple yet profound idea:{' '}
    <span className="text-green-dark">to create outdoor decking solutions</span> that{' '}
    <span className="text-green-dark">combine the natural beauty of wood</span> with the{' '}
    <span className="text-green-dark">durability and low maintenance</span> of modern materials.
    Our story is one of innovation and dedication. We embarked on a relentless pursuit of excellence, leveraging
    cutting-edge technology and sustainable practices to craft a product that exceeds expectations.
  </>
);

function AboutUs() {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <Breadcrumb
        category="why-millboard"
        subCategory="millboard-difference"
        name="about-us"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />

      {/* Hero Section */}
      <Hero
        name="About Us"
        description="Welcome to Living Outdoors, the UK's leading supplier of Millboard decking and cladding. We are a family-run business with over 45 years of experience in the landscaping industry. Our team of experts are dedicated to helping you create your dream outdoor space. We pride ourselves on delivering a positive customer experience and providing the highest quality products. Visit our showroom in Kentish Town, London to see our range of Millboard products on display."
      />

      {/* Introduction Section */}
      <section className="bg-primary text-white text-center font-F37-light px-6 py-12 lg:px-48 lg:py-20">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          {paragraphText}
        </p>
      </section>

      {/* About Us Details */}
      <TitleWithDetails
        title="Who We Are"
        description={
          <p>
            At Millboard, we're not just a company; we're a passionate community of innovators, designers, and sustainability advocates who are on a mission to transform outdoor living. Our vision is to empower individuals and professionals to create outdoor environments that not only stand the test of time but also enhance the quality of life.
          </p>
        }
        imageUrl="https://www.millboard.com/sites/default/files/styles/text_and_image_card_4_3_816x612_/public/2024-03/Case%20Study_Midlands%20private%20residence_9.jpg?h=d07d10a6&itok=GqfkVERk"
        isEven={false}
      />

      <section className="px-4 sm:px-8 md:px-16 lg:px-24 text-center py-12">
        <p className=" text-base md:text-lg">
          We understand the impact that any form of construction can have on the environment. That's why sustainability is a key principle for us. We use responsibly sourced materials and adopt eco-friendly practices throughout our manufacturing process. Our goal is to leave a minimal environmental footprint while creating exceptional outdoor spaces.
        </p>
      </section>

      {/* Vision and Values */}
      <TitleWithDetails
        title="Our Vision"
        description={<p>Our vision is clear and unwavering: we envision a world where outdoor living spaces are not just functional but breathtakingly beautiful. We believe that your outdoor area should be an extension of your lifestyle, a place where you can relax, entertain, and connect with nature without compromising on quality, aesthetics, or sustainability.</p>}
        imageUrl="https://millboard.widen.net/content/6a840b6d-16de-4ef9-864c-4385d9978fd7/web/Case%20Study_%20Joshua%20Tree_Cladding_Decking_19.jpg?crop=yes&w=816&h=612&itok=sh_ZB5MZ"
        isEven={true}
      />
      <TitleWithDetails
        title="Our Values"
        description={
          <p>
            We believe in the beauty of life in its many forms. Ensuring a sustainable future is intrinsic to our nature.
          </p>
        }
        imageUrl="https://millboard.widen.net/content/65cfadce-da05-45ad-93c2-703df1c26021/web/Case%20Study_Kew%20Childrens%20Garden_1.jpg?crop=yes&w=608&h=456&itok=L5BjxYVE"
        isEven={false}
      />

      {/* Feature Grid */}
      <section className="py-16 max-w-7xl mx-auto font-F37-light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold uppercase">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Additional Features */}
      <section className="py-16 max-w-7xl mx-auto font-F37-light">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left">
          {features1.map((feature, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold uppercase">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Craftsmanship Section */}
      <TitleWithDetails
        title="Crafted to be Perfectly Imperfect"
        description={
          <p>
            Each length of Millboard deck is the result of a long process of craftsmanship and attention to visual detail. The fine details and natural imperfections in the original material have to be recreated in the durable Millboard product.
          </p>
        }
        imageUrl="https://millboard.widen.net/content/b4572a7f-7d14-4f55-a33b-6b10872d808d/web/MCBF360A_Board&Batten_Antique%20Oak_Lifestyle%20Close%20Up.png?crop=yes&w=608&h=456&itok=ZOczSDv8"
        isEven={false}
      />
    </div>
  );
}

export default AboutUs;
