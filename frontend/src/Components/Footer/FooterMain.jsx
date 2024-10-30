import React from 'react';
import StayinTheLoop from '../Components/StayinTheLoop';
import CustomLink from '../Components/Common/CustomLink';

const FooterMain = () => {
  return (
    <div className=" mx-auto w-full max-w-screen-xl hidden md:flex">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
          <div className='flex-col'>
            <h2 className="mb-4 font-F37-light text-primary text-xl">Our Products</h2>
            <ul className="font-extrabold mb-5 text-sm">
              Decking
              <li className="text-xs font-semibold leading-8">
                <CustomLink to="/products/decking/collection">Millboard Collections</CustomLink>
              </li>
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="/products/decking/collection/enhanced-grain/antique-oak">Enhanced Grain</CustomLink>
              </li>
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="/products/decking/collection/weathered-oak/driftwood">Weathered Oak</CustomLink>
              </li>
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="/products/decking/collection/lasta-grip/coppered-oak">Lasta Grip</CustomLink>
              </li>
            </ul>

            <ul className="font-extrabold pb-2 leading-8 text-sm">
              Cladding
              <li className="text-xs leading-6 font-semibold">
                <CustomLink to="/products/cladding/collection">Envello</CustomLink>
              </li>
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="/products/cladding/collection/board-and-batten+/antique-oak">Board & Batten +</CustomLink>
              </li>
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="/products/cladding/collection/decor">Décor</CustomLink>
              </li>
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="/products/cladding/collection/shadow-line+/antique-oak">Shadow Line +</CustomLink>
              </li>
            </ul>
          </div>

          {/* Our Products Row 2 */}
          <div>
            <h2 className="mb-4 font-F37-light text-primary text-xl">Inspiration</h2>
            <ul className="font-extrabold pb-2 text-sm">
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="/inspiration/articles">Blog</CustomLink>
              </li>
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="/case-studies/all">Case Studies</CustomLink>
              </li>
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="/inspiration-and-ideas/ideas/gallery">Gallery</CustomLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Discover Millboard */}
        <div className="ml-5">
          <h2 className="mb-4 font-F37-light text-primary text-xl">Discover <br />Millboard</h2>
          <ul className="font-extrabold pb-2 text-sm">
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="/about-us">About us</CustomLink>
            </li>
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="/work-with-us">Careers</CustomLink>
            </li>
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="/reviews">Reviews</CustomLink>
            </li>
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="/our-showrooms">Showrooms</CustomLink>
            </li>
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="/why/impact/sustainability">Sustainability</CustomLink>
            </li>
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="#">Warranties</CustomLink>
            </li>
          </ul>

          <div>
            <h2 className="mb-4 font-F37-light text-primary text-xl pt-20">Resources</h2>
            <ul className="font-extrabold pb-2 text-sm">
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="/resources#brochures-pricing-guide">Downloads</CustomLink>
              </li>
              <li className="text-xs leading-6 font-F37-light">
                <CustomLink to="#">Portal</CustomLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Start a Project */}
        <div className="ml-5">
          <h2 className="mb-4 font-F37-light text-primary text-xl">Start a project</h2>
          <ul className="font-extrabold pb-2 text-sm">
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="#">Find an installer</CustomLink>
            </li>
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="#">Installation Guide</CustomLink>
            </li>
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="/order-sample">Order a sample</CustomLink>
            </li>
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="#">Where to buy</CustomLink>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="ml-4">
          <h2 className="mb-4 font-F37-light text-primary text-xl">Customer Service</h2>
          <ul className="font-extrabold pb-2 text-sm">
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="#">Approved global distributors</CustomLink>
            </li>
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="#">Contact us</CustomLink>
            </li>
            <li className="text-xs leading-6 font-F37-light">
              <CustomLink to="#">FAQs</CustomLink>
            </li>
          </ul>
          <ul className="py-2 text-sm">
            General Enquiries
            <li className="text-xs leading-8 hover:underline hover: decoration-green">
              <a href="tel:+4402074824661">020 7482 4661</a>
            </li>
            <li className="text-xs leading-8 hover:underline hover: decoration-green">
              <a href="mailto:sales@thelivingoutdoors.com">sales@thelivingoutdoors.com</a>
            </li>
          </ul>
        </div>
      </div>
      <StayinTheLoop />
    </div>
  );
};

export default FooterMain;
