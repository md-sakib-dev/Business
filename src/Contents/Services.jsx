import React from 'react'
import { FaCodeBranch } from "react-icons/fa";
import pic1 from '../assets/Pizza/pizza1.jpg'
import pic2 from '../assets/Pizza/pizza2.jpg'
import pic3 from '../assets/Pizza/pizza3.jpg'
import pic4 from '../assets/Pizza/pizza4.jpg'
import pic5 from '../assets/Pizza/pizza5.jpg'
import pic6 from '../assets/Pizza/pizza6.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from './Star';

const Services = () => {
    const Data=[
      {
            title:'Mashroom Pizza',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Add to Card',
            img:pic1,
            price:24.00,
            stars:4.5,
        },
        {
            title:'Mashroom Pizza',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Add to Card',
            img:pic2,
            price:24.00,
            stars:4.5,
        },
        {
            title:'Mashroom Pizza',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Add to Card',
            img:pic3,
            price:24.00,
            stars:4.2,
        },
        {  
           title:'Mashroom Pizza',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Add to Card',
            img:pic4,
            price:24.00,
            stars:4.0,
        },
        {
            title:'Mashroom Pizza',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Add to Card',
            img:pic5,
            price:24.00,
            stars:4.7,
        },
        { 
            title:'Mashroom Pizza',
            para:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, culpa.',
            label:'Read More',
            img:pic6,
            price:24.00,
            stars:4.1,
        },
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
    <div className='w-full h-fit mx-auto flex flex-col justify-center items-center px-4 py-10 lg:px-20 lg:py-20 bg-white gap-8' id='services'>
        <p></p>
        <h1 className='text-6xl font-normal text-black text-center'>Selected Pizzas</h1>
        <p className='text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corporis.</p>
        <div className='w-full h-fit'>
        <Slider {...settings}>
            {
                Data?.map((item,index)=>{
                    return(
                        <div key={index} id='slider-boxes' className=' rounded-xl transition ease-in-out duration-500 hover:scale-105'>  
                           <div className=' flex flex-col justify-between gap-2 mt-2'>
                            <img className=' w-[250px]  h-[250px] rounded-xl p-2 items-center' src={item.img} alt="" />
                            <h1 className='text-lg  font-normal'>{item.title}</h1>
                            <p className='test-md font-normal'>${item.price}</p>
                            <Star  stars={item.stars}/>
                            <button className='bg-orange-500 px-8 py-3 rounded-xl font-semibold hover:bg-teal-600 hover:text-white'>{item.label}</button>
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

export default Services