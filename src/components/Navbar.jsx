import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=' fixed m-4 bg-gray-900 text-white top-0 right-0 left-0 shadow-lg z-50 border rounded-full'>

    <div className=' px-5 flex justify-between items-center h-16'>
        <div>
            <h1 className=' text-2xl font-bold'>Travel</h1>
        </div>
        <div className=' flex gap-4 text-xl font-bold items-center'>
            <Link to="/" className=' px-6 py-2 hover:bg-gray-600 hover:text-white'> Home </Link>
             <Link to="/gallery" className=' px-6 py-2 hover:bg-gray-600 hover:text-white'> Gallery </Link>
              <Link to="/contact" className=' px-6 py-2 hover:bg-gray-600 hover:text-white'> Contact </Link>
               <Link to="/about" className=' px-6 py-2 hover:bg-gray-600 hover:text-white'> About </Link>
               <button className=' py-2 px-6 border  bg-gray-600 text-white hover:bg-black'> Login</button>
        </div>
        </div>
    </nav>
  )
}

export default Navbar