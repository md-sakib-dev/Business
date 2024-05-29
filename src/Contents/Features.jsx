import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic1.jpg'
import pic4 from '../assets/pic2.jpg'
import pic5 from '../assets/pic1.jpg'
import { FaQuoteLeft } from "react-icons/fa";

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
        const Data=[
          {
              img:pic1,
              icon:FaQuoteLeft,
              para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
              label:'Consulting Services',
          },
          {
              img:pic2,
              icon:FaQuoteLeft,
              para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
              label:'Marketing Services',
          },
          {
              img:pic3,
              icon:FaQuoteLeft,            
              para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
              label:'Advertising Services',
          },
          {
              img:pic4,
              icon:FaQuoteLeft,
              para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
              label:'Sales Services',
          },
          {
              img:pic5,
              icon:FaQuoteLeft,
              para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
              label:'Administrative Services',
          },
          
      ]
      var settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow:2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
    return (
      <div className='w-full h-fit mx-auto flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 bg-gray-300 gap-8 ' id='features'>
        <div className='flex flex-col gap-2'>

          <h1 className='text-4xl font-Bold text-black text-center'>Special Features We Offer</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, doloribus.</p>
        </div>
          <div className='w-full h-fit'>
          <Slider {...settings}>
              {
                  Data?.map((item,index)=>{
                      return(
                          <div key={index} id='slider-boxes' className='bg-white hover:bg-custom rounded-xl p-10 flex flex-col justify-center items-center  border-b-[6px] border-custom hover:border-orange-400 transition ease-in-out duration-500 hover:scale-105' onMouseEnter={()=>setHoveredIndex(index)} onMouseLeave={()=>setHoveredIndex(null)}>
                             <div id='icon-boxes' className='bg-custom rounded-full p-4 hover:bg-cyan-500 cursor-pointer'>
                             {item.icon && <item.icon
                className={`w-[80px] h-[80px] rounded-full p-4 ${
                  hoveredIndex === index ? 'bg-orange-400 brightness-100' : 'bg-custom'
                } `}
              />}
                             </div>
                             <div className='flex flex-col justify-center items-center gap-2 mt-2'>  
                             <h1 className='text-md  font-bold'>{item.label}</h1>
                             <p className='text-md text-center'>{item.para}</p>
                             <button  className={`text-white  hover:text-black hover:bg-white hover:border-gray-400 font-semibold py-4 px-4 rounded w-[150px ${hoveredIndex === index ?'bg-orange-400 ' :'bg-custom'}`}>Read More</button>
  
                             </div>
  
                          </div>
                      )
                  })
              }
              </Slider>
  
          </div>
  
          </div>
    )
    };  

export default Features 