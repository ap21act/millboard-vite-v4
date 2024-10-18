import React from 'react';

function TabLayout({ activeType, setActiveType }) {
  const tabs = [
    { name: 'Enhanced Grain', type: 'enhanced grain' },
    { name: 'Weathered Oak', type: 'weathered oak' },
    { name: 'Lasta-Grip®', type: 'lasta-grip' },
  ];

  return (
    <div className="flex justify-center items-center my-4">
      {/* Render tabs */}
      {tabs.map((tab) => (
        <div
          key={tab.name}
          onClick={() => setActiveType(tab.type)} // Set the active type when clicking the tab
          className={`cursor-pointer py-7 px-8 border border-white-background text-lg font-bold
            ${activeType === tab.type ? 'bg-primary text-white' : 'bg-white'} 
            transition-colors duration-300`}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
}

export default TabLayout;
