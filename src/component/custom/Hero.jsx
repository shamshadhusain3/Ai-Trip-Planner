import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-12 md:mx-56 gap-9'>
        <h1 className="font-extrabold text-[3.12rem] capitalize text-center mt-16 "><span className=" text-[#f56551] text-center">Discover Your next adventure with AI:</span> personalized Itineraries at your fingertips  </h1>
        <p className="text-xl text-gray-500 text-center">your personal trip planner and travel curato,creating custom itineraries tailored to your interests and budget.</p>
        <Button className='z-30'><Link to={'/create-trip'}>Get Started, it's Free</Link></Button>
    
    <img src="../../../public/landing.png" alt="langingImg" className='-mt-20' />
    </div>
  )
}

export default Hero