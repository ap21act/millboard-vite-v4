import React from 'react'
import Carousel from '../../../Components/Homepage/WhyMillboard/Carousel.WhyMillboard'
import { extractNameFromUrl } from '../../../Utils'

function CladdingBenifit() {
  return (
    <Carousel
    title  = "Benefits of our cladding"
    slides={[
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730365640/products/cladding/carousel/Case_Study_MCL360D_Shadow_Line_Smoked_Oak_Project_Imagery_The_Lea_and_La_Vigne_4.webp",
            },
            title: "Why Millboard?",
            textContent: {
                heading: "Durable, yet lightweight",
                subheading: " Our cladding is exceptionally lightweight, ",
                description: "Making installation a breeze and reducing the strain on your structure. Our system is designed for quick and straightforward installation, reducing labor costs and project timelines..",
            },
            
        },
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730365643/products/cladding/carousel/MCBF360A_Board_Batten_Antique_Oak_Lifestyle_Texture.webp",
            },
            title: "Why Millboard?",
            textContent: {
                heading: "Moulded from real oak",
                subheading: "  We've taken the essence of oak and elevated it to new heights.  ",
                description: "Our cladding is moulded from carefully selected pieces of real oak, replicating the intricate detail of natural wood grain. The result is a product that looks and feels just like the real thing, but with all the benefits of a composite material.",
            },
            
        },
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730365645/products/cladding/carousel/Case_Study_MCL360R_Shadow_Line_Burnt_Cedar_Project_Imagery_Semley_Road_2.webp",
            },
            title: "Why Millboard?",
            textContent: {
                heading: "Distinctive designs",
                subheading: "  Envello Cladding is adaptable to various architectural styles and projects.  ",
                description: "Our cladding is available in a range of styles, from traditional to contemporary, and can be used to create a variety of looks. Whether you're looking to add a modern twist to a classic design or create a sleek, contemporary finish, Envello Cladding has you covered.",
            },
            
        },
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730365649/products/cladding/carousel/MDE360D_Shadow_Line_Plus_Smoked_Oak_Lifestyle__Cameo_cabin_closeup.webp",
            },
            title: "Why Millboard?",
            textContent: {
                heading: "Durability Beyond Compare",
                subheading: " Designed to withstand the harshest of weather conditions. ",
                description: "Our cladding is engineered to withstand the elements, making it the perfect choice for outdoor applications. With exceptional resistance to moisture, UV rays, and temperature fluctuations, our cladding will maintain its appearance and performance for years to come.",
            },
            
        },
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730365639/products/cladding/carousel/Machine_5_Ryton_Factory_1.webp",
            },
            title: "Why Millboard?",
            textContent: {
                heading: "UK Made and warrantied",
                subheading: "  British craftsmanship, innovation, and unwavering dedication to quality. ",
                description: "Our cladding is proudly made in the UK, ensuring the highest standards of quality and craftsmanship. We stand behind our products with a comprehensive warranty, giving you peace of mind that your investment is protected.",
            },
            
        },
        {
            image: {
                src: "https://res.cloudinary.com/ddtzxyzex/image/upload/v1730365647/products/cladding/carousel/MCL360A_Shadow_Line_Plus_Antique_Oak_Lifestyle_Cameo_2.webp",
            },
            title: "Why Millboard?",
            textContent: {
                heading: " Fire performance ",
                subheading: "Fire-rated to meet the highest safety standards. ",
                description: "Shadow Line+ and Board & Batten+ cladding boards are BS EN 13501-1 certified with a D-s3, d0 rating. Suitability for specific locations should be verified by certified building professionals. Millboard is not liable for incorrect specifications or installations that do not comply with government regulations. Refer to relevant government sites for current guidelines; in England, see Approved Document B. ",
            },
            
        },

    ]}
/>

  )
   
}

export default CladdingBenifit