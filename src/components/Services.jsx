import React from 'react'
import {FaPlane, FaHotel, FaUmbrellaBeach, FaConciergeBell} from  'react-icons/fa';


const Service = [
    {
        icon: <FaPlane className=' text-4xl text-blue-500' />,
        title: 'Flight Booking',
        Description: 'We provide easy and quick flight services to make your travel hassle free'
    },

    {
        icon: <FaHotel className=' text-4xl text-blue-500' /> ,
        title: 'Hotel Booking',
        Description: ' Book hotels at best prices with our exclusive deals and discounts'
    },
    {
        icon: <FaUmbrellaBeach className=' text-4xl text-blue-500' /> ,
        title: 'Beach Tours',
        Description: 'Enjoy relaxing beach tours with all inclusive packages and guided tours'
    },
    {
        icon: <FaConciergeBell className=' text-4xl text-blue-500' />  ,
        title: 'Concierge Services',
        Description: 'Get personalised concierge services for a seamless travel experience'
    }

]

const Services = () => {
  return (
   <div className=' py-12 bg-gray-100'>
   <div className=' px-4'>
    <h1 className=' text-3xl font-bold text-center mb-8'> Our Services</h1>
    <div  className=' grid grid-cols-4  gap-6'>
        {Service.map((service, index) => (
            <div key={index} className=' bg-white  rounded-lg flex flex-col p-4 justify-center shadow-md'>
            <div>
                <h1 className=' mb-2  items-center text-center flex justify-center'>{service.icon}</h1>
            </div>
            <div>
                <h1  className='  mt-2 text-xl font-bold mb-2 text-center'>{service.title}</h1>
                <p className=' ml-7  text-gray-600'> {service.Description}</p>
            </div>
             </div>
        ))}
    </div>
   </div>
    </div>
    
  )
}

export default Services