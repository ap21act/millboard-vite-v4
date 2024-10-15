import React from 'react';

const ShadePic = () => {
  return (
    <section
      className="greyscale-text-image relative"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(65, 64, 66, 1) 50%, rgba(65, 64, 66, 0.4) 100%), url("https://s3.eu-west-1.amazonaws.com/millboard-norway/home/greyscale/crafted-image.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '65vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <div className="greyscale-text-image-text-content text-left w-full px-10 relative max-w-5xl mx-auto">
        <div className="flex items-center mb-4 max-w-screen-md">
          <div className="flex-grow border-t border-white"></div>
          {/* Centered Heading */}
          <h4 className="font-F37-light text-white text-5xl  text-right">
            Rigorously Tested
          </h4>
          {/* Horizontal Line extending to the right edge */}
          
        </div>

        {/* Paragraph text aligned to the left */}
        <p className="text-base max-w-screen-md text-right mx-0 leading-relaxed text-[#BCBCBC]">
          Each length of Millboard is the result of a long process of craftsmanship and attention to detail. From the initial layering of the unique Lastane surface, right through the pouring of fiber-reinforced resin-mineral filler, we focus on achieving the finest quality of finish. Our respect for accuracy permeates every square millimetre, and this is why many of our processes are carried out manually. For example, each piece is hand-coloured by master craftsmen to establish an authentic wood finish. We have great respect for the skilled eye of an artist and are therefore committed to the hand-colouring system. The resulting true-to-life shades speak for themselves.
        </p>
      </div>
    </section>
  );
};

export default ShadePic;
