import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCard({trip,index}) {

    const [PhotoUrl, setPhotoUrl] = useState('')
  useEffect(() => {
   trip && GetPlacePhoto();
  }, [trip])
  



const GetPlacePhoto = async () => {
  try {
    const data = {
      textQuery: trip?.userChoice?.location?.label,
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
    <Link to={'/view-trip/'+trip?.id}>

    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-all hover:shadow-xl">
            <img 
                src={PhotoUrl || 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg'} 
                alt="tripImage" 
                className="object-cover w-full h-40 rounded-t-lg" 
                />
            <div className="p-4">
                <h2 className="font-bold text-lg">{trip?.userChoice?.location?.label}</h2>
                <h2 className="text-sm text-gray-500">
                    {trip?.userChoice?.noOfDays} Days trip with {trip?.userChoice?.budget} Budget with {trip?.userChoice?.traveler} People
                </h2>
            </div>
        </div>
     </Link>
  )
}

export default UserTripCard