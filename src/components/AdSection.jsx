import React from 'react'

import adBanner from '../assets/add 1.png' // Imported image

function AdSection() {
  return (
    <div className="relative flex justify-center items-center w-auto mx-auto md:mx-auto mt-4">
      <img src={adBanner} alt="Mid Month Sale Banner" className="h-auto w-full rounded-full object-cover" />
      <button className="absolute h-10 w-10 md:h-16 md:w-16 bg-yellow-300 text-pink-950 font-bold rounded-full right-2 md:right-20 animate-pulse">
        Shop Now
      </button>
    </div>
  )
}

export default AdSection
