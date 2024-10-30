import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";


function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setopenDialog] = useState(false);

 
  const login = useGoogleLogin({
    onSuccess: (codeResp) => {
      console.log(codeResp);
      return GetUserProfile(codeResp);
    },
    onError: (error) => console.log(error)
  });

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
        window.location.reload()
      })
      .catch((error) => {
        console.error('Error fetching user profile:', error);
      });
  };
  useEffect(() => {
    console.log("user", user?.picture);
  }, []);

  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <div className="logo text-slate-800 font-extrabold text-2xl "><a href="/">DtriPp</a></div>
      <div className="">
        {user ? (
          <div className="flex justify-center items-center gap-3">
            <a href="/create-trip">
            <Button variant="outline">+ Create Trip</Button>

            </a>
            <a href="/my-trip">
            <Button variant="outline">My Trip</Button>

            </a>

            <Popover>
              <PopoverTrigger>

            <img
              src={user?.picture}
              alt="userImg"
              className="h-[50px] rounded-full"
            />
              </PopoverTrigger>
              <PopoverContent>
                <h2 className="cursor-pointer" onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload()

                }} >Logout</h2>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <Button onClick={()=>setopenDialog(true)}>Sign in</Button>
          
        )}
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

export default Header;
