import React from 'react';
import Hero from '../../Components/Accessories/Hero';
import Breadcrumb from '../../Components/Components/Common/Breadcrumb';

function TermsConditions() {
  return (
    <div>
      <Breadcrumb
        category="legal"
        name="Terms & Conditions"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type=""
        name="Terms & Conditions"
        description="Understand the terms and conditions for using our services and purchasing products."
        hasBorder={false}
      />

      <div className="px-4 md:px-8 lg:px-12 py-6 text-gray-700 leading-relaxed">
        
        <h2 className="text-xl font-semibold mb-4">1. Interpretation</h2>
        <p>
          In these terms, "Living Outdoors" refers to Kingsbury Builders Merchants Ltd, operating as an authorized reseller of 
          Millboard products. "Customer" refers to the purchaser of goods from Living Outdoors.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">2. Basis of Contract</h2>
        <p>
          These terms apply to all sales of goods from Living Outdoors. By placing an order, you agree to be bound by these terms. 
          All orders must be approved by Living Outdoors to form a contract.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">3. Goods</h2>
        <p>
          The descriptions of the goods are based on Millboard’s product catalog. While we strive for accuracy, all details are 
          approximate and may vary slightly. Please refer to product descriptions on the Millboard website for specifics.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">4. Delivery</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Living Outdoors will confirm delivery times after order acceptance. Delivery may be subject to additional charges based on the 
            delivery location.
          </li>
          <li>
            Any stated delivery dates are estimates and not binding. Living Outdoors will not be liable for delays caused by external factors.
          </li>
          <li>
            If the Customer fails to accept delivery within the agreed timeframe, additional storage costs may apply.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">5. Title and Risk</h2>
        <p>
          Title and risk in the goods pass to the Customer upon delivery. Until payment is received in full, Living Outdoors reserves ownership of the goods.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">6. Price and Payment</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            All prices are provided at the time of order and may exclude VAT and delivery charges.
          </li>
          <li>
            Payment is due at the time specified by Living Outdoors. Failure to make timely payments may result in order cancellation.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">7. Returns and Refunds</h2>
        <p>
          Goods may only be returned with prior written approval. Returns may be subject to restocking fees, and all return shipping costs 
          will be borne by the Customer. Goods must be returned in their original, resalable condition.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">8. Limitation of Liability</h2>
        <p>
          Living Outdoors shall not be liable for any indirect or consequential losses. The maximum liability is limited to the purchase 
          price of the goods, except in cases of death or personal injury caused by negligence.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">9. Force Majeure</h2>
        <p>
          Living Outdoors shall not be liable for delays or failures caused by events beyond reasonable control, including but not limited 
          to natural disasters, transportation issues, and government restrictions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">10. Governing Law</h2>
        <p>
          These terms are governed by the laws of England and Wales. Any disputes arising from these terms shall be subject to the 
          exclusive jurisdiction of the courts of England and Wales.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">11. Contact Information</h2>
        <p>
          If you have any questions or require assistance, please contact us:
          <br />
          <strong>Email:</strong> <a href="mailto:info@living-outdoors.co.uk" className="underline">info@living-outdoors.co.uk</a>
          <br />
          <strong>Phone:</strong> <a href="tel:02074824661" className="underline">020 7482 4661</a>
          <br />
          <strong>Address:</strong> 61 Caversham Road, Kentish Town, London, NW5 2DH
        </p>

      </div>
    </div>
  );
}

export default TermsConditions;
