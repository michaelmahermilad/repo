import React from 'react';
import Image from 'next/image'
import icon from './bg_stretch.jpg'
function index() {
  return (
<>
   <div>

      <Image src={icon} style={{opacity:""}} alt='M' className='m-auto w-[130px] lg:w-[100%]   ' />
            <p className='text-center text-[20px] lg:text-[22px] font-bold  my-5'>خدمات الكنيسة</p>

      <p className='text-center text-[16px] lg:text-[18px] my-5'>هذه الصفحة قيد الإنشاء</p>
      <p className='text-center text-[16px] lg:text-[18px] my-5'>قريبا ستجدون كل ما يخص خدمات الكنيسة</p>
      <p className='text-center text-[16px] lg:text-[18px] my-5'>تابعونا على صفحتنا على الفيسبوك</p>
    </div>


</>  )
}

export default index