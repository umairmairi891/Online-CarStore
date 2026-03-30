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
        <p className="text-xl font-[Lato] py-2 max-w-lg">For over two decades, <span className='font-semibold'>LUXE AUTO SYNDICATE</span> has been the custodian of automotive masterpieces. We began with a simple mission: to connect the world’s most discerning drivers with the pinnacle of engineering. From the roar of naturally aspirated V12s to the timeless silhouettes of Italian design, our history is written in the tire marks of the world's greatest circuits.</p>
        <p className="text-xl font-[Lato]  py-2 max-w-lg">We aren't just looking at the rearview mirror. Our vision is to define the next era of luxury mobility. As the automotive world shifts toward hybridization and sustainable hyper-performance, [Showroom Name] will remain the North Star for enthusiasts—guiding you toward the future of speed without ever losing the soul of the drive.</p>
        {/* <p className="text-xl font-[Lato] py-2 max-w-lg">Respecting the craft. Honoring the engineers. Preserving the icons. We have spent years mastering the art of the collection, ensuring that every vehicle we house is a worthy chapter in automotive history.?</p> */}
        <h2 className='font-bold font-serif text-4xl mt-5 '>Misssion Statement</h2>
        <p className="text-xl font-[Lato] py-2 max-w-lg">To provide an unparalleled acquisition experience by curating the world’s most iconic automotive masterpieces. We are committed to connecting discerning drivers with the pinnacle of engineering, ensuring that every vehicle we deliver is a testament to performance, luxury, and absolute precision.</p>
        <p className="text-xl font-[Lato] py-2 max-w-lg ">To ignite the soul of the drive. We exist to bring the world’s most exhilarating machines off the track and into your hands. Our mission is to fuel the passion of the global automotive community through transparency, expert knowledge, and an unwavering dedication to the art of the supercar.</p>
      </div>
     </div>
    </section>
  )
}

export default About