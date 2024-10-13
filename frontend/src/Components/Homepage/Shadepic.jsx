import React from 'react';

const ShadePic = () => {
  return (
    <section
      className="greyscale-text-image relative"
      style={{
        backgroundImage: `linear-gradient(90deg, rgb(65, 64, 66) 50%, rgba(65, 64, 66, 0.4) 100%), url("https://s3.eu-west-1.amazonaws.com/millboard-norway/home/greyscale/crafted-image.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '65vh', // Adjust this to change the height
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}
    >
      <div className="greyscale-text-image-text-content text-center w-full px-10 relative">
        <div className="inline-block relative mb-4">
          {/* Centered Heading */}
          <h4 className="greyscale-text-image__heading font-F37-light text-white text-5xl inline-block">
            Made to perfection
          </h4>
          &nbsp;
          {/* Horizontal Line that extends to the right edge */}
          <span className="absolute top-1/2 transform translate-y-[-50%] left-full w-[100vw] h-px bg-white"></span>
        </div>
        
        <p className="greyscale-text-image__text text-base max-w-lg mx-auto text-right leading-relaxed text-[#BCBCBC]">
          From pouring the fiber-reinforced resin fabric to hand-dyeing each board, our focus is always to
          achieve the finest quality of finish. Our desire for perfection permeates every square millimeter,
          which is why so many of our processes are carried out by hand. We are not content with less than
          authentic wood grain and toner.
        </p>
      </div>
    </section>
  );
};

export default ShadePic;
