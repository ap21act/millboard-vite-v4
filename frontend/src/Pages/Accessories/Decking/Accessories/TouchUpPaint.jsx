import React from 'react';
import Hero from '../../../../Components/Accessories/Hero';
import Breadcrumb from '../../../../Components/Components/Common/Breadcrumb';
import { extractNameFromUrl } from '../../../../Utils';

// Sample paint data array
const paintData = [
  {
    name: 'Antique Oak',
    size: '500ml',
    code: 'AP500A',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190877/products/decking/accessories/touch-up%20paint/AP500A_Antique_Oak_Touch_Up_Paint_500ml.jpg', 
  },
  {
    name: 'Ashwood',
    size: '500ml',
    code: 'AP500H',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190860/products/decking/accessories/touch-up%20paint/AP500H_Ashwood_Touch_Up_Paint_500ml.jpg', 
  },
  {
    name: 'Brushed Basalt',
    size: '500ml',
    code: 'AP500B',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190880/products/decking/accessories/touch-up%20paint/AP500B_Brushed_Basalt_Touch_Up_Paint_500ml.jpg', 
  },
  {
    name: 'Burnt Cedar',
    size: '500ml',
    code: 'AP500R',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190886/products/decking/accessories/touch-up%20paint/AP500R_Burnt_Cedar___Embered_Touch_Up_Paint_500ml.jpg', 
  },
  {
    name: 'Coppered Oak',
    size: '500ml',
    code: 'AP500C',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190873/products/decking/accessories/touch-up%20paint/AP500C_Coppered_Oak_Touch_Up_Paint_500ml.jpg', 
  },
  {
    name: 'Ebony Grey',
    size: '500ml',
    code: 'AP500Y',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190882/products/decking/accessories/touch-up%20paint/AP500Y_Ebony_Grey_Touch_Up_Paint_500ml.jpg', 
  },
  {
    name: 'Golden Oak',
    size: '500ml',
    code: 'AP500G',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190871/products/decking/accessories/touch-up%20paint/AP500G_Golden_Oak_Touch_Up_Paint_500ml.jpg', 
  },
  {
    name: 'Jarrah',
    size: '500ml',
    code: 'AP500J',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190868/products/decking/accessories/touch-up%20paint/AP500J_Jarrah_Touch_Up_Paint_500ml.jpg', 
  },
  {
    name: 'Limed Oak',
    size: '500ml',
    code: 'AP500L',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190861/products/decking/accessories/touch-up%20paint/AP500L_Limed_Oak_Touch_Up_Paint_500ml.jpg', 
  },
  {
    name: 'Sage Green',
    size: '500ml',
    code: 'AP500N',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190864/products/decking/accessories/touch-up%20paint/AP500N_Sage_Green_Touch_Up_Paint.jpg', 
  },
  {
    name: 'Salt Blue',
    size: '500ml',
    code: 'AP500T',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190884/products/decking/accessories/touch-up%20paint/AP500T_Salt_Blue_Touch_Up_Paint.jpg', 
  },
  {
    name: 'Vintage',
    size: '500ml',
    code: 'AP500V',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190866/products/decking/accessories/touch-up%20paint/AP500V_Vintage_Oak_Touch_Up_Paint_500ml.jpg', 
  },
  {
    name: 'Smoked Oak',
    size: '500ml',
    code: 'AP500D',
    imageUrl: 'https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/e_improve/v1730190875/products/decking/accessories/touch-up%20paint/AP500D_Smoked_Oak___Driftwood_Touch_Up_Paint_500ml.jpg', 
  },
];

// Component to display individual paint item
const PaintCard = ({ name, size, code, imageUrl }) => (
  <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg ">
    <img src={imageUrl} alt={extractNameFromUrl(imageUrl)} className="w-48 h-48 object-cover rounded-t-lg" />
    <div className="text-center mt-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm">{size} | {code}</p>
    </div>
  </div>
);

const TouchUpPaint = () => {
  return (
    <div>
      <Breadcrumb
        category="decking"
        subCategory="accessories"
        type="decking-accessories"
        name="touch-up-paint"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type="Decking"
        name="Touch-up Coating"
        description="Perfect for blending in cut ends, our touch-up coating is supplied in 500ml tins and in a range of colours to match your choice of Millboard decking. Touch up coating is not recommended for use on the surface of the board."
      />

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 ">
        {paintData.map((paint, index) => (
          <div
            key={index}
            className="text-center  p-4  shadow-sm bg-white"
          >
            <img
              src={paint.imageUrl}
              alt={paint.name}
              className="w-full h-auto object-cover  mb-4"
            />
            <h2 className="text-3xl font-semibold uppercase ">{paint.name}</h2>
            <p className="text-xl mt-1">
              {paint.size} | {paint.code}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouchUpPaint;

