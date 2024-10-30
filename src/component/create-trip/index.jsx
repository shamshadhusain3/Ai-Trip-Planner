// import React, { useEffect, useState } from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// import { Input } from "@/components/ui/input";
// import { AI_PROMPT, SelectBidgetOptions, SelectTravelesList } from '@/constants/Options';
// import { Button } from '@/components/ui/button';
// import { toast } from 'sonner';
// import { chatSession } from '@/service/AIModel';
// import { FcGoogle } from "react-icons/fc";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { useGoogleLogin } from '@react-oauth/google';


// function CreatTrip() {
//   const apiKey = import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
//   const [place, setplace] = useState();
//   const [formData, setformData] = useState([]);
//   const [openDialog, setopenDialog] = useState(false);

//   const handleInputChange = (name, value) => {
//     setformData({
//       ...formData,
//       [name]: value
//     });
//   };

//   useEffect(() => {
//     // console.log(formData);
//   }, [formData]);

//   const login = useGoogleLogin({
//     onSuccess:(codeResp)=>{
//       console.log(codeResp)
//       return GetUserProfile(codeResp)},
//     onError:(error)=>console.log(error)
//   })

//   const OnGenerateTrip=async ()=>{

//     const user=localStorage.getItem('user')
//     if(!user){
//       setopenDialog(true)
//       return
//     }

//     if(formData?.noOfDays>5 && !formData?.location || !formData?.budget || !formData?.traveler){
//       toast("please fill all the fields")
   
//       return
//     }
//     console.log(formData)
//     const FINAL_PROMPT=AI_PROMPT
//     .replace('{location}',formData?.location?.label)
//     .replace('{totalDays}',formData?.noOfDays)
//     .replace('{traveler}',formData?.traveler)
//     .replace('{budget}',formData?.budget)
  
  
//     const result =await chatSession.sendMessage(FINAL_PROMPT)
//     console.log(result?.response?.text())
//   }

//   const GetUserProfile = (tokenInfo) => {
//     axios
//       .get(
//         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, // Fixed the typo here
//         {
//           headers: {
//             Authorization: `Bearer ${tokenInfo?.access_token}`,
//             Accept: 'application/json', // It should be lowercase 'application/json'
//           },
//         }
//       )
//       .then((resp) => {
//         localStorage.setItem('user', JSON.stringify(resp.data));
//         setopenDialog(false);
//         OnGenerateTrip();
//         console.log(resp);
//       })
//       .catch((error) => {
//         console.error('Error fetching user profile:', error);
//       });
//   };
  


//   return (
//     <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
//       <h2 className="font-bold text-3xl capitalize">Tell us your travel preferences 🏕️🌴</h2>
//       <p className="mt-3 text-gray-500 text-xl">
//         Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
//       </p>
//       <div className="mt-20 flex flex-col gap-9">
//         {/* Destination */}
//         <div>
//           <h2 className="text-xl my-3 font-medium">What is your destination?</h2>
//           <GooglePlacesAutocomplete
//             apiKey={'AIzaSyDgfnRW7rOirf0eSCTeFZHhgB9REzdDE18'}
//             selectProps={{
//               place,
//               onChange: (v) => { setplace(v); handleInputChange('location', v); }
//             }}
//           />
//         </div>

//         {/* Number of Days */}
//         <div>
//           <h2 className="text-xl my-3 font-medium">How many days are you planning your trip?</h2>
//           <Input
//             placeholder='Ex.3'
//             type="number"
//             onChange={(e) => handleInputChange('noOfDays', e.target.value)}
//           />
//         </div>

//         {/* Budget Section */}
//         <div>
//           <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
//           <div className="grid grid-cols-3 gap-5 mt-5">
//             {SelectBidgetOptions.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleInputChange('budget', item.title)}
//                 className={`p-4 border rounded-lg hover:shadow-xl shadow-sm
//                 ${formData?.budget === item.title ? 'shadow-lg border-black' : ''}`}
//               >
//                 <h2 className="text-4xl">{item.icon}</h2>
//                 <h2 className="font-bold text-lg">{item.title}</h2>
//                 <h2 className="text-sm text-gray-500">{item.desc}</h2>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Travelers Section */}
//         <div>
//           <h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure?</h2>
//           <div className="grid grid-cols-3 gap-5 mt-5">
//             {SelectTravelesList.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleInputChange('traveler', item.people)}
//                 className={`p-4 border rounded-lg hover:shadow-xl shadow-sm
//                 ${formData?.traveler === item.people ? 'shadow-lg border-black' : ''}`}
//               >
//                 <h2 className="text-4xl">{item.icon}</h2>
//                 <h2 className="font-bold text-lg">{item.title}</h2>
//                 <h2 className="text-sm text-gray-500">{item.desc}</h2>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div className="my-10 justify-end flex">
//           <Button 
//           onClick={OnGenerateTrip}
//           >Generate Trip</Button>
//         </div>
//       <Dialog open={openDialog}>
 
//   <DialogContent>
//     <DialogHeader>
//     <DialogTitle className="logo text-3xl text-slate-900 font-extrabold">DtripP</DialogTitle>
//       <DialogDescription>
     
//        <h2 className="font-bold text-slate-800 text-lg mt-7">Sign in With Google</h2>
//        <p className='my-2 font-semibold'>sign in to the App with Google authentication securely</p>

//        <Button
//        onClick={login}
//        className='w-full bg-slate-900 flex justify-center items-center hover:bg-slate-950 gap-2'><FcGoogle className='h-7 w-7' /> Sign in With Google </Button>
//       </DialogDescription>
//     </DialogHeader>
//   </DialogContent>
// </Dialog>
//       </div>

//     </div>
//   );
// }

// export default CreatTrip;



import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from "@/components/ui/input";
import { AI_PROMPT, SelectBidgetOptions, SelectTravelesList } from '@/constants/Options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModel';
import { FcGoogle } from "react-icons/fc";
import { doc, setDoc } from "firebase/firestore"; 
import axios from 'axios'; // Fixed missing import for axios
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useGoogleLogin } from '@react-oauth/google';
import { db } from '@/service/FirebaseConfig';
import { useNavigate } from 'react-router-dom';


function CreatTrip() {
  const navigate=useNavigate();
  const apiKey = import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
  const [place, setplace] = useState();
  const [formData, setformData] = useState({});
  const [openDialog, setopenDialog] = useState(false);
  const [loading, setloading] = useState(false);

  const handleInputChange = (name, value) => {
    setformData({
      ...formData,
      [name]: value
    });
  };

  const login = useGoogleLogin({
    onSuccess: (codeResp) => {
      console.log(codeResp);
      return GetUserProfile(codeResp);
    },
    onError: (error) => console.log(error)
  });

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem('user');
    if (!user) {
      setopenDialog(true);
      return;
    }
  
    if (formData?.noOfDays > 5 && (!formData?.location || !formData?.budget || !formData?.traveler)) {
      toast("please fill all the fields");
      return;
    }
    setloading(true);
  
    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location?.label)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.traveler)
      .replace('{budget}', formData?.budget);
  
    try {
      // Get the result from chatSession
      const result = await chatSession.sendMessage(FINAL_PROMPT);
      
      // Extract the text response from result
      const tripDataText = await result?.response?.text();
  
      console.log(tripDataText); // Log the trip data for debugging
  
      // Pass the plain text response to SaveAiTrip
      await SaveAiTrip(tripDataText);
      
      setloading(false); // Stop loading after saving the trip
    } catch (error) {
      console.error('Error generating trip:', error);
      setloading(false); // Stop loading in case of an error
    }
  };
  
  const SaveAiTrip = async (tripDataText) => {
    setloading(true);
  
    const docId = Date.now().toString();
    const user = JSON.parse(localStorage.getItem('user'));
  
    try {
      // Save the trip data with the plain text response
      await setDoc(doc(db, "AiTrip", docId), {
        userChoice: formData,
        tripData: JSON.parse(tripDataText), // This is the plain text string from response.text()
        userEmail: user?.email,
        id: docId
      });
  
      console.log('AI Trip saved successfully!');
       // Log for debugging
       navigate('/view-trip/'+docId)
    } catch (error) {
      console.error('Error saving AI Trip:', error);
    } finally {
      setloading(false); // Stop loading after the save process completes
    }
  };
  
  

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: 'application/json',
          },
        }
      )
      .then((resp) => {
        localStorage.setItem('user', JSON.stringify(resp.data));
        setopenDialog(false);
        OnGenerateTrip();
        console.log(resp);
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className="font-bold text-3xl capitalize">Tell us your travel preferences 🏕️🌴</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-9">
        {/* Destination */}
        <div>
          <h2 className="text-xl my-3 font-medium">What is your destination?</h2>
          <GooglePlacesAutocomplete
            apiKey={'AIzaSyDgfnRW7rOirf0eSCTeFZHhgB9REzdDE18'}
            selectProps={{
              place,
              onChange: (v) => { setplace(v); handleInputChange('location', v); }
            }}
          />
        </div>

        {/* Number of Days */}
        <div>
          <h2 className="text-xl my-3 font-medium">How many days are you planning your trip?</h2>
          <Input
            placeholder='Ex. 3'
            type="number"
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />
        </div>

        {/* Budget Section */}
        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBidgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange('budget', item.title)}
                className={`p-4 border rounded-lg hover:shadow-xl shadow-sm
                ${formData?.budget === item.title ? 'shadow-lg border-black' : ''}`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Travelers Section */}
        <div>
          <h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange('traveler', item.people)}
                className={`p-4 border rounded-lg hover:shadow-xl shadow-sm
                ${formData?.traveler === item.people ? 'shadow-lg border-black' : ''}`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="my-10 justify-end flex">
        <Button onClick={OnGenerateTrip}>
          {loading ?'loading...':'Generate Trip'}
          </Button>
        </div>
      
        <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="logo text-3xl text-slate-900 font-extrabold">DtripP</DialogTitle>
              <DialogDescription>
                <h2 className="font-bold text-slate-800 text-lg mt-7">Sign in With Google</h2>
                <p className='my-2 font-semibold'>Sign in to the app with Google authentication securely</p>
                <Button
                  onClick={login}
                  className='w-full bg-slate-900 flex justify-center items-center hover:bg-slate-950 gap-2'
                >
                  <FcGoogle className='h-7 w-7' /> Sign in With Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default CreatTrip;
