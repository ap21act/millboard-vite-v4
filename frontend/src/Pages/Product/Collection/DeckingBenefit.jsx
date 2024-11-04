import React from 'react'
import Carousel from '../../../Components/Homepage/WhyMillboard/Carousel.WhyMillboard'

function DeckingBenefit() {
  return (
    <Carousel
    title  = "Benefits of our decking"
    slides={[
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730366911/products/decking/collection/carousel/MDE176L_Enhanced_Grain_Limed_Oak_Lifestyle_detail.webp",
            },

            textContent: {
                heading: "Low Maintenance",
                subheading: "Beautiful, durable, and easy to clean",
                description: "Our decking is designed to withstand the elements and requires minimal maintenance. Spend more time enjoying your outdoor space and less time cleaning.",
            },
            // link: {
            //     url: "/read-more",
            //     text: "Read More",
            // },
        },
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730366915/products/decking/collection/carousel/MDE126A_Enhanced_Grain_SB_Antique_Oak_Cameo_5.webp",
            },

            textContent: {
                heading: "Slip-Resistant Safety",
                subheading: "Safety first, always",
                description: "Our decking is designed to be slip-resistant, making it safe for children and pets to play on. Enjoy peace of mind knowing that your outdoor space is safe for everyone.",
            },
            // link: {
            //     url: "/read-more",
            //     text: "Read More",
            // },
        },
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730366906/products/decking/collection/carousel/Case_Study_Gamekeepers_Stratford_upon_Avon_10.webp",
            },

            textContent: {
                heading: "Durability Beyond Compare",
                subheading: "Built to last",
                description: "Our decking is designed to withstand the elements and requires minimal maintenance. Spend more time enjoying your outdoor space and less time cleaning.",
            },
            // link: {
            //     url: "/read-more",
            //     text: "Read More",
            // },
        },
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730366918/products/decking/collection/carousel/MDE126A_Enhanced_Grain_SB_Antique_Oak_Lifestyle_Close_Up.webp",
            },

            textContent: {
                heading: "Moulded from Real Oak",
                subheading: "The look and feel of real wood",
                description: "Our decking is not just inspired by oak, it's moulded from real oak, setting a new standard for outdoor elegance and timeless beauty. ",
            },
            // link: {
            //     url: "/read-more",
            //     text: "Read More",
            // },
        },
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730366908/products/decking/collection/carousel/DuraFix_Screw_Installation_1.webp",
            },

            textContent: {
                heading: "'Lost Head' Fixing System",
                subheading: "A seamless invisible finish",
                description: "Millboard uses specially developed screws that we call our 'Lost Head' Fixing System which is designed to be virtually hidden, ensuring that the focus remains on the stunning beauty of your deck.",
            },
            // link: {
            //     url: "/read-more",
            //     text: "Read More",
            // },
        },
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/f_webp/q_auto:low/v1730366913/products/decking/collection/carousel/Machine_5_Ryton_Factory_1.webp",
            },

            textContent: {
                heading: "UK Made and warrantied",
                subheading: "British craftsmanship, innovation, and unwavering dedication to quality.",
                description: "Our cladding is proudly made in the UK, ensuring the highest standards of quality and craftsmanship. We stand behind our products with a comprehensive warranty, giving you peace of mind that your investment is protected.",
            },
            link: {
                url: "/why/explore/why-millboard",
                text: "About Us",
            },
        },

    ]}
/>

  )
   
}

export default DeckingBenefit