import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/> 
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className='text-gray-500'>Tel: (82) 10-9533-0440 <br /> Email: osamcosmeticsofficial@mail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at OSAM</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
         <Link to={'https://www.youtube.com/watch?v=nPz-i2Lvh4E'}><button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white active:bg-white active:text-black'>EXPLORE MORE</button></Link>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
