import React from 'react'
import { Star } from 'lucide-react';
import person from '../assets/images/Ronnie.png'

const ReviewCard = () => {
  return (
    <div className=' w-full max-w-sm m-4 sm-m-8 bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white max-m-12 p-5 sm-p-6'>
        <div className='flex '>
            <img src={person} alt="profile" className='w-14 h-14 sm:w-16 sm:h-16 ' />
            <div className='py-2 px-2'>
                 <p className='text-lg sm:text-xl md:text-2xl '>Ronnie Hamill</p>
                <div className='flex text-amber-300 text-base '>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-line"></i>
                </div>
            </div>

        </div>
        
        <p className='text-sm sm:text-base md:text-lg'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
    </div>
  )
}

export default ReviewCard