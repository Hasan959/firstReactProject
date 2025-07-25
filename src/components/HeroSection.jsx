import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col px-4 items-center justify-center h-[90vh]' style={{backgroundImage: "url('/src/assets/hero-img.jpg')",backgroundSize:'cover',backgroundPosition:'center'}}>
        <h2 className='text-4xl md:text-6xl mb-4 font-bold'> welcome to my website</h2>
        <p className='text-lg md:text-xl mb-4'>your journey</p>
        <button className='bg-white text-indigo-600 font-medium cursor-pointer hover:bg-gray-200 px-6 py-2 rounded '>Purchase product</button>
    </div>
  )
}

export default HeroSection