import React,{useEffect} from 'react'
import {Instagram, Linkedin, LucideLink} from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css';
function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      // once:false
    });
  }, [])
  return (
    <section className='bg-white'>
      <div className="w-full py-10">

        <h2 className='text-center font-bold text-2xl'>CONNECT WITH LUXE AUTO</h2>
        <div className="flex flex-col md:flex-row justify-center md:gap-50 py-5 mt-5 px-10 md:px-0">

          <div className="font-semibold space-y-3" data-aos='fade-up'>
            <h2 className="text-xl font-[Itel] ">ShowRoam</h2>
            <p className="text-base">Address</p>
            <p className="">173 Street Cafe</p>
            <p className="">luxeauto@gmail.com</p>
            <h2 className='text-xl font-bold font-[Itel]'>Business Hours</h2>
            <p>Monday to Friday</p>
            <p>8:00 AM to 10:00 PM</p>
            <div className="flex gap-5 mt-5 ">
              <Instagram className='bg-black text-white w-8 h-8 p-1 rounded-xl'/>
              <Linkedin className='bg-black text-white w-8 h-8 p-1 rounded-xl'/>
              <LucideLink className='bg-black text-white w-8 h-8 p-1 rounded-xl'/>
            </div>
          </div>
          <div className="p-10 mt-10 md:mt-0 border-2 rounded border-black flex flex-col w-70 md:w-100" data-aos='fade-up'>
            <h2 className='text-start font-bold text-2xl'>GET IN TOUCH</h2>
            <input className='mt-5 rounded py-1 px-2 border border-black w-full' type='text' placeholder='Enter Your Name' />
            <input className='mt-5 py-1 rounded px-2 border border-black w-full' type='email' placeholder='Enter Your Email' />
            <textarea className='mt-5 py-1 px-2 rounded border border-black w-full' name="" id="" placeholder='Message' cols='5' rows='5  '></textarea>
            <button className='mt-5 py-1 px-2 border border-black w-full bg-black text-white rounded-xl cursor-pointer'>Send Mesage</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact