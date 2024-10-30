import { Button } from '@/components/ui/button';
import { GetPlaceDetails } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FcCalendar } from "react-icons/fc";
import { IoIosSend } from "react-icons/io";

function InfoSection({trip}) {

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
  <div>
      {trip ? (
          <>
              <img
                  src={PhotoUrl || 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg'}
                  alt="img"
                  className="w-full h-[300px] object-cover rounded-xl"
              />
              
              <div className="my-5 flex flex-col gap-2">
                  <h2 className="text-2xl font-bold ">{trip?.userChoice?.location?.label}</h2>
                  <div className="flex justify-between">
                      <div className="flex gap-5">
                          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                              <FcCalendar /> {trip?.userChoice?.noOfDays} Days
                          </h2>
                          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                              💰 {trip?.userChoice?.budget} Budget
                          </h2>
                          <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                              🧑🏻‍🤝‍🧑🏻 No of Traveler {trip?.userChoice?.traveler} People
                          </h2>
                      </div>
                      <Button><IoIosSend /></Button>
                  </div>
              </div>
          </>
      ) : (
          <div className="animate-pulse">
              {/* Skeleton for Image */}
              <div className="bg-gray-300 w-full h-[300px] rounded-xl"></div>

              {/* Skeleton for Text and Icon Content */}
              <div className="my-5 flex flex-col gap-2">
                  {/* Location Title */}
                  <div className="h-8 bg-gray-300 rounded w-1/2"></div>
                  
                  {/* Flex container for badges and button */}
                  <div className="flex justify-between items-center">
                      {/* Badges */}
                      <div className="flex gap-5">
                          <div className="p-2 bg-gray-200 rounded-full h-6 w-24"></div>
                          <div className="p-2 bg-gray-200 rounded-full h-6 w-24"></div>
                          <div className="p-2 bg-gray-200 rounded-full h-6 w-32"></div>
                      </div>
                      {/* Button */}
                      <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                  </div>
              </div>
          </div>
      )}
  </div>
);

}

export default InfoSection