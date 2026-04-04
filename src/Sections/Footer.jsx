import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className='w-full '>

      <div className='w-full'>
        <div className="md:grid md:grid-cols-3  items-center justify-center w-full space-x-6 space-y-1 text-white  px-10 py-5 md:py-10  ">
          <div className="">
            <h2 className='font-bold text-lg md:text-xl  font-[Lato]'>LUXE AUTO SYNDICATE</h2>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-3  md:gap-5 space-x-5 ">
            <div className="">
              <ul className='font-[Lato] text-xl '>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/services'>
                <li>Services</li>
                </Link>
              </ul>
            </div>
            <div className="">
              <ul className='font-[Lato] text-xl '>
                <Link to='/shop'>
                <li>Shop</li>
                </Link>
                <Link to='/about'>
                <li>About</li>
                </Link>
              </ul>
            </div>
            <div className="">
              <ul className='font-[Lato] text-xl'>
                <Link to='/contact'>
                <li>Contact</li>
                </Link>
                <li>focus</li>
              </ul>
            </div>
          </div>
          <div className="flex  space-x-5 px-10">
            <Facebook className='bg-white text-black w-8 h-8 p-1 rounded-xl' />
            <Twitter className='bg-white text-black w-8 h-8 p-1 rounded-xl' />
            <Linkedin className='bg-white text-black w-8 h-8 p-1 rounded-xl' />
          </div>
        </div>

      </div>
      <div className="text-white w-full text-center">
        <h3 className='py-4 font-[Itel] text-xl'>All Right Reserved @2026</h3>
      </div>

    </footer>
  )
}

export default Footer