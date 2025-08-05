import React from 'react'
const testimonial = [
    {
        image: '/Images/virat.avif',
        title: 'Virat Kohli',
        Description: 'This travel agency provided the best services amazingly surprised and highly recommend'
    },

    {
        image: '/Images/sachin.avif',
        title: 'Sachin Tendulkar',
        Description: 'Amazing experience! The tour guides were highly knowledgable and destinations were breathtaking'
    },
    {
        image: '/Images/dhoni.avif',
        title: 'MS Dhoni',
        Description: 'Great customer service and travel packages.Will definitely book them again'
    },
    
]

const Testimonials = () => {
  return (
     <div className=' p-20 bg-gray-100'>
   <div className=' px-4'>
    <h1 className=' text-3xl font-bold text-center mb-8'> What Our Clients Say</h1>
    <div  className=' grid grid-cols-3  gap-6'>
        {testimonial.map((q, index) => (
            <div key={index} className=' bg-white  rounded-lg overflow-hidden shadow-md'>
            <img src={q.image} className=' h-80 object-cover transform transition duration-300 hover:scale-105 w-full' />
            <div>
                <h1  className=' ml- mt-5 text-xl font-bold mb-2 text-center'>{q.title}</h1>
                <p className=' ml-7  text-gray-600 p-7'> {q.Description}</p>
            </div>
             </div>
        ))}
    </div>
   </div>
    </div>
  )
}

export default Testimonials