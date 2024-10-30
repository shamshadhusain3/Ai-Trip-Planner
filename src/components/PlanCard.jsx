import { GetPlaceDetails } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PlanCard({ plan }) {
  const [PhotoUrl, setPhotoUrl] = useState('')
  useEffect(() => {
   plan && GetPlacePhoto();
  }, [plan])
  



const GetPlacePhoto = async () => {
  try {
    const data = {
      textQuery: plan?.placeName,
    };

    const result = await GetPlaceDetails(data);
    // console.log('plan', result.data?.places[0]?.photos[8]?.name);
   const placePhotName=result.data?.places[0]?.photos[2]?.name

    const PHOTO_Ref_URL = `https://places.googleapis.com/v1/${placePhotName}/media?max_height_px=4000&max_width_px=4500&key=AIzaSyDgfnRW7rOirf0eSCTeFZHhgB9REzdDE18`


    setPhotoUrl(PHOTO_Ref_URL)
  } catch (error) {
    console.error("Error fetching place details:", error.response?.data || error.message);
  }
};

  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+plan?.placeName+","} target='_blank' >
      <div className="w-full border-2 p-3 overflow-hidden rounded-lg my-2 flex gap-5 md:flex-col lg:flex-row xsm:flex-col xsm:justify-center xsm:items-center hover:scale-105 hover:shadow-md transition-all ease-in-out cursor-pointer">
      <img
        src={PhotoUrl || 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg'}
        alt="img"
        className="w-[130px] h-[130px] object-cover rounded-xl"
      />
      <div className="">
        <h2 className="font-bold text-lg text-center">{plan.placeName}</h2>
        <p className="text-sm text-gray-500">{plan.placeDetails}</p>
        <p className="text-sm font-semibold mt-1">⏳Explore time: <span className=" text-green-600">{plan.timeToExplore}</span></p>
        <p className="text-xs font-medium mt-1 text-blue-500">⌚{plan.timeToTravel}</p>

      </div>
    </div>
    </Link>
  );
}

export default PlanCard;
