import React from 'react'
import Hero from '../../../Components/Accessories/Hero'
import VideoCard from './VideoCard'


export const videosDataRescources =[
    {
        id: 'how-to-do',
        title: 'How to Do',
        filesUrls: [
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730119763/products/Resources/Videos/How-To-Do/How_to_use_DuoFix_Side-Fixing_Tool.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730119489/products/Resources/Videos/How-To-Do/How_to_Remove_and_Re-fix_Your_Decking-boards.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730119358/products/Resources/Videos/How-To-Do/How_to_install_Plas-Pro_Subframe.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730119245/products/Resources/Videos/How-To-Do/How_to_install_Decking_onto_a_Subframe.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730118843/products/Resources/Videos/How-To-Do/How_to_Build_a_Curved_Deck.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730118993/products/Resources/Videos/Millboard_Installation_Guide.mp4',
          
        ],
      },
    {
        id: 'training-maintainance',
        title: 'Training & Maintainance',
        filesUrls: [
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730120176/products/Resources/Videos/Training%20and%20Maintenance/Mitre_Joint.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730120171/products/Resources/Videos/Training%20and%20Maintenance/Gaps_at_Joints.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730120166/products/Resources/Videos/Training%20and%20Maintenance/Keeping_Board_Straight.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730120164/products/Resources/Videos/Training%20and%20Maintenance/Using_the_Edging.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730120164/products/Resources/Videos/Training%20and%20Maintenance/Getting_Boards_Flush.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730120158/products/Resources/Videos/Training%20and%20Maintenance/Visible_Ends.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730120157/products/Resources/Videos/Training%20and%20Maintenance/Overhang_of_Edging.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730120156/products/Resources/Videos/Training%20and%20Maintenance/Steps.mp4',
          'https://res.cloudinary.com/ddtzxyzex/video/upload/v1730120149/products/Resources/Videos/Training%20and%20Maintenance/Substructure.mp4',

        ],
      },
]

function HowToVideos() {
    return (
      <div className="container mx-auto p-6">
        <Hero
          name="How To Videos"
          description="Watch our how-to videos to learn how to install and maintain your decking and cladding."
        />
        {videosDataRescources.map((section) => (
          <div key={section.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <VideoCard videos={section.filesUrls} />
          </div>
        ))}
      </div>
    );
  }
  
  export default HowToVideos;
  
