import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from '../assets/luff.jpg'
import pic2 from '../assets/zoro.jpg'
import pic3 from '../assets/sanji.jpg'
import pic4 from '../assets/itachi.jpg'
import pic5 from '../assets/obito.jpg'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const Data=[
        {
            img:pic1,
            icon:FaQuoteLeft,
            title:'LUFFY',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Web Developr',
        },
        {
            img:pic2,
            icon:FaQuoteLeft,
            title:'ZORO',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Web Developer',
        },
        {
            img:pic3,
            icon:FaQuoteLeft,
            title:'SANJI',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Web Developer',
        },
        {
            img:pic4,
            icon:FaQuoteLeft,
            title:'ITACHI',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Web Developer',
        },
        {
            img:pic5,
            icon:FaQuoteLeft,
            title:'OBITO',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Web Developer',
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
    <div className='w-full h-fit mx-auto flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 bg-gray-300 gap-8' id='testimonial'>
        <p></p>
        <h1 className='text-6xl font-normal text-black text-center'>Clients Review</h1>
        <div className='w-full h-fit'>
        <Slider {...settings}>
            {
                Data?.map((item,index)=>{
                    return(
                        <div key={index} id='slider-boxes' className='bg-white rounded-xl p-10 flex flex-col justify-center items-center  border-b-[6px] border-orange-500  transition ease-in-out duration-500 hover:scale-105'>
                           <div id='icon-boxes' className='bg-orange-500 rounded-full p-4 hover:bg-cyan-500 cursor-pointer'>
                           {item.icon && <item.icon className='w-[40px] h-[40px]'/>}
                           </div>
                           <div className='flex flex-col justify-center items-center gap-2 mt-2'>  
                            <p className='text-[17px] text-center'>{item.para}</p>
                            <div className='flex justify-center items-center gap-2'>
                               <div className=' cursor-pointer'> 
                               <img className='w-[80px] rounded-full h-[80px] brightness-50 hover:brightness-100 hover:scale-110' src={item.img} alt="" />
                               </div>
                                <div className='flex flex-col justify-between gap-1'>

                                <h1 className='text-md  font-bold'>{item.title}</h1>
                                <p className='text-sm font-normal text-orange-400'>{item.label}</p>
                                </div>

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

export default Testimonial