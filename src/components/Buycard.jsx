import React from 'react'
import { ChevronRight , Ellipsis } from 'lucide-react';
import plantImg from '../assets/images/AglaonemaPlant.png'

const Buycard = () => {
  return (
    
    <div className='relative flex w-lg h-1/12  bg-white/10 backdrop-blur-lg border border-white/40 text-white lg:mt-30 md:mt-24 lg:mr-20 rounded-b-[60px] rounded-t-[80px] p-10 md:w-[450px] lg:w-96 lg:h-110 md:mr-5 md:p-6
      sm:w-[50%] sm:h-96 sm:mx-auto sm:mt-10 sm:mr-2 sm:flex-col'>
        <div className="flex justify-center -mt-24 mb-4 absolute -top-30 left-1  z-20">
            <img
             src={plantImg}
            alt="Aglaonema plant"
            className="w-xl h-auto lg:-mt-3 sm:mt-13 md:mt-5 object-contain drop-shadow-2xl "
            />
        </div>
        <div className='lg:mt-40 md:mt-36 sm:mt-28 lg:ml-10 sm:-ml-1'>
        <p className='text-xl '>Indoor Plant</p>
        <div className='flex justify-between'>
            <p className='text-4xl font-semibold'>Aglaonema plant</p>
            <ChevronRight className='mt-3 lg:ml-15 sm:ml-5 font-bold'/>
        </div>
        <button className=' border-2 border-white h-11 text-xl px-8 rounded-lg mt-5'>Buy Now</button>
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