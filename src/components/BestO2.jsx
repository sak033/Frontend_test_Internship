import React from 'react'
import { ChevronRight } from 'lucide-react';
import plantImg from '../assets/images/AglaonemaPlant.png';

const BestO2 = () => {
  return (
    <>
      <div className="flex justify-center lg:-top-6 md:-top-6 sm:-top-6 px-4  lg:px-4 sm:px-6 md:px-10">
        <div className="relative bg-white/10 backdrop-blur-lg border border-white/40 rounded-3xl text-white w-full max-w-6xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between">
                    <img src={plantImg} alt="Aglaonema Plant" className="absolute z-20 w-48 sm:w-56 md:w-72 lg:w-96 -top-12 sm:-top-24 md:top-6 lg:top-10
                       left-1/2 -translate-x-1/2 
                       md:-left-10 md:translate-x-0 
                      md:-translate-y-1/2"
          />
            <div className="mt-32 sm:mt-40 md:mt-0 md:ml-40 lg:ml-96 text-center md:text-left">
           <h1 className="text-xl sm:text-2xl md:text-3xl mr-5 font-semibold">
              We Have Small And Best O2 Plants Collection’s
            </h1>
            <p className="text-sm mt-4 text-justify">
              Oxygen-producing plants, often referred to as "O2 plants," are those that
              release oxygen into the atmosphere through the process of photosynthesis.
            </p>
            <p className="text-sm mt-3 text-justify">
              Many plants can help filter out pollutants and toxins from the air, making it
              cleaner and healthier to breathe.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-36 lg:gap-95 md:gap-95 sm:gap-85 mt-5">
              <button className="border-2 border-white rounded-sm px-4 py-1">
                Explore
              </button>

              <div className="flex items-center">
                <ChevronRight className="w-6 h-6 rotate-180 text-gray-400" />
                <div className="flex mx-2">
                  <p>01/</p>
                  <p className="text-sm mt-0.5">04</p>
                </div>
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          </div>
           </div>
           </div>
      <div className="flex justify-center mt-10">
        <img src="/src/assets/Icons/ThreeDots.svg" alt="carousel dots" className="w-12"/>
      </div>
    </>
  );
};

export default BestO2;
