import React from 'react'
import { ChevronRight , Ellipsis } from 'lucide-react';
import plantImg from '../assets/images/AglaonemaPlant.png'

const Buycard = () => {
  return (
    
    <div className='relative flex flex-col items-center right-4 w-[40%] h-[300px]  mx-auto p-5 mt-16 sm:w-[80%] sm:p-6 sm:mt-20 md:w-[450px] md:h-96 md:p-6 md:mt-24 md:flex-col lg:w-96 lg:h-[450px] lg:p-10 lg:mt-28 lg:mr-20 bg-white/10 backdrop-blur-lg border border-white/40 text-white rounded-b-[60px] rounded-t-[80px]  md:mr-5 sm:mx-auto sm:mr-2 sm:flex-col'>
        <div className="flex justify-center -mt-24 mb-4 absolute -top-30 left-1  z-20">
            <img
             src={plantImg}
            alt="Aglaonema plant"
            className="w-40 sm:w-48 md:w-56 mt-35 lg:w-96 lg:-mt-3 sm:mt-25 sm:ml-10 md:mt-28 object-contain drop-shadow-2xl "
            />
        </div>
        <div className='lg:mt-40 mt-20 md:mt-36 sm:mt-15 lg:ml-10 sm:-ml-1'>
        <p className='text-lg sm:text-xl '>Indoor Plant</p>
        <div className='flex justify-between md:justify-between items-center mt-2'>
            <p className='text-xl lg:text-3xl md:text-3xl sm:text-3xl font-semibold'>Aglaonema plant</p>
            <ChevronRight className='mt-3 lg:ml-15 sm:ml-5 font-bold'/>
        </div>
        <button className='cursor-pointer border-2 border-white h-10 text-sm lg:text-lg md:text-lg sm:text-lg px-1 lg:px-6 md:px-6 sm:px-6  rounded-lg mt-5'>Buy Now</button>
        <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-1.5 w-5 rounded-full bg-white" />
            <span className="h-1.5 w-2 rounded-full bg-gray-500" />
            <span className="h-1.5 w-2 rounded-full bg-gray-500" />
        </div>
        </div>
    </div>
  )
}

export default Buycard