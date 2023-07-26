import React, { useState } from 'react'
import Card from './Card';
import {FaQuoteRight,FaQuoteLeft,FaAngleLeft,FaAngleRight} from 'react-icons/fa'
const Testimonial=(props)=> {
    let reviews=props.reviews;
    const [index,setIndex]=useState(0);
    function leftshiftHandler(){
      if(index-1<0){
        setIndex(reviews.length-1);
      }
      else{
        setIndex(index-1);
      }
    } 
    function rightshiftHandler(){
      if(index+1>=reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
    }
    function surpriseHandler(){
      let randomIndex =  Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
  return (
    <>
        <div className='w-[45rem] bg-white rounded-md p-[30px] mt-5'>
      <Card review={reviews[index]}></Card>
      <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center items-center'>
        <button 
        onClick={leftshiftHandler}
        className='curser-pointer hover:text-violet-500'>
            <FaAngleLeft/>
        </button>
        <button 
        onClick={rightshiftHandler}
        className='curser-pointer hover:text-violet-500'>
            <FaAngleRight/>
        </button>
    </div>
    <div className='text-center mt-5'>
        <button
        onClick={surpriseHandler} 
         className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 rounded-md py-2 px-10 cursor-pointer text-bold text-lg text-white uppercase'>Surprise me</button>
    </div>
    </div>
    </>
  )
}

export default Testimonial
