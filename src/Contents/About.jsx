import React, { useState, useEffect } from 'react';

import pic1 from '../assets/about.png'

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Set visibility to true after a delay to trigger the animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='w-screen h-fit mx-auto bg-white' id='about us'>
    <div className='grid md:grid-cols-2  md:gap-20  gap-10 items-center'>
      <div className="max-w-4xl mx-auto  flex flex-col justify-start items-start gap-5 ml-10   text-white">
   <h1
        className={`md:text-5xl text-2xl  text-black font-normal text-center ${isVisible ? 'transition-transform translate-x-0 opacity-100 duration-1000 ease-out' : 'opacity-0 translate-x-[-100%]'} `}
      >
        Why Choose US ?..
      </h1>
        {/* Image Section */}
        
        {/* Text Section */}
        <div className="text-lg text-black">
          {/* <h2 className="text-3xl font-bold mb-4">About Our Agency</h2> */}
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae id consequatur earum voluptatem. Ad optio quae perspiciatis ullam, quidem cupiditate autem? Amet nobis perspiciatis reiciendis a pariatur nulla architecto saepe!</p>
          <p className="mt-4">
            In hac habitasse platea dictumst. Morbi non urna massa. Nulla vitae malesuada est.
            Aliquam erat volutpat. Curabitur ut nisl dui. Nulla facilisi. Nullam laoreet
            hendrerit magna, ut fringilla enim fermentum nec.
          </p>
        </div>
        <button className="text-white bg-custom  border hover:text-black hover:bg-white hover:border-black font-semibold py-4 px-4 rounded w-[250px]">
               Learn More
               </button>
      </div>
      <div>
          <img
            src={pic1} // Replace with the path to your image
            alt="About Us"
            className="w-[600px] h-[600px] rounded-lg md:mt-20 "
          />
        </div>
  </div>
  </div>
  )
}

export default About