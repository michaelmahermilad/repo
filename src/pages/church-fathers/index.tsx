import Image from 'next/image'
import React from 'react'
import anba_athanasius from './anba_athanasius.png'

function index() {


  const fathersOfTheChurch = [
  {
    name: "أبونا المتنيح القمص قسطنطين موسى",
    birthDate: "18 مايو 1938 م.",
    deathDate: "1948 م.",
   },
  {
    name: "أبونا القمص مرقس عبد المسيح",
    birthDate: "7 نوفمبر 1969 م.",
    deathDate: "20 فبراير 1987 م.",
   },
  {
    name: "أبونا المتنيح القمص بيشوي عوض",
    birthDate: "10 مارس 1974 م.",
    deathDate: "15 يوليو 1994 م.",
   },
  {
    name: "أبونا القس صموئيل صموئيل تاوضروس",
    birthDate: "3 مارس 2009 م.",
    deathDate: "",
   },
  {
    name: "أبونا القس فليمون محروس موريس",
    birthDate: "3 مارس 2009 م.",
    deathDate: "",
   },
  {
    name: "أبونا القس ميخائيل فوزي توفيق",
    birthDate: "3 مارس 2009 م.",
    deathDate: "",
   },
  {
    name: "أبونا القمص لوقا لبيب شحاتة",
    birthDate: "29 مايو 1988 م.",
    deathDate: "17 مارس 2017 م.",
   },
  {
    name: "أبونا القس أثناسيوس عوض",
    birthDate: "28 يونيو 2018 م.",
    deathDate: "",
   },
];

  return (
     <div>
         <p className='text-center text-[16px] lg:text-[18px] my-10 mt-6 '>برعاية الانبا اثانسيوس - اسقف عام كنائس القبة</p>

             <Image src={anba_athanasius} alt='M' className='m-auto w-[130px] lg:w-[180px]   ' />
       <p className='text-center text-[19px] font-bold lg:text-[20px] my-7'>  الاباء الرعاة للكنيسة </p>


             <div className="container mx-auto px-6 py-6 text-right ">
     
      <div dir="rtl" className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 pb-9  ">
        {fathersOfTheChurch.map((father) => (
         <div
  key={father?.name} style={{ borderRight: '3px solid #894242ff', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}
  className="bg-[#ffffff12] shadow-xl   overflow-hidden p-6 border border-[transparent]  transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-[transparent]   "
>
  <h3 className="text-xl font-semibold text-gray-800 text-right">{father.name}</h3>
  <p className="text-gray-600 mt-2 text-right">
    <strong>تمت الرسامة : </strong> {father.birthDate}
  </p>
  {father.deathDate && (
    <p className="text-gray-600 mt-2 text-right">
      <strong>و صار قمصا بعام :</strong> {father.deathDate}
    </p>
  )}
  {!father.deathDate  && (
    <p className="text-gray-600 mt-2 text-right"></p>
  )}
</div>

        ))}
      </div>
    </div>

 </div>
  )
}

export default index