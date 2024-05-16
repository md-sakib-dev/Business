import React from 'react'
import { FaStar ,FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({stars}) => {
  const ratingStar=  Array.from({length:5},(elem,index)=>{
       
        let number= index+0.5;
        let halfNumber = number - 0.5;
        let starIcon = null;

        if (stars >= number) {
            starIcon = <FaStar className='icon' />;
        } else if (stars >= halfNumber) {
            starIcon = <FaStarHalfAlt className='icon' />;
        } else {
            starIcon = <AiOutlineStar className='icon' />;
        }
        return (
            <span key={index} className="icon">
                {starIcon}
            </span>
        );

    })
  return (
    
        <div className='flex items-center'>
            {ratingStar}
        </div>

  )
}

export default Star