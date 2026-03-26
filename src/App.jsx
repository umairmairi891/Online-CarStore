import { useState } from 'react'
import './App.css'
import Header from './Sections/Header'
import Footer from './Sections/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default App
