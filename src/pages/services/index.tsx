import React from 'react';
import Image from 'next/image'
import icon from './icon.gif'
function index() {
  return (
<>
   <div>

             <p className='text-center text-[20px] lg:text-[22px] font-bold  my-5'>خدمات الكنيسة</p>
            <Image src={icon} alt='M' className='m-auto w-[130px] lg:w-[180px]   ' />

      <p className='text-center text-[16px] lg:text-[18px] my-5 mb-[19rem]'>هذه الصفحة قيد الإنشاء</p>
     </div>


</>  )
}

export default index