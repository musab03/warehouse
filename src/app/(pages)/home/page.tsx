import Approach from '@/components/Approach'
import Card from '@/components/Card'
import Clients from '@/components/Clients'
import HeroBanner from '@/components/HeroBanner'
import OfferSection from '@/components/OfferSection'
import ThreeImages from '@/components/ThreeImages'
import Work from '@/components/Work'
import React from 'react'

const page = () => {
    return (
      <>

    <HeroBanner />
    <Work/>
    <Clients/>
    <OfferSection/>
    <Card/>
    <ThreeImages/>
   
      </>
  )
}

export default page