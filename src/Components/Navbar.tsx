import React from 'react'
import Search from './Search'
import Login from './Login'
import Themebutton from './Themebutton'
import Image from 'next/image'
import banner from './banner.svg'
import y from '../../public/Pope-Tawadros.webp'
import logo from '../../public/logo.webp'

function Navbar() {
  return (
<div style={{overflow:'hidden'}} className="px-[10px] lg:px-[10px]  lg:px-[25px]  w-full flex justify-between items-center py-1  ">
   <Image src={y} alt='M' className='w-[90px]  lg:w-[170px] mb-[-26px]' />
<Image src={banner} alt='M' className='w-[160px] lg:w-[310px] pr-[5px] my-[20px]' />
<Image src={logo} alt='M' className=' w-[90px] lg:w-[180px] mb-[5px]    ' />

    {/*
    <Search/><Themebutton/>
      <Login/>
    
    */} 
      
    </div>
  )
}

export default Navbar
