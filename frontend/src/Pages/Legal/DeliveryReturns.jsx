import React from 'react';
import Hero from '../../Components/Accessories/Hero';
import Breadcrumb from '../../Components/Components/Common/Breadcrumb';

function DeliveryReturns() {
  return (
    <div>
      <Breadcrumb
        category="legal"
        name="Delivery & Returns"
        disableClick={{ home: false, category: true, subCategory: true, type: false }}
      />
      <Hero
        type=""
        name="Delivery & Returns"
        description="Learn about our delivery processes and return policies at Living Outdoors."
        hasBorder={false}
      />

      <div className="px-4 md:px-8 lg:px-12 py-6 text-gray-700 leading-relaxed">
        
        <h2 className="text-xl font-semibold mb-4">1. Interpretation</h2>
        <p>
          Definitions for this policy: "Living Outdoors" refers to Kingsbury Builders Merchants Ltd, trading as Living Outdoors. "Customer" 
          refers to the purchaser of products. "Goods" means products sold to the Customer by Living Outdoors.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">2. Basis of Contract</h2>
        <p>
          These terms cover the sale of goods from Living Outdoors to the Customer. Orders placed by the Customer form an offer, 
          which Living Outdoors may accept by issuing a written confirmation.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">3. Goods</h2>
        <p>
          All goods are described in Living Outdoors' catalogue and product listings, as adjusted by any specifications agreed 
          in writing between the Customer and Living Outdoors.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">4. Delivery</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Goods will be delivered to the address provided at the time of order. Delivery costs may apply.</li>
          <li>Estimated delivery dates are approximate. Living Outdoors is not liable for delays due to unforeseen circumstances.</li>
          <li>If delivery is unsuccessful due to Customer unavailability, the Customer may incur additional storage or redelivery charges.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">5. Title and Risk</h2>
        <p>
          Title and risk transfer to the Customer upon delivery. Living Outdoors retains ownership until full payment is received.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">6. Price and Payment</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Prices are stated at the time of order and exclude VAT and any applicable delivery fees.</li>
          <li>Full payment is due per the terms provided in the invoice.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-4">7. Returns and Refunds</h2>
        <p>
          Returns are only accepted with prior written approval. Goods must be returned unused and in resalable condition, and 
          a restocking fee of 15% may apply. Bespoke items and perishable products are not eligible for return.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">8. Limitation of Liability</h2>
        <p>
          Living Outdoors' liability is limited to the price of goods sold, except in cases of personal injury or death caused by negligence.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">9. Force Majeure</h2>
        <p>
          Living Outdoors is not liable for delays or non-performance due to events beyond its reasonable control, such as natural disasters, 
          strikes, or government regulations.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-4">10. Contact Information</h2>
        <p>
          For further inquiries, please contact us:
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

export default DeliveryReturns;
