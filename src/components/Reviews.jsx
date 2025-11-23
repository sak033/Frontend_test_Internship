import React from 'react'
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import person1 from '../assets/images/shelly.png'
import person2 from '../assets/images/lula.png'
import person3 from '../assets/images/carol.png'

const Reviews = () => {
  return (
    <>
    <div className='hidden lg:grid grid-cols-3 gap-3 -mt-40 -ml-5 p-20'>
    <div className=' w-80 h-80 bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white m-12 p-10'>
        <div className='flex'>
            <img src={person1} alt="profile" className='w-15 h-15'/>
            <div className='py-2 px-2 ml-3 -mt-2'>
                 <p className='font-semibold text-2xl   '>Shelly Russel</p>
                <div className='flex text-amber-300'>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-line"></i>
                </div>
            </div>

        </div>
        
        <p className='font-thin mt-8'>Just got my hands on some absolutely awesome plants, and I couldn’t be happier!</p>
    </div>
    <div className=' w-80 h-80 bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white m-12 p-10'>
        <div className='flex'>
            <img src={person2} alt="profile" className='w-15 h-15'/>
            <div className='py-2 px-2 ml-3 -mt-2'>
                 <p className='font-semibold text-2xl   '>Lula Rolfson</p>
                <div className='flex text-amber-300'>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-line"></i>
                </div>
            </div>

        </div>
        
        <p className='font-thin mt-8'>Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.</p>
    </div>
    <div className=' w-80 h-80 bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white m-12 p-10'>
        <div className='flex'>
            <img src={person3} alt="profile" className='w-15 h-15'/>
            <div className='py-2 px-2 ml-3 -mt-2'>
                 <p className='font-semibold text-2xl   '>Carol Huels</p>
                <div className='flex text-amber-300'>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-line"></i>
                </div>
            </div>

        </div>
        
        <p className='font-thin mt-8'>It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!</p>
    </div>
    </div>


    <div className="lg:hidden flex justify-center lg:px-50 lg:py-5 md:py-1 md:px-60 sm:px-50 sm:py-4 md:ml-5 sm:ml-4 lg:mt-5 md:mt-1">
        <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
          <SwiperSlide>
            <div className='w-80 h-80 md:w-72 md:h-72 sm:w-56 sm:h-64  bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white p-10'>
              <div className='flex'>
                <img src={person1} className='w-14 h-14'/>
                <div className='py-2 px-3 -mt-1'>
                  <p className='font-semibold text-xl'>Shelly Russel</p>
                  <div className='flex text-amber-300'>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-line"></i>
                  </div>
                </div>
              </div>
              <p className='mt-6 text-sm font-thin'>
                Just got my hands on some absolutely awesome plants...
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-80 h-80 md:w-72 md:h-72 sm:w-56 sm:h-64 bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white p-10'>
              <div className='flex'>
                <img src={person2} className='w-14 h-14'/>
                <div className='py-2 px-3 -mt-1'>
                  <p className='font-semibold text-xl'>Lula Rolfson</p>
                  <div className='flex text-amber-300'>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-line"></i>
                  </div>
                </div>
              </div>
              <p className='mt-6 text-sm font-thin'>
                Each one has its own unique charm...
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='w-80 h-80 md:w-72 md:h-72 sm:w-56 sm:h-64 bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white p-10'>
              <div className='flex'>
                <img src={person3} className='w-14 h-14'/>
                <div className='py-2 px-3 -mt-1'>
                  <p className='font-semibold text-xl'>Carol Huels</p>
                  <div className='flex text-amber-300'>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-line"></i>
                  </div>
                </div>
              </div>
              <p className='mt-6 text-sm font-thin'>
                It's like bringing a little piece of nature indoors...
              </p>
            </div>
          </SwiperSlide>
          </Swiper>
      </div>
    </>
  )
}

export default Reviews