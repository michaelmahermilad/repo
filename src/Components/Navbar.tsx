import React, { useState } from 'react'
import Search from './Search'
import Login from './Login'
import Themebutton from './Themebutton'
import Image from 'next/image'
import banner from './banner.svg'
import y from '../../public/Pope-Tawadros.webp'
import logo from '../../public/logo.webp'

function Navbar() {

    const [loaded, setLoaded] = useState(false);

  return (
<div style={{overflow:'hidden'}} className="px-[10px] lg:px-[10px]  lg:px-[25px]  w-full flex justify-between items-center py-1 pointer-events-none " >
    {loaded && (
 <div className="fixed inset-0 h-[100vh]   backdrop-blur-[200px]     z-100000 pointer-events-none">
      {/* Crosses (decorative, low-opacity) */}
      <div className="  backdrop-blur-[200px]        w-[90vw]     rounded-md   m-auto  flex flex-wrap justify-center items-center space-x-2 opacity-100 text-4xl text-gray-400 ">
         <div className="  pt-[60px]     text-[brown] text-[160px] text-outline text-center">    ♱  
 <p className=' pb-[100px]        text-[brown]  text-[23px] text-center '   >
Loading ...    </p>

</div>
 
  
      </div>
      
    </div>      )}
         <Image src={y} alt='M' width={100} className='w-[90px]  lg:w-[170px] mb-[-26px]'        
 />

      
      
     

<Image src={banner}  width={200}alt='M' className='w-[160px] lg:w-[310px] pr-[5px] my-[20px]'  />
<Image src={logo} width={100} alt='M' className=' w-[90px] lg:w-[180px] mb-[5px]    '  onLoad={() => setLoaded(true)} />

    {/*
    <Search/><Themebutton/>
      <Login/>
    
    */} 
      
    </div>
  )
}

export default Navbar
