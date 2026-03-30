import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import 'animate.css' 
function Header() {
    const [isopen, setIsOpen] = useState(false)
    return (
        <div className='sticky '>
            <nav className='bg-white   flex justify-around sticky border-b-2 border-black '>
                <div className="max-w-40 ">
                    <h2 className='font-bold text-lg md:text-xl  font-[Lato]'>LUXE AUTO SYNDICATE</h2>
                </div>
                <div className={`text-black md:flex items-center  hidden`}>
                    <ul className={`space-x-5 text-xl  font-[Roboto] flex md:flex-row flex-col   bg-white   items-center justify-center`}>
                        <li><NavLink className={({ isActive }) => isActive ? 'border-b py-2 duration-400' : 'border-0 '} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'border-b py-2 duration-400' : 'border-0'} to='/services'>Services</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'border-b py-2 duration-400' : 'border-0'} to='/about'>About</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'border-b py-2 duration-400' : 'border-0'} to='/contact'>Contact</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'border-b py-2 duration-400' : 'border-0'} to='/shop'>Shop</NavLink></li>
                    </ul>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isopen)} className='duration-400'>
                        {isopen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>
            {isopen && (
                <div className='md:hidden flex flex-col w-full animate__animated  animate__fadeInRight bg-white  top-14 duration-500  z-110'>
                    <ul className={`text-xl font-[Roboto] space-y-2 px-5 rounded-2xl bg-white`}>
                        <li><NavLink className={({ isActive }) => isActive ? 'border-b py-2 duration-400' : 'border-0 '} onClick={()=>setIsOpen(!isopen)} to='/'>Home</NavLink></li>
                        <li><NavLink onClick={()=>setIsOpen(!isopen)} className={({ isActive }) => isActive ? 'border-b py-2 duration-400' : 'border-0 '} to='/services'>Services</NavLink></li>
                        <li><NavLink onClick={()=>setIsOpen(!isopen)} className={({ isActive }) => isActive ? 'border-b py-2 duration-400' : 'border-0 '} to='/about'>About</NavLink></li>
                        <li><NavLink onClick={()=>setIsOpen(!isopen)} className={({ isActive }) => isActive ? 'border-b py-2 duration-400' : 'border-0 '} to='/contact'>Contact</NavLink></li>
                        <li><NavLink onClick={()=>setIsOpen(!isopen)} className={({ isActive }) => isActive ? 'border-b py-2 duration-400 mb-5' : 'border-0'} to='/shop'>Shop</NavLink></li>

                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header