import React,{useState} from 'react';
import logo from '../assets/images/logo_plant.png'
import dropDown from '../assets/Icons/dropdownArrow.svg'
import search from '../assets/Icons/search.svg'
import bag from '../assets/Icons/bag.svg'
import menu from '../assets/Icons/menu.svg'


const Navbar = () => {
  const [openMenu, setOpenMenu]= useState(false);
  const [showPlantTypes, setShowPlantTypes] = useState(false);

  return (
    <div className='relative z-[99999] flex justify-between items-center px-4 py-4 md:px-8 md:py-8
'>
      <div className='flex'>
        <img 
          src={logo} 
          alt="logo" width={'30px'} height={'30 px'}
          className="w-10 h-10 object-contain"
          />
        <p className='font-bold text-white text-xl'>FloraVision.</p>
      </div>

      <div className='hidden lg:flex'>
        <ul className='flex gap-8 text-white font-medium text-xl font-Indie'>
          <li className='cursor-pointer hover:text-gray-200'>
            <a href="#home">Home</a>
          </li>
          <li className='relative cursor-pointer hover:text-gray-200 flex items-center gap-2'>
            <a href="#planttype"> Plants Type</a>
            <img 
              src={dropDown} 
              alt="dropdown" 
              className="w-3 h-3 mt-1"
              onClick={() => setShowPlantTypes(!showPlantTypes)}
            />
            {showPlantTypes && (
             <ul className="absolute top-7 left-0 bg-[#1b261a]/70 backdrop-blur-md px-4 py-3 rounded-lg text-white shadow-lg z-50 w-40">
            <li className="py-1 hover:text-gray-300">
            <a href="#indoor">Indoor Plants</a>
            </li>
            <li className="py-1 hover:text-gray-300">
             <a href="#outdoor">Outdoor Plants</a>
           </li>
           <li className="py-1 hover:text-gray-300">
            <a href="#succulents">Succulents</a>
           </li>
           <li className="py-1 hover:text-gray-300">
           <a href="#medicinal">Medicinal Plants</a>
          </li>
         </ul>
         )}
          </li>
          <li className='cursor-pointer hover:text-gray-200'><a href="#more">More</a></li>
          <li className='cursor-pointer hover:text-gray-200'>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className='flex items-center gap-11'>
        <img src={search} alt="Search" className="w-6  cursor-pointer hidden lg:block" />
        <img src={bag} alt="Bag" className="w-6 cursor-pointer hidden lg:block" />
        <img src={menu} alt="Menu" className="w-7 cursor-pointer  lg:hidden" onClick={()=>setOpenMenu(!openMenu)}/>
      </div>
     
     {
      openMenu && (<div className="absolute z-[99999] top-full  left-0 w-full bg-[#1b261a]/70 py-6 lg:hidden shadow-lg border-t border-white/10 max-h-[70vh] overflow-y-auto">
          <ul className="flex flex-col items-center gap-6 text-white text-lg font-Indie">
            <li className="cursor-pointer hover:text-gray-200">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer hover:text-gray-200 flex items-center gap-2">
               <a href="#planttype"> Plants Type</a>
              <img src={dropDown} alt="dropdown" className="w-3 h-3 mt-1"/>
            </li>
            <li className="cursor-pointer hover:text-gray-200"><a href="#more">More</a></li>
            <li className="cursor-pointer hover:text-gray-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )
     }
    </div>
  );
};

export default Navbar;
