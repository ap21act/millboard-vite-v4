import React from 'react'
import Carousel from './Carousel.WhyMillboard'

function WhyMillboard() {
  return (
    <Carousel
    title  = "Why Millboard?"
    slides={[
        {
            image: {
                src: "https://millboard.widen.net/content/5pradejzus/web/MDE176A_Enhanced%20Grain_Antique%20Oak_Chevron%201.jpg?crop=yes&w=920&h=605&itok=GmYYowoL",
                alt: "Image 1 Alt Text",
            },
            title: "Why Millboard?",
            textContent: {
                heading: "Why Millboard?",
                subheading: "A passion for quality, a dedication to performance",
                description: "Enduring beauty, from a family-run business committed to British craftsmanship and visual distinction.",
            },
            link: {
                url: "/about-us",
                text: "Read More",
            },
        },
        {
            image: {
                src: "https://millboard.widen.net/content/bpkhr1nnjm/web/MDE126D_Enhanced%20Grain%20SB_Smoked%20Oak_Hero%201.jpg?crop=yes&w=920&h=605&itok=z8oHgXHx",
                alt: "Image 2 Alt Text",
            },
            // title: "Why Choose Us?",
            textContent: {
                heading: "Why Millboard?",
                subheading: "Unparalleled attention to detail",
                description: "Thanks to our unique material and innovative design, we deliver a product that is both beautiful and durable.",
            },
            link: {
                url: "/about-us",
                text: "Learn More",
            },
        },
        {
            image: {
                src: "https://millboard.widen.net/content/hjypl9spvr/web/MDE360D_Shadow%20Line%20Plus_Smoked%20Oak_Lifestyle_%20Cameo%20cabin%20closeup.jpg?crop=yes&w=920&h=605&itok=EgkAD_9s",
                alt: "Image 2 Alt Text",
            },
            // title: "Why Choose Us?",
            textContent: {
                heading: "Why Millboard?",
                subheading: "Creaed using recycled materials and no timber",
                description: "Our decking is made from a unique blend of natural minerals and polymer resin, creating a product that is both beautiful and sustainable.",
            },
            link: {
                url: "/about-us",
                text: "Learn More",
            },
        },
        // Add more slides as needed
    ]}
/>

  )
   
}

export default WhyMillboard