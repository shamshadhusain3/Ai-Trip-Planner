import React from 'react'

import PlanCard from './PlanCard'

function PlaceToVisit({trip}) {
  return (
    <div className='mt-3 border-t-2 pt-2'>
        <h2 className="font-bold text-xl">Places to Visit</h2>
        <div className="">
            {trip?.tripData?.itinerary.map((item,index)=>(
                <div key={index} className="">
                   <h2 className="font-bold text-md"> {item.day}</h2>
                   <div className="time-to-visit grid md:grid-cols-2 gap-5">
                    {item.plan?.map((plan,index)=>(
                        <div className="">
                            <h2 className='text-orange-600 font-medium'>{plan.time}</h2>
                            <PlanCard plan={plan}/>
                        </div>
                    ))}
                   </div>
                </div>
            ))
            }

        </div>

    </div>
  )
}

export default PlaceToVisit