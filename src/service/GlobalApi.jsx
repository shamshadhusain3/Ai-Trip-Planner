// import axios from "axios";

// const BASE_URL='https://places.googleapis.com/v1/places:searchText';

// const config = {
//     header:{
//         'Content-Type':'application/json',
//         // 'X-Goog-Api-Key':import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
//         'X-Goog-Api-Key':'AIzaSyDgfnRW7rOirf0eSCTeFZHhgB9REzdDE18',
//         'X-Goog-FieldMask':[
//             'places.photos',
//             'places.displayName',
//             'places.id'
//         ]
//     }
// }



// export const GetPlaceDetails=(data)=>axios.post(BASE_URL,data,config) 




import axios from "axios";

const BASE_URL = 'https://places.googleapis.com/v1/places:searchText';

export const GetPlaceDetails = (data) => 
    axios.post(BASE_URL, data, {
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key':'AIzaSyDgfnRW7rOirf0eSCTeFZHhgB9REzdDE18',
                    'X-Goog-FieldMask':[
                        'places.photos',
                        'places.displayName',
                        'places.id'
                    ]
        }
    });
