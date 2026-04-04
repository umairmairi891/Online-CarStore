import { Plus, Search, Trash, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { products } from '../Products'
const localstorageKey='carstore'
function Shop() {
  const [product, setProduct] = useState(()=>{
    const saveCar=localStorage.getItem(localstorageKey)
    if(saveCar){
      return JSON.parse(saveCar)
    }
    
      return products
    
  })
  useEffect(()=>{
    localStorage.setItem(localstorageKey, JSON.stringify(product))
  },[product])
  const [isopen, setIsOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    model: '',
    price: '',
    img: ''
  })
  const models=['All', 'Bhugatti', 'Lamborghni','Frari']

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {
      id: Date.now(),
      name: form.name,
      model: form.model,
      price: form.price,
      img: form.img
    }
     setProduct(prev=>[newProduct,...prev])

    setIsOpen(false) 
    setForm({ name: '', model: '', price: '', img: '' }) 
  }

  const deleteCar=(id)=>{
    setProduct(prev=>prev.filter((car)=>car.id!==id))
  }

  return (
    <section className='bg-white py-4 h-auto'>
      <div className="">
        <div className="flex flex-col md:flex-row justify-around space-y-5 md:space-y-0 items-center mt-5">
          <div className="flex justify-around ">
            <button onClick={() => setIsOpen(!isopen)} className='flex justify-between items-center w-40 font-[Itel] bg-black text-emerald-50 px-4 py-1 rounded cursor-pointer text-sm md:text-lg '>Add New Car <span><Plus /></span></button>
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3 mt-10 mb-10 px-10 ">
          {product.map((car) => (
            <div key={car.id} className="shadow-xl rounded-xl p-5 max-w-100">
              <img src={car.img} alt="" className='w-full' />
              <div className="flex w-full justify-between items-center">
              <h2 className='text-3xl font-bold  mt-2 font-[Roboto]'>{car.name}</h2>
              <button className='w-5 h-5 cursor-pointer ' onClick={()=>deleteCar(car.id)}><Trash className='text-black'/></button>
              </div>
              <h2 className='text-xl font-semibold mt-2 font-serif'>Model:  {car.model}</h2>
              <h2 className='text:lg mt-2 font-semibold font-[Itel]'>Price : $ {car.price} M</h2>
            </div>
          ))}
        </div>
        {isopen && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-110">
            <div className="bg-white flex flex-col shadow-2xl p-5 rounded-2xl w-96">
              <div className="flex justify-between items-center">
                <h2 className='text-2xl font-bold font-[Roboto]'>Add New Car</h2>
                <X className='cursor-pointer' onClick={() => setIsOpen(false)} />
              </div>
              <form onSubmit={handleSubmit} className='flex flex-col'>
                <input required className='border-2 border-gray-600 px-3 py-1 mt-5 rounded-xl' type="text" placeholder='Car Name' value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input required className='border-2 border-gray-600 px-3 py-1 mt-4 rounded-xl' type="text" placeholder='Car Model' value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} />
                <input required className='border-2 border-gray-600 px-3 py-1 mt-4 rounded-xl' type="number" placeholder='Price' value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
                <input required className='border-2 border-gray-600 px-3 py-1 mt-4 rounded-xl' type="text" placeholder='Image URL' value={form.img} onChange={(e) => setForm({ ...form, img: e.target.value })} />
                <button type='submit' className='bg-black text-white mt-5 py-2 rounded-xl hover:bg-gray-700 transition-colors'>Submit</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Shop