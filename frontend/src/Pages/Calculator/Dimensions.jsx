import React from 'react';
import HeroHeader from './HeroHeader';

// Reusable Input Component
const DimensionInput = ({ label, name, value, onChange, placeholder }) => (
  <div className="flex flex-col items-center">
    <label className="font-semibold text-sm mb-2">
      {label} (M) <span className="text-red">*</span>
    </label>
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      className="border border-gray-300 p-4 w-48 text-center appearance-none px-6 focus:outline-none focus:ring-2 focus:ring-gray-300" // Remove blue border on focus
      placeholder={placeholder}
      // Custom styles to hide the number input arrows (spinners)
      style={{
        MozAppearance: "textfield", // For Firefox
      }}
      onWheel={(e) => e.target.blur()} // Prevent mouse wheel from changing values
    />
    {/* Extra CSS for Webkit-based browsers (Chrome, Safari) */}
    <style jsx>{`
      input[type="number"]::-webkit-outer-spin-button,
      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      input[type="number"] {
        -moz-appearance: textfield; /* Firefox */
      }
    `}</style>
  </div>
);

const Dimensions = ({ width, length, height, onChange }) => {
  return (
    <div className="bg-[#E8E8E8] py-52 min-w-2xl">
      {/* Title Section */}
      <HeroHeader
      bgColor="bg-grey" // Customizable background color
      titleText="Dimensions" // Title text
      hoverText="If you are just looking for a rough idea at this stage, please enter approximate goals. You can discuss exact details with one of our approved installers or Premier Distributors at a later date to bring up your plans." // Hover popup text
      descriptionText="Set project dimensions, in meters." // Description text under the title
    />

      {/* Input Fields */}
      <div className="flex justify-center items-center space-x-8">
        {/* Reusing the DimensionInput component for all inputs */}
        <DimensionInput
          label="Width"
          name="width"
          value={width}
          onChange={onChange}
          placeholder="Width"
        />
        <DimensionInput
          label="Length"
          name="length"
          value={length}
          onChange={onChange}
          placeholder="Length"
        />
        <DimensionInput
          label="Height"
          name="height"
          value={height}
          onChange={onChange}
          placeholder="Height"
        />
      </div>
    </div>
  );
};

export default Dimensions;
