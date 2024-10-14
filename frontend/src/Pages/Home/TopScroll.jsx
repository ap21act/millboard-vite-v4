import {extractNameFromUrl} from '../../Utils'; // Utility to extract alt text from URL';


export default function TopScroll() {
  return (
    <div className="bg-white pb-24 sm:py-20 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900"></h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {[
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776106/products/decking/features/Recycled_materials.svg', text: 'Recycled_materials' },
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776106/products/decking/features/Recycled_materials.svg', text: 'Reform' },
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776106/products/decking/features/Recycled_materials.svg', text: 'Tuple' },
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776106/products/decking/features/Recycled_materials.svg', text: 'SavvyCal' },
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1728776105/products/decking/features/Natural_wood_look.svg', text: 'Statamic' },

            
            
          ].map((item, index) => (
            <div key={index} className="relative group">
              <img
                alt={extractNameFromUrl(item.src)}
                src={item.src}
                width={300}
                height={300}
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              />
              
              {/* Popup */}
              <div className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-4 w-48 bg-primary text-white text-center rounded-lg p-2 z-10 group-hover:block">
                {item.text}
                {/* Popup Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
