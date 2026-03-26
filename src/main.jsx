import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider, Routes } from 'react-router-dom'
import  Home  from './Sections/Home.jsx'
import About from './Sections/About.jsx'
import Services from './Sections/Services.jsx'
import Contact from './Sections/Contact.jsx'
import Shop from './Sections/Shop.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/services',
        element:<Services/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
