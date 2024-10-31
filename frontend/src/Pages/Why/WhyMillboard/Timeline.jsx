import React, { useState } from 'react';

function TimelineItem({ year, description }) {
  return (
    <div className="flex flex-col items-center text-center mx-10 min-w-max text-white">
      <div className="w-24 h-24 flex items-center justify-center border border-white rounded-full text-2xl font-semibold mb-2">
        {year}
      </div>
      <p className="max-w-xs text-sm">{description}</p>
    </div>
  );
}

function Timeline() {
  // Embedded data inside the Timeline component
  const timelineData = [
    { year: "1976", description: "The family starts Stonemarket cast paving and later sold" },
    { year: "1998", description: "Under the Elmdene brand, the company manufactures unique real stone-look planters made from lightweight PU" },
    { year: "2005", description: "The family develop the first mould masters for unique weathered boards. These come from a 100-year old railway carriage." },
    { year: "2006", description: "After ongoing development, the first Millboard boards are prepared and rigorously tested for market launch." },
    { year: "2007", description: "After four years of development, the first Millboard wood-free decking board enters the UK market" },
    { year: "2008", description: "Further development of the product core is undertaken to improve strength." },
    { year: "2009", description: "A second production machine is designed and installed as demand rapidly increases." },
    { year: "2010", description: "Millboard introduces a 100% recycled plastic sub-frame system to accompany Millboard decking." },
    { year: "2011", description: "The company’s offices move from the old Ryton production site to Bodmin Road as staff numbers increase." },
    { year: "2014", description: "Voted one of the top 1000 companies in the UK to inspire Britain" },
    { year: "2015", description: "Achieves IS0 9001, 14001 & 18001 accreditations. The company now exports to 18 countries" },
    { year: "2016", description: "Millboard launches the Approved Installer scheme to support end-user demand. Machine 4 is introduced." },
    { year: "2017", description: "A fifth machine is commissioned, and all new boards off the production line benefit from an improved coating." },
    { year: "2018", description: "Millboard launches the innovative Bullnose Board for the ultimate design flexibility" },
    { year: "2019", description: "Millboard opens the doors to its London Showroom, a state-of-the-art design space in the heart of London" },
    { year: "2020", description: "Millboard introduces DuoSpan and DuoLift: two systems to support outdoor structures and to make complex designs easy to install" },
    // Add more timeline items as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) => 
      Math.max(0, Math.min(prevIndex + direction, timelineData.length - itemsPerPage))
    );
  };

  return (
    <div className="bg-primary py-16 px-4 text-white font-F37-light w-full relative">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">The Millboard Story</h2>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
          A family-run business, the company has been marrying British craftsmanship to the inspiration of nature since 1976. Millboard decking demonstrates the company’s commitment to quality and visual distinction.
        </p>

        <div className="relative flex items-center justify-center">
          <button
            onClick={() => handleNavigation(-1)}
            disabled={currentIndex === 0}
            className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green text-primary hover:text-white p-4 shadow-lg disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="overflow-hidden w-full px-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${Math.min(
                  (currentIndex * 100) / itemsPerPage,
                  ((timelineData.length - itemsPerPage) * 100) / itemsPerPage
                )}%)`,
              }}
            >
              {timelineData.map((item, index) => (
                <TimelineItem key={index} {...item} />
              ))}
            </div>
          </div>

          <button
            onClick={() => handleNavigation(1)}
            disabled={currentIndex + itemsPerPage >= timelineData.length}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green text-primary hover:text-white p-4 shadow-lg disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="absolute inset-x-0 top-1/2 border-t border-white mt-2" style={{ height: '1px', zIndex: -1 }}></div>
      </div>
    </div>
  );
}

export default Timeline;
