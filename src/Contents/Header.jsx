import React, { useState ,useEffect} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import { Link } from "react-scroll";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaInstagram,
  FaFacebookF,
  FaDribbbleSquare,
  FaGithubSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";

import pic1 from '../assets/gallery/pic1.jpg'
import pic2 from '../assets/gallery/pic2.jpg'
import pic3 from '../assets/gallery/pic3.jpg'
import pic4 from '../assets/gallery/pic4.jpg'
import pic5 from '../assets/gallery/pic5.jpg'
import pic6 from '../assets/gallery/pic6.jpg'

import { CiMenuKebab } from "react-icons/ci";


const Header = () => {
  
  const [nav, setNav] = useState(false);
  const[gal,setGal]=useState(false);
  const [navbarBg, setNavbarBg] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logo1);
  const pic=[
     {
       id:1,
       image:pic1,

     },
     {
       id:2,
       image:pic2,

     }, 
     {
       id:3,
     image:pic3,

     },
     {
      id:4,
    image:pic4,

    }
     ,{
      id:5,
    image:pic5,

    } 
    ,{
      id:6,
    image:pic6,

    }
  ]
  const Links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about us",
    },
    {
      id: 3,
      link: "features",
    },
    {
      id: 4,
      link: "skill",
    },
    {
      id: 5,
      link: "works",
    },
    {
      id: 6,
      link: "team",
    },
    {
      id: 7,
      link: "contact",
    },
   
  ];
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg(true);
        setLogoSrc(logo);
      } else {
        setNavbarBg(false); 
        setLogoSrc(logo1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div
    className={`max-w-screen h-20 text-black fixed top-0 left-0 right-0 z-50 inset-0 bg-black/40  ${
      navbarBg ? "bg-custom " : "" 
    }`}
  >
    <div className="flex justify-around md:items-center">
      <div >
        <img className="md:w-[180px] w-[90px] hidden md:block "  src={logoSrc} alt="" />
      </div>
      <div className="flex flex-col justify between items-center gap-3 mt-1">
    
      
  
        <div className="flex justify-between items-center gap-5">
      <ul className="hidden md:flex relative">
  {Links?.map(({ id, link }) => {
    return (
      <li
        key={id}
        className="relative px-4 cursor-pointer capitalize text-xl font-normal hover:scale-105 duration-500 text-white hover:text-orange-400 "
      >
        <Link to={link} smooth duration={500}> 
           {link}
           </Link>
        {/* Dots for hover effect */}
        <div className="flex justify-center">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </li>
      
    );
  })}
</ul>
<div onClick={()=>{setGal(!gal)}}>

<VscThreeBars color="white" className="hover-effect  hidden md:block"size={30}/>
</div>
{gal &&(
  <div className="flex flex-col gap-2  fixed top-20 right-0 w-[30%] h-screen bg-white text-white ease-in-out duration-1000">
    <div className="flex justify-around mt-20">
   <div onClick={()=>{setGal(false)}}> <FaTimes size={30} color="black"/></div>
    <h1 className="text-xl font-bold text-black text-center">Blog</h1>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-5  gallery-container"> 

    {pic?.map((i) => {
            return (
             <div className="mr-0"> 
                  <img src={i.image} alt="" />
             </div>
            
            );
          })}
    </div>

  </div>
)}
      </div>

      </div>
    

      <div>
      </div>
      <div className="flex justify-center gap-10 items-center">

      
    

      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer  text-gray-500 md:hidden mt-5"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-start gap-2 items-center fixed top-20 left-0 w-[70%] h-screen bg-white text-black ease-in-out duration-1000"
        >
          {Links?.map((i) => {
            return (
              <li
                key={i.id}
                className="px-4 cursor-pointer capitalize py-4 text-4xl border-b border-b-gray-700 "
              >
                <Link
                  onClick={() => {
                    setNav(!nav);
                  }}
                  to={i.link}
                  smooth
                  duration={500}
                >
                  {i.link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <img className="md:hidden w-[200px]" src={logoSrc} alt="" />
      </div>
      
     
      <div onClick={()=>{setGal(!gal)}}>

         <CiMenuKebab className="hover-effect md:hidden mt-5"size={30}/>
         </div>
         {gal &&(
  <div className="flex flex-col gap-2 md:hidden  fixed top-0 right-0 w-[60%] h-screen bg-white text-white ease-in-out duration-1000">
    <div className="flex justify-around mt-10">
   <div onClick={()=>{setGal(false)}}> <FaTimes size={30} color="black"/></div>
    <h1 className="text-xl font-bold text-black text-center">Gallery</h1>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-5  gallery-container"> 

    {pic?.map((i) => {
            return (
             <div className="mr-0"> 
                  <img src={i.image} alt="" />
             </div>
            
            );
          })}
    </div>

  </div>
)}
      </div>
    </div>
  </div>
  );
};

export default Header;
