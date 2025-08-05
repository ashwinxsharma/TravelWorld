import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' bg-gray-800 p-4 text-white h-60'>
        <div className=' grid grid-cols-3'>
            <div>
                <h1 className='text-xl font-bold mb-4'>Travel Agency</h1>
                <p>Your trusted partner for unforgettable Travel experiences.Explore the world with us</p>
            </div>
            <div className=' ml-40'>
                <h1 className='text-xl font-bold mb-4'>Quick Links</h1>
                <div className=' flex flex-col'>
                    <Link to="/" > Home </Link>
                    <Link to="/gallery" > Gallery </Link>
                    <Link to="/contact" > Contact </Link>
                    <Link to="/about" >  About </Link>
                </div>
            </div>
            <div className=' ml-40'> 
            <h1 className=' text-xl font-bold mb-4 '>Follow us</h1>
            <div className=' flex space-x-4 mb-4'>
                <FaFacebook size={24} className=' text-blue-500' />
                <FaInstagram size={24} className=' text-pink-500' />
                <FaTwitter size={24} className=' text-blue-500' />
                <FaYoutube size={24} className=' text-red-400' />
            </div>
            <form>
                <input type='email' placeholder='Write your Email' />
                <button type='submit' className=' bg-blue-800 rounded-l-full rounded-r-full '>Subscribe</button>
            </form>

             </div>



        </div>

        <div className=' flex justify-between  '>
        <p> 2025 Travel Agency. All rights reserved </p>
            <div className=' flex space-x-4 mr-25'><Link to="" > Privacy Policy </Link>
                    <Link to="" >  Terms Of SErvices </Link></div>
        </div>
         

    </div>
  )
}

export default Footer