import React from 'react'
import plantImg from '../assets/images/Plantain_Lilies.png'
import bag from '../assets/Icons/bag.svg'


const Sellcard = () => {
  return (
    
        <div className='flex justify-center'>
        <div className='relative flex  justify-between gap-6  w-7xl h-1/12 bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white m-8 p-10' >
            <div>
                <img src={plantImg} alt="Plantain Lilies"  className='absolute -top-40 lg:left-1 md:-left-30 sm:-left-43 w-130 z-20'/>
            </div>
            <div className='lg:ml-0 md:ml-50 sm:ml-35'>
                <h1 className='text-3xl font-semibold '>For Your Desks Decorations</h1>
                <p className='text-sm mt-2'>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
                <h1 className='text-3xl font-semibold'>Rs. 599/-</h1>
                <button className='border-2 border-white rounded-sm px-3 py-1 -ml-0.5 m-2'>Explore</button>
                <button className='border-2 border-white rounded-sm px-2 py-2 '>
                    <img src={bag} alt="" className='w-3.5 h-3.5' />
                </button>
            </div>
        </div>
        </div>
    
  )
}

export default Sellcard