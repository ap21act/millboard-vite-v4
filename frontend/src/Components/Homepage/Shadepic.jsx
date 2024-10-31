import React from 'react';

const ShadePic = () => {
  return (
    <section
      className="relative flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(65, 64, 66, 1) 50%, rgba(65, 64, 66, 0.4) 100%), url("https://s3.eu-west-1.amazonaws.com/millboard-norway/home/greyscale/crafted-image.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '65vh',
        width: '100%',
      }}
    >
      <div className="w-full max-w-5xl px-6 md:px-10 lg:px-20 py-10 flex flex-col items-start">
        {/* Heading Section with Centered Horizontal Line */}
        <div className="flex items-center w-full mb-4">
          <div className="flex-grow border-t border-white"></div>
          <h4 className="font-F37-light text-3xl md:text-4xl lg:text-5xl text-white pl-4 text-right">
            Rigorously Tested
          </h4>
        </div>

        {/* Paragraph Section with Right Alignment and Responsive Styling */}
        <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl text-[#BCBCBC] text-right">
          Each length of Millboard is the result of a long process of craftsmanship and attention to detail. From the
          initial layering of the unique Lastane surface, right through the pouring of fiber-reinforced resin-mineral
          filler, we focus on achieving the finest quality of finish. Our respect for accuracy permeates every square
          millimetre, and this is why many of our processes are carried out manually. For example, each piece is
          hand-coloured by master craftsmen to establish an authentic wood finish. We have great respect for the skilled
          eye of an artist and are therefore committed to the hand-colouring system. The resulting true-to-life shades
          speak for themselves.
        </p>
      </div>
    </section>
  );
};

export default ShadePic;
