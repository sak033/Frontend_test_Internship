import React from 'react';

const Footer =()=>{
  return(
    <div className='flex justify-center'>
   <div className='grid grid-cols-3 lg:gap-5 md:gap-3 sm:gap-0 -mt-40 lg:-ml-5 md:-ml-14 sm:-ml-20 p-20 sm:p-32'>
    <div className='mt-50'>
    <div className='flex -ml-3'>
        <img 
          src="./src/assets/images/logo_plant.png" 
          alt="logo" width={'30px'} height={'30 px'}
          className="w-15 h-15 object-contain"
        />
        <p className='font-bold text-white mt-2.5 text-2xl'>FloraVision.</p>
    </div>
    <p className='text-white sm:font-thin'>"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
    <div className='flex gap-6 mt-11'>
    <p className='font-bold text-white'>FB</p>
    <p className='font-bold text-white'>TW</p>
    <p className='font-bold text-white'>LI</p>
    </div>
    </div> 

      <div className='mt-48 ml-20'>
        
        <ul className=' text-white sm:font-thin'>
          <li className='font-bold'>Quick Link's</li>
          <li className='cursor-pointer underline hover:text-gray-200 mt-7 '>Home</li>
          <li className='cursor-pointer underline hover:text-gray-200  mt-2'>
           Type's of plant's
          </li>
          <li className='cursor-pointer underline hover:text-gray-200 mt-2'>Contact</li>
          <li className='cursor-pointer underline hover:text-gray-200 mt-2'>Privacy</li>
        </ul>
    
      </div>
      <div className='mt-48 lg:ml-20 sm:ml-15'>
        <p className='font-bold text-white'>For Every Update.</p>
        <div className='flex'>
        <input
          type="text"
          className="outline-2 outline-white mt-7 lg:w-[800px] md:w-[600px] sm:w-[200px] sm:max-h-10 text-white outline-offset-2 rounded-md lg:p-3 md:p-0.5"
          placeholder="Enter Email"
        />
        <button className='border-2 font-bold bg-white border-white lg:mt-8 sm:mt-8 text-#1B2316 rounded-sm px-3 py-1 sm:px-1 sm:py-0.5 lg:-ml-25 md:-ml-25 sm:-ml-25  m-2'>SUBSCRIBE</button>
        </div>
        <div className=''>
        <p className='text-white md:text-sm sm:text-sm lg:mt-20 md:mt-33 sm:mt-38'>FloraVision © all right reserve</p>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Footer