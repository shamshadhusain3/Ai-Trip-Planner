import { db } from "@/service/FirebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";
import UserTripCard from "./UserTripCard";

function MyTrip() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userTrip, setuserTrip] = useState([])
  const navigate = useNavigation();

  useEffect(() => {
    GetUserTrip();
  }, []);

  const GetUserTrip = async () => {
    console.log('user',user.email);
    if (!user) {
      navigate("/");
      return;
    }
    const q = query(collection(db, "AiTrip"), where("userEmail", "==", user?.email));
    
    const querySnapshot = await getDocs(q);
    setuserTrip([])
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log('data',doc.id, " => ", doc.data());
      setuserTrip(prev=>[doc.data(),...prev])
    });
  };

  return (
  <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
  <h2 className="font-bold text-3xl ">MY Trips</h2>  

  <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10" >
    {
    userTrip.length>0?
    userTrip.map((trip,index)=>(
        <UserTripCard trip={trip} index={index} />
    )
   
)
:
[1,2,3,4,5,6,7].map((trip, index)=>(
    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
    {/* Skeleton for Image */}
    <div className="bg-gray-300 w-full h-40 rounded-t-lg"></div>
    
    {/* Skeleton for Text Content */}
    <div className="p-4 space-y-2">
        <div className="bg-gray-300 h-6 w-3/4 rounded"></div>
        <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
        <div className="bg-gray-300 h-4 w-5/6 rounded"></div>
    </div>
</div>
))

}
  </div>
  </div>
  )
}

export default MyTrip;
