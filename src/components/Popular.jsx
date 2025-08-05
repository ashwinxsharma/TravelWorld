import React from 'react'
const destination = [
    {
        image: '/Images/agra.jpg',
        title: 'Agra,India',
        Description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra'
    },

    {
        image: '/Images/tokyo.jpg',
        title: 'Tokyo,Japan',
        Description: 'Tokyo, officially known as Tokyo Metropolis, is the capital and most populous city in Japan, serving as the nation political, economic, and cultural center'
    },
    {
        image: '/Images/istanbul.jpg',
        title: 'Istanbul,Turkey',
        Description: 'It is a City in Turkey'
    },
    {
        image: '/Images/paris.jpeg',
        title: 'Paris,France',
        Description: 'City in France'
    }

]

const Popular = () => {
  return (
    <div className=' py-12 bg-gray-100'>
   <div className=' px-4'>
    <h1 className=' text-3xl font-bold text-center mb-8'> Popular Destinations</h1>
    <div  className=' grid grid-cols-4  gap-6'>
        {destination.map((city, index) => (
            <div key={index} className=' bg-white  rounded-lg overflow-hidden shadow-md'>
            <img src={city.image} className=' h-70 object-cover transform transition duration-300 hover:scale-105 w-full' />
            <div>
                <h1  className=' ml-7 mt-5 text-xl font-bold mb-2'>{city.title}</h1>
                <p className=' ml-7  text-gray-600'> {city.Description}</p>
            </div>
             </div>
        ))}
    </div>
   </div>
    </div>
    
    
  )
}

export default Popular