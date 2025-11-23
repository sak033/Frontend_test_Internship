import React from 'react'
import { ChevronRight , Ellipsis } from 'lucide-react';



const BestO2 = () => {
  return (
    
        <>
        <div className='flex justify-center'>
        <div className='relative flex justify-between gap-6  lg:w-7xl lg:h-87 md:w-[800px] md:h-64 md:flex-col md:items-center md:text-center sm:w-[360px] sm:h-auto sm:flex-col sm:items-center sm:text-center bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white m-8 p-10'>
            <div>
                <img src="./src/assets/images/AglaonemaPlant.png" alt="Aglaonema Plant"  className='absolute lg:-top-55 lg:left-60 lg:w-130  md:-top-28 md:left-30 md:-translate-x-1/2 md:w-72 sm:-top-20 sm:left-1/2 sm:-translate-x-1/2 sm:w-60 z-20'/>
            </div>
            <div className='lg:w-[600px] lg:h-auto  md:w-[600px] md:h-auto sm:w-[320px] sm:h-auto lg:ml-100 lg:-mt-10 md:ml-52 md:-mt-14 md:px-8 md:text-center sm:ml-0 sm:mt-32 sm:px-5 sm:text-center'>
                <h1 className='lg:text-3xl font-semibold lg:-ml-18 md:-ml-8 md:text-2xl sm:text-xl '>We Have Small And Best O2 Plants Collection’s</h1>
                <p className='text-sm text-justify mt-4'>Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere</p>
                <p className='text-sm text-justify mt-0.5'>through the process of photosynthesis.</p>
                <p className='text-sm text-justify mt-4'>Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and</p>
                <p className='text-sm text-justify mt-0.5'>trichloroethylene. This makes the air cleaner and healthier to breathe.</p>
                <div className='flex md:justify-center sm:justify-center'>
                <button className='border-2 border-white rounded-sm px-3 py-1 lg:ml-65 md:ml-7 sm:ml-29 m-2'>Explore</button>
                <div className='flex'>
                <ChevronRight className='mt-3.5 lg:ml-90 md:ml-32 w-3xs  h-8 rotate-180 font-bold text-gray-500 sm:-ml-10'/>
                <div className=' flex -ml-25 mt-4 '>
                <p>01/</p>
                <p className='text-sm mt-0.5'>04</p>
                </div>
                <ChevronRight className='mt-3.5 -ml-25 w-3xs h-8 font-bold '/>
                </div>
                </div>
            </div>
        </div>
        
        </div>
        <div className='flex justify-center mt-20'>
          <img src="./src/assets/Icons/ThreeDots.svg" alt="Carosal Dots" className='text-sm' />
        </div>
    </>
  )
}

export default BestO2