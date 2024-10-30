import React from 'react'
import { Link } from 'react-router-dom'
import HotelCards from './HotelCards'

function Hotels({trip}) {
  return (
    <div className='mt-5'>
        <h1 className="text-xl m-3 ">Hotel Recommendation</h1>
        
        <div className="hotels cursor-pointer grid grid-col-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {trip?.tripData?.hotelOptions.map((hotel,index)=>(
               <HotelCards hotel={hotel} index={index}/>
            ))}
        </div>
    </div>
  )
}

export default Hotels