import React from 'react'
import Popular from './components/Popular'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

const Home = () => {
  return (
    <>
    <div className=' relative h-screen bg-cover bg-center ' style={{backgroundImage: `url("/Images/home.jpg")`}}>
        <div className=' absolute inset-0 flex flex-col justify-center items-center mt-0 mb-57 '>
            <h1 className=' text-6xl mb-4 font-bold text-black'>Explore the World With Us</h1>
            <p className=' text-lg mb-8 '> Discover amzaing places with Exclusice Discounts</p>
            <button className=' text-lg border rounded-full px-6 py-2  hover:bg-blue-500  transform transition duration-300 hover:scale-105'>Get Started</button>
        </div>
        
    </div>
    <Popular />
    <Services />
    <Testimonials />
    </>
    

  )
}

export default Home   