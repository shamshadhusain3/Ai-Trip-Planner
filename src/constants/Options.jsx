export const SelectTravelesList=[
    {id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people:'1'
    },
    {id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'🥂',
        people:'2'
    },
    {id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'🏡',
        people:'3 to 5 People'
    }
    ,
    {id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'⛵',
        people:'5 to 10 People'
    }
]


export const SelectBidgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon:'💸',
    },
  
]


export const AI_PROMPT="Generate Travel Plan for Location : {location} for {totalDays} days for {traveler} people with a {budget} budget, Give me a Hotel options list with HotelName, Hotel address, Price, Hotel image url, geo Coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image url, Geo coordinates, ticket Pricing, rating, Time travel to each location, and TimeTotravel for each place for 3 days with each day plan with best time to visit in JSON format."