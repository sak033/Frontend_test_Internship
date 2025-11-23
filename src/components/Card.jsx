import React from 'react'

const Card = () => {
  return (
    <div>
        <div className='text-white max-w-3xl sm:px-6 md:px-10 py-30 px-10 m-4'>
            <h1 className=' font-semibold  sm:text-5xl md:text-7xl lg:text-8xl tracking-wide '>Earth's Exhale</h1>
            <p className='text-base sm:text-lg md:text-xl mt-3 max-w-2xl'>"Earth's Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
            <div className='flex gap-3 lg:mt-3 '>
                <button className='border-2 sm:text-base px-20 lg:mt-3 md:mt-5 sm:mt-2 w-25 h-10  border-white  sm:px-1 md:px-3   rounded-xl  text-white'>Buy Now</button>
                <i className="ri-play-circle-line sm:text-5xl  lg:-mt-1 sm:mt-1 md:py-2 md:text-6xl "></i>
                <p className=' font-medium sm:text-base md:text-2xl lg:mt-3 md:mt-5 sm:mt-2 font-Indie md:py-2'>Live Demo...</p>
            </div>
        </div>
    </div>
  )
}

export default Card