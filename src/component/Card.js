import React from 'react'
import {FaQuoteRight,FaQuoteLeft,FaAngleLeft,FaAngleRight} from 'react-icons/fa'
const Card=(props)=> {
     let review=props.review;
  return (
    <div>
    <div className='flex flex-col md:relative mt-5'>
      <div className='absolute top-[-7rem] z-[25] left-[-1rem] mx-auto'>
      
        <img src={review.image} alt="" className='aspect-square rounded-full w-[110px] h-[110px] z-25' />
        <div className='w-[110px] h-[110px]  bg-violet-500 rounded-full absolute 
        top-[-6px] z-[-10] left-[10px] '></div>
      </div>
    <div className='text-center mt-2'>
        <h1 className='font-bold text-2xl capitalize'>{review.name}</h1>
    </div>
    <div className='text-center mt-2'>
        <p className='text-violet-200  uppercase text-sm '>{review.job}</p>
    </div>
    <div className='text-violet-700 mx-auto mt-5'>
        <FaQuoteLeft/>
    </div>
    <div>
        <p>{review.text}</p>
    </div>
    <div className='text-violet-700 mx-auto mt-5'>
    <FaQuoteRight/>
    </div>
  
    
    
    </div>
    </div>
  )
}

export default Card
