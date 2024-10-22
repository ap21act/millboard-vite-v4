import { extractNameFromUrl } from '../../Utils'; // Utility to extract alt text from URL

export default function TopScroll() {
  return (
    <div className="pb-24 sm:py-20 relative ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8"></h2>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-3 items-center gap-x-10 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6 lg:gap-x-8">
          {[
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1729258579/products/Home/Pop-up%20Icons/Natural_wood_look.svg', text: 'Not extruded like most composites. Millboard decking looks just like the real thing.', title: 'Moulded from real oak' },
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1729258581/products/Home/Pop-up%20Icons/High_slip-resistance.svg', text: 'High grip surface much safer than wood, especially in the wet.', title: 'Highly slip-resistant' },
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1729258537/products/Home/Pop-up%20Icons/Recycled_materials.svg', text: 'Base materials have low impact on global warming and ozone depletion.', title: 'Recycled materials' },
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1729258580/products/Home/Pop-up%20Icons/Wood_Free.svg', text: 'Unlike wood, there is no protein content to assist algal growth within the boards.', title: 'Rot & split resistant' },
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1729258580/products/Home/Pop-up%20Icons/Lost_Head_Fixing.svg', text: 'Durafix® fixings are virtually hidden beneath the unique Lastane® surface.', title: 'Lost-head fixing' },
            { src:'https://res.cloudinary.com/ddtzxyzex/image/upload/v1729258579/products/Home/Pop-up%20Icons/Low_Maintaince.svg', text: 'Unlike Timber, no oiling or staining is required.', title: 'Low Maintaince' }
          ].map((item, index) => (
            <div key={index} className="relative group text-center">
              <img
                alt={extractNameFromUrl(item.src)}
                src={item.src}
                className="max-h-16 w-full object-contain lg:max-h-20"
              />
              
              {/* Popup */}
              <div className="hidden absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-4 w-64 bg-primary text-white text-center p-2 z-10 group-hover:block">
                {item.text}
                {/* Popup Arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
              </div>

              {/* Title below the image */}
              <div className="mt-2 text-sm sm:text-base lg:text-lg font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
