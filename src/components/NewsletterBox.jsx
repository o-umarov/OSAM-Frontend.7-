import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event)=>{
         event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>IMMEDIATE SUBSCRIPTION APPLIES TO 20% DISCOUNT</p>
      <p className='text-gray-400 mt-3'>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis in consequatur a cum maxime pariatur, vitae sit ducimus vel aliquam sequi voluptatum. A, minima veniam impedit reprehenderit est culpa quas.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 mb-15'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Leave your e-mail address' required></input>
        <button type='submit' className='bg-black text-white text-xs px-10 py-2 cursor-pointer'>AGRRE TO SEND</button>
      </form>
    </div>
  )
}

export default NewsletterBox
