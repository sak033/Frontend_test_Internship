import React from 'react';
import plantImg from '../assets/images/logo_plant.png'

const Footer =()=>{
  return(
    <div className='flex justify-center'>
   <div className='grid grid-cols-3 gap-0 lg:gap-5 md:gap-3 sm:gap-0 -mt-40 -ml-15 lg:-ml-5 md:-ml-14 sm:-ml-20 p-20 sm:p-32'>
    <div className='mt-50'>
    <div className='flex -ml-3'>
        <img 
          src={plantImg} 
          alt="logo" width={'30px'} height={'30 px'}
          className="w-10 h-10 lg:w-15 lg:h-15 md:w-15 mg:h-15 sm:w-15 sm:h-15 object-contain"
        />
        <p className='font-bold text-white mt-2.5 text-2xs lg:text-2xl md:text-2xl sm:text-2xl'>FloraVision.</p>
    </div>
    <p className='text-white font-thin text-xs lg:text-xl lg:font-semibold sm:font-thin'>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
    <div className='flex gap-6 mt-20 lg:mt-11 md:mt-11 sm:mt-11'>
    <p className='font-bold text-white'>FB</p>
    <p className='font-bold text-white'>TW</p>
    <p className='font-bold text-white'>LI</p>
    </div>
    </div> 

      <div className='mt-48 ml-5 lg:ml-20 md:ml-20 sm:ml-14 '>
        
        <ul className=' text-white sm:font-thin'>
          <li className='text-xs lg:text-xl font-bold'>Quick Link's</li>
          <ul className='text-xs lg:text-xl md:text:xl'>
          <li className='cursor-pointer underline hover:text-gray-200 mt-7 '><a href="#home">Home</a></li>
          <li className='cursor-pointer underline hover:text-gray-200  mt-2'>
           <a href="#planttype">Type's of plant's </a>
          </li>
          <li className='cursor-pointer underline hover:text-gray-200 mt-2'><a href="#contact">Contact</a></li>
          <li className='cursor-pointer underline hover:text-gray-200 mt-2'>Privacy</li>
        </ul>
        </ul>
    
      </div>
      <div className='mt-48 lg:ml-20 sm:ml-15'>
        <p className='font-bold text-xs lg:text-xl  text-white'>For Every Update.</p>
        <div className='relative flex'>
        <input
          type="text"
          className="outline-2 outline-white mt-7 lg:w-[800px] md:w-[600px] sm:w-[200px] sm:max-h-10 text-white outline-offset-2 rounded-md lg:p-3 md:p-0.5"
          placeholder="Enter Email"
        />
        <button className='cursor-pointer  border-2 font-bold bg-white border-white mt-10  lg:mt-8 sm:mt-8 text-#1B2316 rounded-sm px-2 py-1 sm:px-1 sm:py-0.5 -ml-26 lg:-ml-25 md:-ml-25 sm:-ml-25  m-4'>SUBSCRIBE</button>
        </div>
        <div className=''>
        <p className='text-white text-sm md:text-sm sm:text-sm  mt-33 lg:mt-20 md:mt-33 sm:mt-38'>FloraVision © all right reserve</p>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Footer