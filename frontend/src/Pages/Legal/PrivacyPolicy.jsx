import React from 'react';
import Hero from '../../Components/Accessories/Hero';
import Breadcrumb from '../../Components/Components/Common/Breadcrumb';

function PrivacyPolicy() {
  return (
    <div>
      <Breadcrumb
        category="legal"
        name="Privacy Policy"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type=""
        name="Privacy Policy"
        description="Learn how Living Outdoors handles your personal information and respects your privacy rights."
        hasBorder={false}
      />
      
      <div className="px-4 md:px-8 lg:px-12 py-6 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold mb-4">Introduction</h2>
        <p>
          This Privacy Policy explains how Living Outdoors, as an authorized reseller of Millboard products, collects, uses, stores, and shares your personal data. We are committed to protecting your privacy and ensuring that your information is handled securely and transparently.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Who We Are</h2>
        <p>
          Living Outdoors operates under Kingsbury Builders Merchants Ltd. as an authorized reseller of Millboard products in the UK. This policy applies to all personal data collected on our website, <a href="https://www.living-outdoors.co.uk" target="_blank" rel="noopener noreferrer" className="underline">www.living-outdoors.co.uk</a>.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">What Data We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contact details (name, email, phone number, address) when you make an inquiry or place an order.</li>
          <li>Information about your preferences and interests, collected through cookies and similar tracking technologies.</li>
          <li>Communication history, including emails and phone calls for customer service purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">How We Use Your Data</h2>
        <p>We use your personal data for the following purposes:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>To process and fulfill your orders and requests for information.</li>
          <li>To communicate with you about promotions, offers, and updates relevant to Millboard products.</li>
          <li>To analyze and improve our website performance and customer experience.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">Sharing Your Data</h2>
        <p>
          We may share your personal data with trusted third parties, including Millboard for product-related support, and service providers who assist us with order processing and website management. We do not sell your data to any external companies.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Data Retention</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Typically, this means we will store your data for the duration of your interaction with us and for up to 12 months thereafter.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Your Rights</h2>
        <p>You have the following rights under GDPR regarding your personal data:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The right to access your data and receive a copy of it.</li>
          <li>The right to request corrections to inaccurate or incomplete data.</li>
          <li>The right to request deletion of your data, where applicable.</li>
          <li>The right to restrict or object to processing of your data in certain circumstances.</li>
          <li>The right to withdraw consent where processing is based on consent.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">Security</h2>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of online data transmission is completely secure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p>
          If you have questions about this policy or wish to exercise your data rights, please contact us at:
          <br />
          <strong>Email:</strong> <a href="mailto:info@living-outdoors.co.uk" className="underline">info@living-outdoors.co.uk</a>
          <br />
          <strong>Phone:</strong> <a href="tel:02074824661" className="underline">020 7482 4661</a>
          <br />
          <strong>Address:</strong> 61 Caversham Road, Kentish Town, London, NW5 2DH
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">Changes to This Policy</h2>
        <p>
          We may update this policy occasionally to reflect changes in legal requirements or business practices. The latest version will always be available on our website.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
