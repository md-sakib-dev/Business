import React from 'react'
import {
    FaInstagram,
    FaFacebookF,
    FaDribbbleSquare,
    FaGithubSquare,
    FaTwitterSquare,
  } from "react-icons/fa";
  import { MdAddIcCall,MdAttachEmail } from "react-icons/md"
import pic from '../assets/logo1.png'
const Footer = () => {
  return (
    <div className='w-screen h-fit bg-slate-800 mx-auto ' id='contact'>
      <div className='border-b border-slate-500'>

    <div className="py-10 px-4 flex flex-col md:flex-row justify-around  gap-2 text-gray-300" >
      <div>
        <h1 className="w-full font-bold text-3xl text-white ">Let's Talk</h1>
        
      </div>
      <div className="flex">
      <div>
        <h1 className="w-full font-bold text-3xl text-white ">Quick Links</h1>
        <div className="flex gap-8 justify-start ml-4 my-6">
        <ul>
            <li className="py-2 text-sm text-orange-200">Home</li>
            <li className="py-2 text-sm text-orange-200">About Us</li>
            
           
          </ul>
          <ul>
            <li className="py-2 text-sm text-orange-200">Blog</li>
            <li className="py-2 text-sm text-orange-200">Services</li> 
          </ul>
        
        </div>
      </div>
      </div>
      <div className='flex flex-col  gap-2'>
      <h1 className="w-full font-bold text-3xl text-white ">Contact</h1>
      <p className='text-lg font-normal'> Sign up today for the latest news and updates.</p>
      <div class="max-w-md mx-auto mt-5">
      <form class="flex items-center">
      <input type="email" placeholder="Enter your email" class="py-4 px-4 rounded-l-md w-full border border-gray-300  focus:outline-none focus:ring focus:border-blue-500" />
      <button type="submit" class="bg-yellow-400 hover:bg-teal-200 text-black py-4 px-4  rounded-r-md focus:outline-none focus:ring focus:border-blue-500">Send </button>
      </form>
      </div>
      </div>
    </div>
      </div>
      <div className='border-b border-slate-500'>
    <div className='flex flex-col md:flex-row md:justify-around justify-center gap-2 py-5'>
      <div>
        <img className='items-center w-[150px]' src={pic} alt="" />
      </div>
      <div className='flex justify-center items-center gap-2'>
         <MdAttachEmail color='white'/>
          <p className='font-bold text-white'> xyz@gmail.com</p>

      </div>
      <div className='flex justify-center items-center gap-2'>
         <MdAddIcCall color='white'/>
          <p className='font-bold text-white'> +88019456789</p>

      </div>
      <div className='flex md:justify-between justify-center items-center gap-2'>
         <FaFacebookF color='white' size={20} />
          <FaDribbbleSquare color='white' size={20} />
          <FaInstagram color='white' size={20} />
          <FaTwitterSquare color='white' size={20} />
          <FaGithubSquare color='white' size={20} /> 

      </div>
      

    </div>
    </div>
    <div className='flex flex-col md:flex-row justify-around items-center mt-5 pb-6'>
      <p className='text-white'>Lalmatia, Dhaka-1207,Bangladesh</p>
    <p className=' text-gray-500'>Copyright © 2024  - Powered by White Services</p>

    </div>

    </div>
  )
}

export default Footer