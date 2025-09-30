import React from 'react';
import Image from 'next/image'
import icon from './icon.gif'
import image from '../../../public/image.jpg'
 export default function About() {
  return (
    <div>

      <p className='text-center text-[20px] lg:text-[22px] font-bold  mt-5'>تاريخ الكنيسة</p>




      
 <div className='grid grid-cols-1 '>
  

   
<Image src={image} alt="Logo" width={140}   className='mx-auto '
 
 style={{
    filter: 'brightness(1) contrast(1.3) sepia(.1)  hue-rotate(-210deg)', 
    opacity:"1",// Adjust these values as needed
    mixBlendMode: 'multiply', // This blends the image with the background color
  }}/>
         
    </div>
    </div>
  );
}

 