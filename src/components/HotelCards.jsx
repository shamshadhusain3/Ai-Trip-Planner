import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function HotelCards({hotel,index}) {
    const [PhotoUrl, setPhotoUrl] = useState('')
    useEffect(() => {
     hotel && GetPlacePhoto();
    }, [hotel])
    
  
  
  
  const GetPlacePhoto = async () => {
    try {
      const data = {
        textQuery: hotel?.hotelName ,
      };
  
      const result = await GetPlaceDetails(data);
      // console.log( result.data?.places[0]?.photos[8]?.name);
     const placePhotName=result.data?.places[0]?.photos[2]?.name
  
      const PHOTO_Ref_URL = `https://places.googleapis.com/v1/${placePhotName}/media?max_height_px=4000&max_width_px=4500&key=AIzaSyDgfnRW7rOirf0eSCTeFZHhgB9REzdDE18`
  
  
      setPhotoUrl(PHOTO_Ref_URL)
    } catch (error) {
      console.error("Error fetching place details:", error.response?.data || error.message);
    }
  };
  

  return (
    <Link key={index} to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+","+ hotel?.hotelAddress} target='_blank'>
    <div className="flex flex-col gap-2 hover:scale-105 transition-all" >
        <img src={PhotoUrl || 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg'} className=' h-[180px] w-full object-cover rounded-lg'/>

        <h2 className="font-medium ">{hotel?.hotelName}</h2>
        <h2 className="text-sm font-bold  text-gray-500">📍{hotel?.hotelAddress}</h2>
        <h2 className="text-sm font-bold  text-slate-900">💰 {hotel?.price}</h2>
        <h2 className="text-sm font-bold  text-slate-900">⭐ {hotel?.rating} stars</h2>



    </div>
    </Link>
)
}

export default HotelCards