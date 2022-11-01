import React from 'react'
import img1 from '../assets/diamuertos1.jpeg'
function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <div className='h-full w-full bg-black/60 absolute'></div>
        <img className='w-full h-full object-cover' src={img1} alt='' />
    </div>
  )
}

export default Hero