import Image from 'next/image'
import React from 'react'
import anba_athanasius from './anba_athanasius.png'
 import FR_SAM from './FR_SAM.png'
 import FR_MARK from './FR_MARK.png'
import FR_BISHOY from './FR_BISHOY.png' 
import FR_MINA from './FR_MINA.png'
 import FR_MIKHA from './FR_MIKHA.png' 
 import FR_AWAD from './FR_AWAD.png'
 import FR_LUKA from './FR_LUKA.png'
 import FR_ATHA from './FR_ATHA.png'
function index() {
  const fathersOfTheChurch = [
 
    {
      name: "أبونا القمص مرقس عبد المسيح",
      birthDate: "7 نوفمبر 1969 م.",
      deathDate: "20 فبراير 1987 م.",
      imgsource:FR_MARK
    },
    {
      name: "أبونا المتنيح القمص بيشوي عوض",
      birthDate: "10 مارس 1974 م.",
      deathDate: "15 يوليو 1994 م.",
       imgsource:FR_AWAD
    },
    {
      name: "أبونا القس صموئيل صموئيل تاوضروس",
      birthDate: "3 مارس 2009 م.",
      deathDate: "",
       imgsource:FR_SAM
    },
   
    {
      name: "أبونا القس ميخائيل فوزي توفيق",
      birthDate: "3 مارس 2009 م.",
      deathDate: "",
       imgsource:FR_MIKHA
    },
    {
      name: "أبونا القمص لوقا لبيب شحاتة",
      birthDate: "29 مايو 1988 م.",
      deathDate: "17 مارس 2017 م.",
       imgsource:FR_LUKA
    },
    {
      name: "أبونا القس أثناسيوس عوض",
      birthDate: "28 يونيو 2018 م.",
      deathDate: "",
       imgsource:FR_ATHA
    },
      {
      name: "أبونا القس بيشوي زاهر عبد المسيح ",
      birthDate: "17 فبراير 2023 م.",
      deathDate: "",
       imgsource:FR_BISHOY
    }, {
      name: "أبونا القس مينا اديب ",
      birthDate: "17 فبراير 2023 م.",
      deathDate: "",
       imgsource:FR_MINA
    },  {
      name: "أبونا القس فليمون محروس موريس",
      birthDate: "3 مارس 2009 م.",
      deathDate: "",
       imgsource:""
    },
  ];

  return (
    <div>
      <p className='text-center text-[16px] lg:text-[18px] my-10 mt-6 '>برعاية الانبا اثانسيوس - اسقف عام كنائس القبة</p>

      
      <Image src={anba_athanasius} width={200}alt='M' className='m-auto w-[130px] lg:w-[180px]   ' />
      <p className='text-center text-[19px] font-bold lg:text-[20px] my-7'>  الاباء الرعاة للكنيسة </p>
      <div className="container mx-auto px-6 py-6 text-right ">
        <div dir="rtl" className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 pb-9  ">
          {fathersOfTheChurch.map((father) => (
            <div
              key={father?.name} style={{ borderRight: '3px solid #894242ff', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
              className="bg-[#ffffff12] shadow-xl   overflow-hidden p-4 border border-[transparent]  transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]  grid grid-cols-[3fr_1fr] gap-3  "
            >
              <div className=' '>
              <h3 className=" text-sm md:text-lg font-semibold text-gray-800 text-right">{father.name}</h3>
              <p className=" text-sm md:text-lg text-gray-600 mt-2 text-right">
                <strong>تمت الرسامة : </strong> {father.birthDate}
              </p>
              {father.deathDate && (
                <p className=" text-sm md:text-lg text-gray-600 mt-2 text-right">
                  <strong>و صار قمصا بعام :</strong> {father.deathDate}
                </p>
              )}
              </div>
              {father?.imgsource && (
      <Image src={father.imgsource} width={100}alt='M' className='m-auto w-full   rounded-lg  ' />
              )}
            </div>

          ))}
        </div>


                         
      </div>
      <iframe allowFullScreen     src="https://heyzine.com/flip-book/93a14503a1.html#page/11" className='w-[100%] h-[100vh] flex justify-content m-auto' ></iframe>

    </div>
  )
}

export default index