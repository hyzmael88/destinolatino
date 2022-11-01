import React from 'react'
import azucar from '../assets/azucar.png'

function Navbar() {
  return (
    <div className='absolute top-0 text-white h-[100px] w-full bg-black/60 z-10'>
        <div className='flex justify-between '>
            <div className='justify-items-start ml-5 mt-3  '>
                <div className='flex flex-col items-center' >
            <img className='h-[40px]' src={azucar} />
                <p className='font-bones'>dia de muertos</p>
                </div>
            </div>
            <div className='justify-items-end mr-5 mt-3'>
                <ul className='flex text-xl font-bones mt-4'>
                    <li className='ml-3'>home</li>
                    <li className='ml-3'>historia</li>
                    <li className='ml-3'>no se</li>
                    <li className='ml-3'>menos se</li>
                </ul>
                </div>
        </div>
    </div>
  )
}

export default Navbar