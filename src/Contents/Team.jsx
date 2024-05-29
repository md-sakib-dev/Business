import React ,{ Component} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic4.jpg'
import pic5 from '../assets/pic1.jpg'
import { FaQuoteLeft } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Team = () => {
    const Data=[
        {
            img:pic1,
            icon:FaQuoteLeft,
            title:'ROY',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Business Analyst',
        },
        {
            img:pic2,
            icon:FaQuoteLeft,
            title:'JASON',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Business Analyst',
        },
        {
            img:pic3,
            icon:FaQuoteLeft,
            title:'SAM',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Business Analyst',
        },
        {
            img:pic4,
            icon:FaQuoteLeft,
            title:'MIKE',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Business Analyst',
        },
        {
            img:pic5,
            icon:FaQuoteLeft,
            title:'MIKE',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Business Analyst',
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
               dots: true
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
    <div className='w-full h-fit mx-auto flex flex-col justify-center items-center px-5 py-10 lg:px-10 lg:py-10 bg-gray-300 gap-4' id='team'>
        <p></p>
        <h1 className='text-4xl font-normal text-black text-center'>Team Member</h1>
        <div className='w-full h-fit slider-container'>
        <Slider {...settings}>
            {
                Data?.map((item,index)=>{
                    return(
                        <div key={index} id='slider-boxes' className='bg-white rounded-xl p-5 flex flex-col justify-center items-center  border-b-[6px] border-custom  transition ease-in-out duration-500 hover:scale-105'>
                          
                           <img className='w-[250px] rounded-lg h-[270px]  ' src={item.img} alt="" />
                           {/* {item.icon && <item.icon className='w-[40px] h-[40px]'/>} */}
                           
                           <div className='flex flex-col justify-center items-center gap-1 mt-2'>  
                           <h1 className='text-md  font-bold text-2xl'>{item.title}</h1>
                           <p className='text-sm font-normal '>{item.label}</p>
                            <div className='flex justify-center items-center gap-2'>

                                <p className='text-[17px] text-center'>{item.para}</p>
                                
                            </div>
                            <div className='flex justify-between items-center gap-2'>
                            <FaFacebookF color='blue' size={20} />      
          <FaInstagram  size={20} />
          <FaTwitterSquare color='blue' size={20} />
          <FaGithubSquare  size={20} /> 
                            </div>

                           </div>

                        </div>
                    )
                })
            }
            </Slider>

        </div>

        </div>
  )
}

export default Team 