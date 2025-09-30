import React from 'react';
import Image from 'next/image'
import icon from './icon.gif'
function index() {
  return (
    <>
      <div>

        <p className='text-center text-[20px] lg:text-[22px] font-bold  my-5'>خدمات الكنيسة</p>
        <Image src={icon} alt='M' className='m-auto w-[130px] lg:w-[180px]   ' />

        <p className='text-center text-xl   my-10 '>انضموا إلينا في صلاة القداس الالهي   </p>

        <div dir='rtl' className=" ">


          <section className="container mx-auto my-10 px-6 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* قداس الاحد */}

              <div style={{ borderRight: '2px solid #894242ff' }}
                className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   ">
                <h3 className="text-xl font-semibold  ">قداسات يوم الاحد</h3>
                <p className="mt-2 text-lg">-  الاول :  6:00 الي 8:00 صباحا </p>
                <p className="mt-2 text-lg">-  الثاني : 7:30 الي 10:30 صباحا </p>
              </div>
              <div style={{ borderRight: '2px solid #894242ff' }}
                className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   ">
                <h3 className="text-xl font-semibold  ">قداس يوم الاثنين</h3>
                <p className="mt-2 text-lg">الساعة 5:30 الي 7:30 صباحا </p>

              </div>
              <div style={{ borderRight: '2px solid #894242ff' }}
                className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   ">
                <h3 className="text-xl font-semibold  ">قداسات باقي ايام الاسبوع</h3>
                <p className="mt-2 text-lg">يقام القداس من الساعة 7:30 الي 10:00 صباحا</p>

              </div>

            </div>



            {/* مغارة للأطفال */}




          </section>

          {/* Footer Section */}


        </div>
        <p className='text-center text-xl   my-5  mt-30'>  صلوات العشيات تقام في المواعيد التالية</p>

        <div dir='rtl' className=" my-20">


          <section className="container mx-auto my-10 px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* قداس الاحد */}
              <div style={{ borderRight: '2px solid #894242ff' }}
                className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   ">
                <h3 className="text-xl font-semibold  ">عشية يوم السبت</h3>
                <p className="mt-2 text-lg">الساعة 6:00 السادسة مساءا</p>
              </div>
              <div style={{ borderRight: '2px solid #894242ff' }}
                className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   ">
                <h3 className="text-xl font-semibold  ">عشية يوم الخميس</h3>
                <p className="mt-2 text-lg">الساعة 6:00 السادسة مساءا</p>
              </div>



              {/* مغارة للأطفال */}

            </div>


          </section>

          {/* Footer Section */}


        </div>
      </div>


    </>)
}

export default index