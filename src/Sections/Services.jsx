import React,{useEffect} from 'react'
import { Car, HandCoins, Settings, Shield } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css';
function Services() {
  useEffect(() => {
      AOS.init({
        duration: 1200,
        // once:false
      });
    }, [])
  return (
    <section className='w-full  bg-white py-5 '>
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h3 className='font-bold font-serif text-3xl'>SERVICES</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 py-5 px-5 md:px-0">
           <div className="p-10  border-2 flex flex-col rounded justify-center items-center max-w-100" data-aos='fade-up'>
            <Car className='text-black w-10 h-10'/>
            <h2 className='mt-2 font-bold text-center  text-lg'>VEHICLES SALES & ACQUISITIONS </h2>
            <p className="text-base mt-4 ">Browse Created Mentory</p>
           </div>
           <div className="p-10 bg-silver-100 border-2 flex flex-col rounded justify-center items-center max-w-100" data-aos='fade-up'>
            <HandCoins className='text-black w-10 h-10'/>
            <h2 className='mt-2 font-bold  text-lg'>PREMIUM FINANCING</h2>
            <p className="text-base mt-4">Promote Products to Premium Financing</p>
           </div>
           <div className="p-10 bg-silver-100 border-2 flex flex-col rounded justify-center items-center max-w-100" data-aos='fade-up'>
            <Settings className='text-black w-10 h-10'/>
            <h2 className='mt-2 font-bold  text-lg'>REPAIR VEHICLE</h2>
            <p className="text-base mt-4">Mentainence and Repairs</p>
           </div>
           <div className="p-10 bg-silver-100 border-2 flex flex-col rounded justify-center items-center max-w-100" data-aos='fade-up'>
            <Shield className='text-black w-10 h-10'/>
            <h2 className='mt-2 font-bold text-center text-lg'>TAKING VEHICLE PROTECTION</h2>
            <p className="text-base mt-4">Protect your Vehicle</p>
           </div>
        </div>
      </div>
      <div className="w-full text-center">

      <button className='px-3 py-1 rounded cursor-pointer  font-bold text-xl bg-black text-white'>Make Appointment</button>
      </div>
    </section>
  )
}

export default Services