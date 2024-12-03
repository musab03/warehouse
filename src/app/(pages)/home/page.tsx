
import Card from '@/components/Card'
import Clients from '@/components/Clients'
import FAQ from '@/components/FAQ'
import Features from '@/components/Features'
import HeroBanner from '@/components/HeroBanner'



import Work from '@/components/Work'
import React from 'react'

const page = () => {
    return (
      <>

        <HeroBanner />
        <Features/>
    <Work/>
        <Clients />
      
        <Card /> 
        <FAQ/>
      </>
  )
}

export default page