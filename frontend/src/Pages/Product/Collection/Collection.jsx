import React from 'react'
import Hero from './Hero'
import Breadcrumb from '../../../Components/Components/Common/Breadcrumb'
import CustomerReview from '../../../Components/Components/Common/CustomerReview'
import TitleWithLine from '../../../Components/Components/Common/TitleWithLine'
import CollectionList from './CollectionList'
import DeckingBenefit from './DeckingBenefit'

function Collection() {
  return (
    <div className=''>
        <Breadcrumb category={"decking"} subCategory={"collection"}  />
        <Hero/>
        <TitleWithLine 
        title="millboard" 
        subtitle="collection" 
        lineWidth="w-16"           // Custom width for the green line (optional)

        subtitleSpace={'\u00A0\u00A0 \u00A0\u00A0'} // Adding non-breaking spaces before the subtitle (optional)
      />
        <CollectionList/>
        <DeckingBenefit/>
        <CustomerReview quote="The depth in these boards is so impressive. They look unmistakably natural, even close up." name="David" designation="Homeowner"/>
        
    </div>
  )
}

export default Collection