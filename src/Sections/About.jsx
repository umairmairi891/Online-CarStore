import React,{useEffect} from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css';
function About() {
  useEffect(() => {
      AOS.init({
        duration: 1200,
        // once:false
      });
    }, [])
  return (
    <section className='bg-white'>
     <div className="flex flex-col md:grid md:grid-cols-12  " >
      <div className="col-span-6" >
        <img src="/public/Staff-Metting.jpeg" className='w-full opacity-60' alt="" data-aos='fade-up'/>
        <div className="p-5 text-center mt-5  lg:mt-5 ">
          <h2 className='font-bold text-2xl py-3'>Meet Out Experts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5" >
            <img src="/public/Recrutement-Marketing-Manager-scaled.jpg" className=' object-cover rounded w-full h-40' data-aos='fade-up' alt="" />
            <img src="/public/GettyImages-1313239835-1.webp" className=' object-cover rounded w-full h-40' alt="" data-aos='fade-up' />
            <img src="/public/Expert1.jfif" className=' object-cover rounded w-full h-40' alt="" data-aos='fade-up' />
            <img src="/public/pexels-mikebirdy-93652.jpg" className=' object-cover rounded  w-full h-40' alt=""  data-aos='fade-up'/>
          </div>
        </div>
        
      </div>
      <div className="col-span-6 px-5 sm:px-5 lg:px-10 bg-gray-200" data-aos='fade-up'>
        <h2 className='font-bold font-serif text-2xl lg:text-4xl mt-5 max-w-80'>OUR LEGACY & VISION</h2>
        <p className="text-xl font-[Lato] py-2 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint praesentium ullam in, accusantium voluptatem eius dolorem modi consequatur fuga.</p>
        <p className="text-xl font-[Lato]  py-2 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi, minima atque veritatis laborum aliquam a reprehenderit aspernatur qui molestias.</p>
        <p className="text-xl font-[Lato] py-2 max-w-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla fugit saepe quo culpa. Perspiciatis, quam. Nobis accusantium recusandae nesciunt voluptas?</p>
        <h2 className='font-bold font-serif text-4xl mt-5 '>Madion Statement</h2>
        <p className="text-xl font-[Lato] py-2 max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid porro rerum dolor ipsa ex suscipit illo nostrum maiores, tempore eum incidunt exercitationem totam consequuntur. Vitae eum quia vero quaerat quibusdam!</p>
        <p className="text-xl font-[Lato] py-2 max-w-lg ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident earum consectetur voluptas doloremque ex excepturi minima sed voluptatibus officiis eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, impedit.</p>
      </div>
     </div>
    </section>
  )
}

export default About