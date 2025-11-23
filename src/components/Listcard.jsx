import React from 'react'
import { ChevronRight , Ellipsis, List } from 'lucide-react';

const Listcard = () => {
  return (
    <>
    
    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-y-15 -mt-30 p-20'>
    <div className='relative flex lg:w-full lg:h-96 sm:w-72 sm:h-96 bg-white/10 backdrop-blur-lg border border-white/40 text-white   mx-auto rounded-b-[60px] rounded-t-[80px] p-10'>
        <div className="flex justify-center  mb-4 absolute lg:-top-38 md:-top-28 sm:-top-13 lg:left-10 md:left-4 z-20">
            <img
            src="./src/assets/images/AglaonemaPlant.png"
            alt="Aglaonema plant"
            className="w-xl md:w-72 sm:w-56 h-auto object-contain drop-shadow-2xl "
            />
        </div>
        <div className='mt-35 '>
                <h1 className='text-2xl  '>Aglaonema plant</h1>
                <p className='text-sm font-thin mt-2'>The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care</p>
                <div className='flex mt-5 '>
                <h1 className='lg:text-3xl sm:text-2xl font-thin '>Rs. 399/-</h1>
                <button className='border-2 border-white rounded-sm ml-20 px-2 py-2 '>
                    <img src="./src/assets/Icons/bag.svg" alt="" className='w-3.5 h-3.5' />
                </button>
                </div>
            </div>
    </div>
    <div className='relative flex lg:w-full lg:h-96 sm:w-72 sm:h-96 bg-white/10 backdrop-blur-lg border border-white/40 text-white mx-auto rounded-b-[60px] rounded-t-[80px] p-10'>
        <div className="flex justify-center  mb-4 absolute lg:-top-20 md:-top-10 sm:-top-2  lg:left-10 md:left-1 z-20">
            <img
            src="./src/assets/images/Plantain_Lilies.png"
            alt="Aglaonema plant"
            className="w-xl md:w-72 sm:w-56 h-auto object-contain drop-shadow-2xl "
            />
        </div>
        <div className='mt-35 '>
                <h1 className='text-2xl'>Plantain Lilies</h1>
                <p className='text-sm font-thin mt-2'>Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,</p>
                 <div className='flex mt-5 '>
                <h1 className='lg:text-3xl sm:text-2xl font-thin'>Rs. 380/-</h1>
    
                <button className='border-2 border-white rounded-sm ml-20 px-2 py-2 '>
                    <img src="./src/assets/Icons/bag.svg" alt="" className='w-3.5 h-3.5' />
                </button>
                </div>
            </div>
    </div>
    <div className='relative flex lg:w-full lg:h-96 sm:w-72 sm:h-96 bg-white/10 backdrop-blur-lg border border-white/40 text-white mx-auto rounded-b-[60px] rounded-t-[80px] p-10'>
    
        <div className="flex justify-center mb-4 absolute lg:-top-20 md:-top-6 sm:-top-2 lg:left-10 md:left-3 z-20">
            <img
            src="./src/assets/images/Cactus.png"
            alt="Aglaonema plant"
            className="w-xl md:w-72 sm:w-56 h-auto object-contain drop-shadow-2xl "
            />
        </div>
        <div className='mt-35 '>
                <h1 className='text-2xl'>Cactus</h1>
                <p className='text-sm font-thin mt-2'>It is known for their ability to thrive in arid environments</p>
                 <div className='flex mt-10 '>
                <h1 className='lg:text-3xl sm:text-2xl font-thin '>Rs. 259/-</h1>
                <button className='border-2 border-white rounded-sm px-2 ml-20 py-2 '>
                    <img src="./src/assets/Icons/bag.svg" alt="" className='w-3.5 h-3.5' />
                </button>
                </div>
            </div>
    </div>
    


    
    <div className='relative flex lg:w-full lg:h-96 sm:w-72 sm:h-96 bg-white/10 backdrop-blur-lg border border-white/40 text-white mx-auto rounded-b-[60px] rounded-t-[80px] p-10'>
        <div className="flex justify-center mb-4 absolute lg:-top-14 md:-top-13 sm:-top-2 lg:left-10 md:left-3 z-20">
            <img
            src="./src/assets/images/swiss_cheese_plant.png"
            alt="Aglaonema plant"
            className="w-xl md:w-72 sm:w-56 h-auto object-contain drop-shadow-2xl "
            />
        </div>
        <div className='mt-35 '>
                <h1 className='text-2xl  '>Swiss cheese Plant</h1>
                <p className='text-sm font-thin mt-2'>It is a popular tropical houseplant known for its distinctive, perforated leaves</p>
                 <div className='flex mt-13 '>
                <h1 className='lg:text-3xl sm:text-2xl font-thin'>Rs. 400/-</h1>  
                <button className='border-2 border-white rounded-sm px-2 ml-20  py-2 '>
                    <img src="./src/assets/Icons/bag.svg" alt="" className='w-3.5 h-3.5' />
                </button>
                </div>
            </div>
    </div>
    <div className='relative flex lg:w-full lg:h-96 sm:w-72 sm:h-96 bg-white/10 backdrop-blur-lg border border-white/40 text-white mx-auto rounded-b-[60px] rounded-t-[80px] p-10'>
        <div className="flex justify-center mb-4 absolute lg:-top-20 md:-top-20 sm:-top-20 lg:left-10 md:left-1 z-20">
            <img
            src="./src/assets/images/Sansevieria plant.png"
            alt="Aglaonema plant"
            className="w-96 md:w-72 sm:w-56 h-96 object-contain drop-shadow-2xl "
            />
        </div>
        <div className='mt-35 '>
                <h1 className='text-2xl  '>Sansevieria plant</h1>
                <p className='text-sm font-thin mt-2'>It is a popular indoor plant admired for its striking appearance and low-maintenance nature.</p>
                 <div className='flex mt-8 '>
                <h1 className='lg:text-3xl sm:text-2xl font-thin '>Rs. 450/-</h1>
                <button className='border-2 border-white rounded-sm px-2 ml-20 py-2 '>
                    <img src="./src/assets/Icons/bag.svg" alt="" className='w-3.5 h-3.5' />
                </button>
                </div>
            </div>
    </div>
    <div className='relative flex lg:w-full lg:h-96 sm:w-72 sm:h-96 bg-white/10 backdrop-blur-lg border border-white/40 text-white mx-auto rounded-b-[60px] rounded-t-[80px] p-10'>
        <div className="flex justify-center mb-4 absolute lg:-top-7 md:-top-7 sm:-top-2 lg:left-10 md:-left-3 z-20">
            <img
            src="./src/assets/images/Agave plant.png"
            alt="Aglaonema plant"
            className="w-xl md:w-72 sm:w-56 h-auto object-contain drop-shadow-2xl "
            />
        </div>
        <div className='mt-35 '>
                <h1 className='text-2xl  '>Agave plant</h1>
                <p className='text-sm font-thin mt-2'>The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.</p>
                 <div className='flex mt-3 '>
                <h1 className='lg:text-3xl sm:text-2xl font-thin'>Rs. 359/-</h1>
                <button className='border-2 border-white rounded-sm px-2 ml-20 py-2 '>
                    <img src="./src/assets/Icons/bag.svg" alt="" className='w-3.5 h-3.5' />
                </button>
                </div>
            </div>
    </div>
    </div>
    
    </>
  )
}

export default Listcard