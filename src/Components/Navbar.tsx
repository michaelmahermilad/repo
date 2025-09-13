import React from 'react'
import Search from './Search'
import Login from './Login'
import Themebutton from './Themebutton'
import Image from 'next/image'
import banner from './banner.svg'
import y from './Pope-Tawadros.png'
import z from './Coptic-Orthodox.png'

function Navbar() {
  return (
<div style={{overflow:'hidden'}} className="px-[4px] lg:px-[10px]  lg:px-[25px]  w-full flex justify-between items-center py-1 ">
   <Image src={y} alt='M' className='w-[90px] lg:w-[140px]  mb-[-30px]' />
<Image src={banner} alt='M' className='w-[160px] lg:w-[320px] pr-[5px] my-[20px]' />
<Image src={z} alt='M' className=' w-[90px] lg:w-[130px]  mb-[-10px]   ' />

    {/*
    <Search/><Themebutton/>
      <Login/>
    
    */} 
      
    </div>
  )
}

export default Navbar
