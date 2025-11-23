import { useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Buycard from './components/Buycard'
import ReviewCard from './components/ReviewCard'
import Sellcard from './components/Sellcard'
import Sellcard2 from './components/Sellcard2'
import Listcard from './components/Listcard'
import Reviews from './components/Reviews'
import BestO2 from './components/BestO2'
import Footer from './components/Footer'
import bg from './background_Plant.png';
import compo1 from './assets/Icons/trendy_plant_compo.svg'
import compo2 from './assets/Icons/trendy_plant_compo2.svg'
import compo3 from './assets/Icons/trendy_plant_compo3.svg'
import compo4 from './assets/Icons/trendy_plant_compo4.svg'



function App() {
  return (
    <>
    
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-cover bg-center bg-no-repeat w-full min-h-screen" >
     <Navbar />
      <div className=' flex justify-between'>
       <div>
        <div id="home">
         <Card />
        </div>
         <ReviewCard />
       </div>
        <Buycard />
      </div>
      <div className='flex justify-center mt-8'>
        <img src={compo1} alt="trendy Plant" className='w-40 sm:w-60 md:w-72 lg:w-auto'/>
      </div>
      <Sellcard />
      
      <Sellcard2/>

      <div className='flex justify-center mt-15 lg:mt-20 md:mt-20 sm:mt-20'>
        <img src={compo2} alt="trendy Plant"  className='w-40 sm:w-60 -mt-24 lg:-mt-10 md:-mt-10 sm:-mt-15 md:w-72 lg:w-auto'/>
      </div>
      <div id="planttype" className='scale-100'>
      <Listcard/>
      </div>
      
      
    </div>

    <div className="bg-[#1B2316] -mt-1 w-full min-h-screen">
      <div className='flex justify-center '>
        <img src={compo3} alt="trendy Plant" className='mt-10 w-40 sm:w-60 md:w-72 lg:w-auto' />
      </div>
      <div id="more" className='scale-100'>
      <Reviews/>
      </div>
    </div>
    <div className='bg-[#1B2316] -mt-1 w-full min-h-screen pt-10'>
    <div className='flex justify-center   '>
        <img src={compo4} alt="trendy Plant" className='w-40  sm:w-60 md:w-72 lg:w-auto -mt-150 lg:mt-10 md:-mt-20 sm:-mt-60' />
      </div>
      <div className='-mt-15'>
     <BestO2/>
     
     </div>
    </div> 
    <div className='bg-[#1B2316] -mt-1 w-full py-10'>
    
      <div id="contact" className='-mt-90 lg:-mt-15 md:-mt-90 sm:-mt-20'>
     
     <Footer/>
     </div>
    </div> 
    
    </>
  )
}

export default App
