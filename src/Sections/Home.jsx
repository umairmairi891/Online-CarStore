import React, { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      // once:false
    });
  }, [])
  const feature = [
    {
      img: '/pexels-mikebirdy-93652.jpg',
      title: 'MikeBirdy'
    },
    {
      img: '/bugatti-w16-mistral-3840x2160-25227.jpg',
      title: 'Bugatti'
    },
     {
      img: '/lamborghini-aventador-black-cars-cgi-3840x2160-3458.jpg',
      title: 'Lamborghini Aventador'
    }
  ]
  return (
    <div className="">
      <section className='relative h-65 md:h-90  w-full  '>
        <div className="absolute inset-0 z-0">
          <img src="/pexels-milan-masnikosa-3898301-5802053.jpg" alt='Hero Image' className='w-full h-full object-cover opacity-50 ' />
        </div>
        <h3 className='text-white relative font-[Itel] top-15 md:top-20 leading-10 left-15 md:left-40 max-w-2 text-start text-xl md:text-2xl font-bold'>EXPERIENCE AUTOMATIVE EXCELLENCE</h3>
        <button className='bg-white relative cursor-pointer top-18 md:top-25 left-15 md:left-40 flex justify-around px-1 md:px-4 py-2 rounded font-bold font-serif hover:bg-black hover:text-white hover:duration-200'>Shop Now <span className='ml-1 md:ml-4'><ArrowRight className='w-6 h-6' /></span></button>
      </section>
      <section className='bg-white w-full  ' data-aos='fade-up'>
        <div className="p-5 flex flex-col items-center " >
          <h2 className=' text-lg md:text-2xl font-bold font-[Itel] text-center'>FEATURED VEHCILES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-5 mb-10 gap-1 md:gap-8">
            {feature.map((val) => (
              <div key={val.title}  className="py-1 md:py-6 scale-100 hover:scale-110 hover:duration-400">
                <img loading='lazy' src={val.img} alt={val.title} className='rounded w-90' />
                <h2 className='font-bold text-lg mt-3 font-[Roboto] px-5'>{val.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-gray-400 w-full  py-5  ' data-aos='fade-up'>
        <div className="p-5 px-5 md:px-30">
          <div className="flex flex-col-reverse md:flex-row justify-center gap-10 ">
            <div className="">
              <img src='/bugatti-w16-mistral-3840x2160-25227.jpg' alt="" className='w-full h-100 opacity-70' />
            </div>
            <div className="">
              <h2 className='text-3xl font-black font-serif py-3 border-b-2'>Our Approach</h2>
              <p className="max-w-100 sm:max-w-200 md:max-w-200 lg:max-w-100 text-xl py-3 font-[Itel]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, tempora nulla laboriosam eius rem inventore? Beatae quibusdam, excepturi, sint rem doloribus iusto, praesentium delectus debitis magnam molestiae tempore aperiam omnis placeat iure exercitationem voluptate fugiat itaque perferendis quos mollitia ex.</p>
              <button className='bg-black px-2 py-2 font-[Roboto] text-white mt-5 rounded cursor-pointer hover:bg-gray-900'>Learn More...</button>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white' data-aos='fade-up'>
        <div className="flex flex-col py-5 ">
          <div className="text-center">
            <h3 className='text-3xl py-5  font-serif font-bold'>VISIT US</h3>
          </div>
          <div className="">
            <img src="/ITAB_Bednarek_Polen_Retail_Lighting (2).jpg" className='w-full h-[60vh] object-cover' alt="" />
          </div>
        </div>
      </section>
    </div>

  )
}

export default Home