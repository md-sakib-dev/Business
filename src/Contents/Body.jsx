import React, { useEffect, useState } from 'react';
// import bg from '../assets/bg.jpg';
import {ArrowLeftIcon,ArrowRightIcon} from '@heroicons/react/24/solid'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../CSS/All.css"

const Body = () => {
  const Images=[
    "images/bg1.jpg",
    "images/bg2.jpg",
    "images/bg3.jpg",
  ]
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevHover = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextHover = () => {
    if (currentImageIndex < Images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };
  const ZoomInProperties ={
    scale:1,
    duration: 4000,
    transitionDuration:400,
    autoplay: true,
    infinity:true,

    prevArrow:(
    <div className='ml-5 top-40 md:top-72' onMouseOver={handlePrevHover}>
      <ArrowLeftIcon className='h-8 w-8 cursor-pointer text-gray-500 hidden md:block'/>

    </div>
    ),
    nextArrow:(
      <div className='mr-10 top-40 md:top-72' onMouseOver={handleNextHover}>
        <ArrowRightIcon className='h-8 w-8 cursor-pointer text-gray-500 hidden md:block'/>
  
      </div>
      ),
  }
  const solutionText = 'Business';

  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    // Set the entire solutionText as animatedText
    setAnimatedText(solutionText);
  
    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, [solutionText]);
  return (
    <div className='w-screen h-screen'>
      <Zoom {...ZoomInProperties}> 
      {Images.map((each, index) => (
        
  <div key={index} className='flex justify-center md:items-center items-start w-screen h-screen relative' id='home'>
    <img className=' inset-0 w-full h-full object-cover  brightness-50' src={each} />
    <div className='absolute md:top-16 top-0 inset-0 flex flex-col justify-center items-center text-white'>
         <div className='grid md:grid-cols-2 justify-center items-center'>
           <div className='flex flex-col justify-center gap-1 md:gap-5 ml-24'>
           <h1 className='text-xl md:text-5xl font-normal'>
                    <span className='fade-in-out'>We are {animatedText} Agency</span> 
                  </h1>
             <p className='text-md md:text-lg font-normal mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quod ut eveniet esse adipisci commodi assumenda consequuntur iusto dolores voluptatibus..</p>
            <div className='flex flex-col md:flex-row justify-start gap-5'>
           <button className="text-white bg-custom  hover:text-black hover:bg-white hover:border-gray-400 font-semibold py-4 px-4 rounded w-[250px]">
               View Our Services
               </button>
            
    </div>
    </div>
    </div>
    </div>
    </div>      
))}
   </Zoom>

    </div>
  );
};

export default Body;
