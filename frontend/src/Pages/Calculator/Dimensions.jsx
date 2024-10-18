import React from 'react';
import HoverPopup from './HoverPopup';

const Dimensions = ({ width, length, height, onChange }) => {
  return (
    <div className="bg-[#E8E8E8] py-52">
      {/* Title Section */}
      <div className=" justify-center items-center mb-6">
      <div className="flex items-center justify-center gap-16">
        <h1 className="text-center font-F37-light text-4xl">Dimensions</h1>
        <span>
          <HoverPopup text="If you are just looking for a rough idea at this stage, please enter approximate goals. You can discuss exact details with one of our approved installers or Premier Distributors at a later date to bring up your plans." />
        </span>
      </div>
      <p className='text-center mt-4 -ml-9'>Set project dimensions, in meters.</p>

        

      </div>

      {/* Input Fields */}
      <div className="flex justify-center items-center space-x-8">
        {/* Width Input */}
        <div className="flex flex-col items-center">
          <label className="font-semibold text-sm mb-2">
            Width (M) <span className="text-red">*</span>
          </label>
          <input
            type="number"
            name="width"
            value={width}
            onChange={onChange}
            className="border border-gray-300 p-4 w-48 text-center appearance-none px-6" // appearance-none removes the spinner
            placeholder="Width"
          />
        </div>

        {/* Length Input */}
        <div className="flex flex-col items-center">
          <label className="font-semibold text-sm mb-2">
            Length (M) <span className="text-red">*</span>
          </label>
          <input
            type="number"
            name="length"
            value={length}
            onChange={onChange}
            className="border border-gray-300 p-4 w-48 text-center appearance-none px-6"
            placeholder="Length"
          />
        </div>

        {/* Height Input */}
        <div className="flex flex-col items-center">
          <label className="font-semibold text-sm mb-2">
            Height (M) <span className="text-red">*</span>
          </label>
          <input
            type="number"
            name="height"
            value={height}
            onChange={onChange}
            className="border border-gray-300 p-4 w-48 text-center appearance-none px-6"
            placeholder="Height"
          />
        </div>
      </div>
    </div>
  );
};

export default Dimensions;
