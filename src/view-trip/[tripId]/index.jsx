import { db } from '@/service/FirebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import InfoSection from '../InfoSection'
import Hotels from '@/components/Hotels'
import PlaceToVisit from '@/components/PlaceToVisit'
import Footer from '@/components/Footer'

function Viewtrip() {
    const {tripId}=useParams()
    const [trip, settrip] = useState();
    console.log(tripId)

   useEffect(() => {
    tripId && GetTrip();
    
    
   }, [tripId]);
   const GetTrip=async ()=>{
    const docRef=doc(db,'AiTrip',tripId);
    const docsnap=await getDoc(docRef)

    if (docsnap.exists()) {
        console.log('document :',docsnap.data() )
        settrip(docsnap.data())
    }else{
        console.log('no data')
    }
}
  return (
    <div className='p-10 md:px-44 xl:px-56'>
        <InfoSection trip={trip}/>

        <Hotels trip={trip}/>

        <PlaceToVisit trip={trip}/>

        <Footer/>
    </div>
  )
}

export default Viewtrip