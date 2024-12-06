import React from 'react'
import Banner from '../../servicepage/components/Banner'

const HeroBanner = () => {
  return (
    <section
    className=" bg-[url('https://cdn.pixabay.com/photo/2015/11/06/11/48/warehouse-1026496_1280.jpg')] bg-cover bg-center bg-no-repeat w-full max-w-[100rem] mx-auto h-[80vh] flex items-center justify-center overflow-hidden"
  >

    

    {/* Hero Content */}
    <div
      className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center transform transition-all duration-1000 ease-out">
      <h1 className=" inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-orange-500 text-3xl font-extrabold  sm:text-4xl md:text-8xl ">
      About Us
      </h1>
     
  
    </div>

    
  </section>
  )
}

export default HeroBanner