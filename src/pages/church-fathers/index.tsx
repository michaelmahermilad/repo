import Image from 'next/image'
import React from 'react'
import anba_athanasius from './anba_athanasius.png'

function index() {
  return (
     <div>
         <p className='text-center text-[16px] font-bold lg:text-[20px] my-5'> اباء الكنيسة </p>

             <Image src={anba_athanasius} alt='M' className='m-auto w-[130px] lg:w-[180px]   ' />
         <p className='text-center text-[16px] lg:text-[18px] my-5 mb-[19rem]'>برعاية الانبا اثانسيوس - اسقف عام كنائس القبة</p>
 </div>
  )
}

export default index