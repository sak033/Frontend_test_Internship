import React from 'react'
import plantImg from '../assets/images/Alov_vera.png'
import bag from '../assets/Icons/bag.svg'

const Sellcard2 = () => {
  return (
    
       <div className='flex justify-center'>
        <div className='relative mt-40 flex justify-between gap-6 w-96  lg:w-7xl lg:h-1/12 md:w-[770px] md:h-auto sm:w-[575px] sm:h-auto bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white m-8 p-10'>
            <div>
                <img src={plantImg} alt="Alov vera"  className='absolute ml-190 -top-25 lg:-top-50 md:-top-50 sm:-top-50 -left-165 lg:left-1 md:-left-112 sm:-left-160 w-96 lg:w-130 md:w-130 sm:w-130 z-20'/>
            </div>
            <div className='mr-100'>
                <h1 className='text-3xl font-semibold '>For Your Desks Decorations</h1>
                <p className='text-sm mt-2'>The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming</p>
                <h1 className='text-3xl font-semibold'>Rs. 399/-</h1>
                <button className='cursor-pointer border-2 border-white rounded-sm px-3 py-1 -ml-0.5 m-2'>Explore</button>
                <button className='border-2 border-white rounded-sm px-2 py-2 '>
                    <img src={bag} alt="" className='cursor-pointer w-3.5 h-3.5' />
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default Sellcard2