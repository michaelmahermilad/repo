import React from 'react';
import Image from 'next/image'
import pray from './pray.jpg'
import image from '../../../public/image.jpg'
 export default function About() {
  return (
    <div>

 
      <div dir='rtl' className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-8 mx-auto p-5 lg:p-10 pb-10 text-right ">
         <div className="flex flex-col-reverse lg:flex-col lg:contents gap-6">
                <Image  style={{
            filter: 'brightness(0.85) contrast(1.1) sepia(0.15)  ', // Added filters
          }} src={pray}  alt="About Us" className="w-[50vw] m-auto  lg:w-full h-auto rounded-lg shadow-lg mix-blend-multiply" />


              <section className="">
              <div className='rounded-xl shadow p-6 space-y-4 border border-dashed h-fit  mb-5    border-gray-300 bg-white/30 opacity-77 backdrop-blur-sm>'>

            
          <h1 className="  font-bold  text-[brown] text-[18px]">💬 الملاك ميخائيل شفيع كنيستنا</h1>
          <p className="   ">
            الملاك ميخائيل هو قائد جيش السماء. قوي وشجاع، ويدافع عن أولاد الله.
            في يوم من الأيام، حاول الشيطان أن يتمرد على الله، لكن الملاك ميخائيل وقف وقال:
            <strong> "من مثل الله؟"</strong> وقاد الملائكة في حرب ضد الشر وانتصر.
          </p>


            <p className="   ">
         </p>
          <p>
            وهو لا يزال حتى اليوم يحمي أولاد الله ويصلي من أجلهم. نستطيع دائمًا أن نطلب شفاعته عندما نخاف أو نحتاج للحماية.
          </p>
  
        <p>
            يُصوّر الملاك ميخائيل غالبًا وهو يحمل سيفًا أو رمحًا، يرتدي درعًا ذهبيًا، ويقف منتصرًا فوق الشيطان.
          </p>
  <ul className="list-disc pr-6 space-y-2">
            <li><strong>قائد جيش السماء: </strong> حارب الشيطان وطرحه إلى الأرض (رؤيا 12).</li>
            <li><strong>مدافع عن شعب الله: </strong> ظهر ليشوع، أنقذ الثلاثة فتية، ودافع عن جسد موسى.</li>
            <li><strong>بشّر بقيامة المسيح: </strong> كان أول من أعلن الخبر العظيم (متى 28).</li>
            <li><strong>يسند الشهداء: </strong> يقويهم في العذاب، ويحمي الكنيسة دائمًا.</li>
          </ul>
      
  </div>
      
 
       
  <blockquote className="bg-yellow-50 border-r-4 border-yellow-400 p-4 rounded shadow-sm">
            <p className="text-gray-800 font-medium leading-relaxed">
              "إِلهُ الرَّجَاءِ يُمَلَأُكُمْ كُلَّ سُرُورٍ وَسَلاَمٍ فِي الإِيمَانِ، لِتَزْدَادُوا فِي الرَّجَاءِ بِقُوَّةِ الرُّوحِ الْقُدُسِ."
            </p>
            <span className="block mt-2 text-sm text-yellow-700"> الصفحة لا تزال قيد الانشاء</span>
          </blockquote>
    

          
        </section>
        
           </div>
 
    
</div>

      

    </div>
  );
}

 