import React from 'react';
import Image from 'next/image'
import icon from './icon.gif'
import anba_athanasius from './anba_athanasius.png'
export default function About() {
  return (
    <div>

      <p className='text-center text-[20px] lg:text-[22px] font-bold  my-5'>تاريخ الكنيسة</p>
            <Image src={icon} alt='M' className='m-auto w-[130px] lg:w-[180px]   ' />
      <p style={{textAlign:"justify" ,marginInline:"1rem"}} className='text-center text-[16px] lg:text-[18px] my-5 mb-[19rem]'>
        
        
          </p>
    </div>
  );
}

 