import React from 'react'
import Carousel from '../../../Components/Homepage/WhyMillboard/Carousel.WhyMillboard'

function DeckingBenefit() {
  return (
    <Carousel
    title  = "Benefits of our decking"
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
                url: "/read-more",
                text: "Read More",
            },
        },
        {
            image: {
                src: "https://millboard.widen.net/content/5pradejzus/web/MDE176A_Enhanced%20Grain_Antique%20Oak_Chevron%201.jpg?crop=yes&w=920&h=605&itok=GmYYowoL",
                alt: "Image 2 Alt Text",
            },
            // title: "Why Choose Us?",
            textContent: {
                heading: "Why Choose Us?",
                subheading: "Quality materials, innovative design",
                description: "We bring together the best of craftsmanship and sustainability to deliver unmatched beauty.",
            },
            link: {
                url: "/learn-more",
                text: "Learn More",
            },
        },
        // Add more slides as needed
    ]}
/>

  )
   
}

export default DeckingBenefit