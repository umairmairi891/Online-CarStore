import { Plus, Search, X } from 'lucide-react'
import React, { useState } from 'react'
import { products } from '../Products'
function Shop() {
  const [product, setProduct] = useState(products)
  const [isopen, setIsOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    model: '',
    price: '',
    img: ''
  })
  const models=['All', 'Bhugatti', 'Lamborghni','Frari']
  const addProduct=(newProduct)=>{
    setProduct(prev=>[newProduct,...prev])
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {
      id: Date.now(),
      name: form.name,
      model: form.model,
      price: form.price,
      img: form.img
    }
    console.log(products);
    addProduct(newProduct)
    console.log(product);
  }

  return (
    <section className='bg-white py-4 h-[70vh]'>
      <div className="">
        <div className="flex flex-col md:flex-row justify-around space-y-5 md:space-y-0 items-center mt-5">
          <div className="flex justify-around ">
            <button onClick={() => setIsOpen(!isopen)} className='flex justify-between items-center w-40 font-[Itel] bg-black text-emerald-50 px-4 py-1 rounded cursor-pointer text-lg '>Add New Car <span><Plus /></span></button>
          </div>
          <div className="">
            <input type="text" className='border px-4 rounded-xl py-2' name="" id="" placeholder='Search' />
          </div>
          <div className="">
            <ul className='flex space-x-2 md:space-x-5 border rounded-2xl px-2 md:px-5  max-w-lg text-lg md:text-xl font-[Lato]'>
              {models.map((val, index)=>(
                <li key={val} className='hover:bg-black hover:text-white hover:duration-300 cursor-pointer px-2  py-1 hover:rounded-xl'>
                  {val}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 mt-10 mb-10 px-10 ">
          {products.map((car) => (
            <div className="shadow-2xl rounded-xl p-5 max-w-100">
              <img src={car.img} alt="" className='w-full' />
              <h2 className='text-3xl font-bold  mt-2 font-[Roboto]'>{car.name}</h2>
              <h2 className='text-xl font-semibold mt-2 font-serif'>Model:  {car.model}</h2>
              <h2 className='text:lg mt-2 font-semibold font-[Itel]'>Price : $ {car.price}</h2>
            </div>
          ))}
        </div>
        {isopen && (
          <div className="flex bg-white justify-center z-110 absolute top-20 md:top-40 left-0 md:left-120">
            <div className="flex flex-col shadow-2xl p-5 rounded-2xl">
              <div className="flex justify-around items-center">
                <h2 className='text-center text-2xl font-[Lato]'>Add New Car</h2>
                <X className='cursor-pointer' onClick={() => setIsOpen(!isopen)} />
              </div>
              <form action="" onSubmit={handleSubmit} className='flex flex-col'>
                <input className='border-2 border-gray-600 px-3 py-1 mt-5 rounded-xl' type="text" placeholder='Enter Car Name' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input className='border-2 border-gray-600 px-3 py-1 mt-8 rounded-xl' type="text" placeholder='Enter Car Model' value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} />
                <input className='border-2 border-gray-600 px-3 py-1 mt-8 rounded-xl' type="text" placeholder='Enter Car Price' value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                <input className='border-2 border-gray-600 px-3 py-1 mt-8 rounded-xl' type="file" placeholder='Enter Car Image' value={form.img} onChange={(e) => setForm({ ...form, img: e.target.value })} />
                <button type='submit' className='bg-black text-white mt-5 py-1 rounded-xl cursor-pointer hover:bg-gray-700 font-[Itel] text-lg'>Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Shop