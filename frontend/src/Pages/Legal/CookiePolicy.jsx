import React from 'react';
import Hero from '../../Components/Accessories/Hero';
import Breadcrumb from '../../Components/Components/Common/Breadcrumb';

function CookiePolicy() {
  return (
    <div>
      <Breadcrumb
        category="legal"
        name="Cookie Policy"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type=""
        name="Cookie Policy"
        description="Understand how Living Outdoors uses cookies to enhance your experience."
        hasBorder={false}
      />
      
      <div className="px-4 md:px-8 lg:px-12 py-6 text-gray-700 leading-relaxed">
        
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p>
          This Cookie Policy explains how Living Outdoors, operating under Kingsbury Builders Merchants Ltd, 
          uses cookies on our website <a href="https://www.living-outdoors.co.uk" target="_blank" rel="noopener noreferrer" className="underline">www.living-outdoors.co.uk</a>.
          Cookies allow us to personalize your browsing experience, enhance website functionality, and track website usage 
          to help us improve our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">What Are Cookies?</h2>
        <p>
          Cookies are small files stored on your device (computer, smartphone, or tablet) when you visit a website. 
          They enable the website to recognize your device on future visits, making navigation smoother by remembering 
          your login details, preferences, and other settings.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">How We Use Cookies</h2>
        <p>
          We use cookies on our website to enhance your browsing experience, personalize the content, and tailor our services to 
          your needs. Cookies help us analyze how visitors interact with our website, allowing us to improve functionality and 
          content. By using cookies, we can:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Remember your preferences, such as language or region settings.</li>
          <li>Understand how you use our website, helping us make improvements to optimize your experience.</li>
          <li>Display relevant advertisements based on your browsing history.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">Types of Cookies We Use</h2>
        <p>We use the following types of cookies on our website:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Strictly Necessary Cookies:</strong> These cookies are essential for the website to function. They cannot be disabled 
            in our system and are usually set only in response to your actions, such as logging in or filling out forms.
          </li>
          <li>
            <strong>Analytical Cookies:</strong> These cookies help us monitor website performance and usage. They allow us to 
            see how visitors move around the website, which content is most viewed, and help us improve our website’s structure.
          </li>
          <li>
            <strong>Performance Cookies:</strong> These cookies enhance your experience by enabling additional functionality, 
            such as live chats or custom preferences. Disabling these may affect the website's functionality.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> These cookies collect information to tailor advertisements relevant to you, 
            helping us manage our advertising placements.
          </li>
          <li>
            <strong>Social Media Cookies:</strong> Social media cookies enable you to share our content directly on platforms 
            like Facebook or Twitter. These cookies are set by the social media platforms and contribute to the data they hold 
            on you.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">Third-Party Cookies and Remarketing</h2>
        <p>
          We may also use cookies provided by trusted third-party services. These cookies help us track website performance 
          and user engagement, allowing us to improve your experience on our website. We currently use:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Google Analytics:</strong> Google Analytics helps us understand website usage patterns, tracking metrics like 
            time spent on pages and frequently visited areas. This data is used to make informed improvements.
          </li>
          <li>
            <strong>Google Ads:</strong> Google Ads enables us to reach users who have previously visited our website by displaying 
            relevant ads on external sites. You may see ads based on the pages you visited on our website.
          </li>
          <li>
            <strong>Facebook Pixel:</strong> Facebook Pixel allows us to serve ads on Facebook that align with your interests 
            based on your interaction with our website.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">Disabling Cookies</h2>
        <p>
          You can manage your cookie preferences by adjusting your browser settings to block or delete cookies. However, disabling 
          cookies may impact your experience on our website, limiting some functionalities. For guidance on managing cookies, please 
          refer to your browser’s Help section or visit:
          <br />
          <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="underline">About Cookies</a>
          <br />
          <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="underline">All About Cookies</a>
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have questions about our cookie policy or need assistance managing your preferences, please contact us:
          <br />
          <strong>Email:</strong> <a href="mailto:info@living-outdoors.co.uk" className="underline">info@living-outdoors.co.uk</a>
          <br />
          <strong>Phone:</strong> <a href="tel:02074824661" className="underline">020 7482 4661</a>
          <br />
          <strong>Address:</strong> 61 Caversham Road, Kentish Town, London, NW5 2DH
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Changes to This Cookie Policy</h2>
        <p>
          This cookie policy may be updated periodically to reflect changes in our practices or legal requirements. 
          Please check this page regularly to stay informed about our cookie usage.
        </p>
      </div>
    </div>
  );
}

export default CookiePolicy;
