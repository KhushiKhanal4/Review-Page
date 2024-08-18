import React, { useEffect, useState } from 'react';
import data from "./data";

const Slider = () => {

  const [people]=useState(data);
  const[index,setIndex]=useState(0);

  useEffect(()=>{
    const lastIndex=people.length - 1;
    if(index<0){
        setIndex(lastIndex);
    }
    if(index>lastIndex){
        setIndex(0);
    }
  },[index,people]);

  useEffect (()=>{
    let slider = setInterval(() => {
        setIndex(index+1);
    }, 5000);
    return()=>{
        clearInterval(slider);
    };
  }, [index]);

  return (
   <>
   <div className='text-center mt-28'>
    <h1 className='text-4xl font-serif font-bold text-gray-700'>Testimonial</h1>
    <h2 className='text-2xl font-semibold font-serif text-gray-500 pl-8'>What our customers are saying.</h2>
   </div>

   
  

  
   </>
  )
}

export default Slider