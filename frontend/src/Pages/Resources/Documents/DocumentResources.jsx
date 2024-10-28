import React from 'react'
import Hero from '../../../Components/Accessories/Hero'
import PDFDownloadCard from './PDFDownloadCard'

function DocumentResources() {
  return (
    <div>
        <Hero
        name="RESOURCES"
        description="Find your CAD drawings and product libraries here, along with our contact form to request information about our informative CPD sessions."
      />
      <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-6 p-8">
      <PDFDownloadCard
        fileUrl="https://res.cloudinary.com/ddtzxyzex/image/upload/v1729894522/products/Home/Videos/Millboardt_Decking_Installation_Guide_UK.pdf"
        
      />
      <PDFDownloadCard
        fileUrl="https://res.cloudinary.com/ddtzxyzex/image/upload/v1729894522/products/Home/Videos/Millboard_Decking_Installation_Guide_UK.pdf"
        fileSize="5.3 MB"
      />
      <PDFDownloadCard
        fileUrl="https://res.cloudinary.com/ddtzxyzex/image/upload/v1729894522/products/Home/Videos/Millboard_Decking_Installation_Guide_UK.pdf"
        
      />
      <PDFDownloadCard
        fileUrl="https://res.cloudinary.com/ddtzxyzex/image/upload/v1729894522/products/Home/Videos/Millboard_Decking_Installation_Guide_UK.pdf"
        
      />
      <PDFDownloadCard
        fileUrl="https://res.cloudinary.com/ddtzxyzex/image/upload/v1729894522/products/Home/Videos/Millboard_Decking_Installation_Guide_UK.pdf"
        
      />
      <PDFDownloadCard
        fileUrl="https://res.cloudinary.com/ddtzxyzex/image/upload/v1729894522/products/Home/Videos/Millboard_Decking_Installation_Guide_UK.pdf"
        
      />
    </div>


      </div>
    </div>
  )
}

export default DocumentResources