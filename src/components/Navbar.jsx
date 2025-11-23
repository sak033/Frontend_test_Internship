import React,{useState} from 'react';


const Navbar = () => {
  const [openMenu, setOpenMenu]= useState(false);
  return (
    <div className='relative flex justify-between items-center px-8 py-8'>
      <div className='flex'>
        <img 
          src="./src/assets/images/logo_plant.png" 
          alt="logo" width={'30px'} height={'30 px'}
          className="w-10 h-10 object-contain"
        />
        <p className='font-bold text-white text-xl'>FloraVision.</p>
      </div>

      <div className='hidden lg:flex'>
        <ul className='flex gap-8 text-white font-medium text-xl font-Indie'>
          <li className='cursor-pointer hover:text-gray-200'>Home</li>
          <li className='cursor-pointer hover:text-gray-200 flex items-center gap-2'>
            Plants Type
            <img 
              src="./src/assets/Icons/dropdownArrow.svg" 
              alt="dropdown" 
              className="w-3 h-3 mt-1"
            />
          </li>
          <li className='cursor-pointer hover:text-gray-200'>More</li>
          <li className='cursor-pointer hover:text-gray-200'>Contact</li>
        </ul>
      </div>

      <div className='flex items-center gap-11'>
        <img src="./src/assets/Icons/search.svg" alt="Search" className="w-6  cursor-pointer hidden md:block" />
        <img src="./src/assets/Icons/bag.svg" alt="Bag" className="w-6 cursor-pointer hidden md:block" />
        <img src="./src/assets/Icons/menu.svg" alt="Menu" className="w-7 cursor-pointer  lg:hidden" onClick={()=>setOpenMenu(!openMenu)}/>
      </div>
     
     {
      openMenu && (<div className="absolute z-50 top-20 left-0 w-full bg-[#1b261a] py-6 lg:hidden shadow-lg border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 text-white text-lg font-Indie">
            <li className="cursor-pointer hover:text-gray-200">Home</li>
            <li className="cursor-pointer hover:text-gray-200 flex items-center gap-2">
              Plant's Type
              <img src="./src/assets/Icons/dropdownArrow.svg" alt="dropdown" className="w-3 h-3 mt-1"/>
            </li>
            <li className="cursor-pointer hover:text-gray-200">More</li>
            <li className="cursor-pointer hover:text-gray-200">Contact</li>
          </ul>
        </div>
      )
     }
    </div>
  );
};

export default Navbar;
