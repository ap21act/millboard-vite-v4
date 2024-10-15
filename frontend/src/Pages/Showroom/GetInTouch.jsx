import React from 'react';
import CustomLink from '../../Components/Components/Common/CustomLink';

// Define the ContactDetailsMap component
function GetInTouch() {
  // Function to handle location request for "Get directions"
  const handleGetDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const destination = 'Millboard+Midlands+Showroom+Unit+C,+Castle+Court+Bodmin+Road,+Coventry+CV2+5DB';
          const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}`;
          window.open(googleMapsUrl, '_blank');
        },
        (error) => {
          console.error('Geolocation error:', error);
          alert('Unable to access your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div className="flex-1">
      {/* Contact Info */}
      <div className="mb-8 mt-4 px-16">
        <h3 className="text-2xl font-semibold font-F37-light mb-6">Get In Touch</h3>
        <p className="text-lg mb-4">
          <a href="tel:+442476439943" className="text-xl font-F37-light">024 7643 9943</a>
        </p>
        <p className="text-lg mb-4">
          <a href="mailto:info@thelivingoutdoors.com" className="text-xl font-F37-light">info@thelivingoutdoors.com</a>
        </p>
        <CustomLink to="/" className=" text-2xl font-F37-light">Visit Website</CustomLink>
      </div>

      {/* Address and Map */}
      <div className="mb-8 px-16">
        <h3 className="text-xl m-2 font-F37-light">Address</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className=" shadow-md mb-4"
        ></iframe>
        <address className="not-italic text-xl font-F37-light">
          Millboard Midlands Showroom<br />
          Unit C, Castle Court<br />
          Bodmin Road<br />
          Coventry<br />
          CV2 5DB<br />
          <a 
            href="#"
            onClick={handleGetDirections}
            className=" pt-2 underline cursor-pointer"
          >
            Get directions
          </a>
        </address>
      </div>
    </div>
  );
}

export default GetInTouch;
