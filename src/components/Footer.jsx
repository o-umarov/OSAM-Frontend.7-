import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <Link className='cursor-pointer' to='/'><img src={assets.logo} className='mb-5 w-32' alt="" /></Link>
                <p className='w-full md:w-2/3 text-gray-600'>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora porro beatae saepe aliquam? Beatae assumenda vitae, velit accusantium aliquam, sit deleniti architecto perspiciatis distinctio ut reprehenderit harum, consequatur odio nulla?
                </p>
            </div>
        <div>
            <p className='text-xl font-medium mb--5 my-4'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link className='cursor-pointer' to={'/'}><li>HOME</li></Link>
                <Link className='cursor-pointer' to={'/about'}><li>ABOUT US</li></Link>
                <Link className='cursor-pointer' to={'/orders'}><li>DELIVERY</li></Link>
                <Link className='cursor-pointer' to={'/about'}><li>PRIVACY POLICY</li></Link>
                <Link className='cursor-pointer' to={'/collection'}><li>COLLECTIONS</li></Link>
                <Link className='cursor-pointer' to={'/contact'}><li>CONTACT</li></Link>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 my-4'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li className='cursor-pointer'>+82-10-9533-0440</li>
                <li className='cursor-pointer'>osamcosmeticsofficial@mail.com</li>
            </ul>
        </div>
       </div>

        <div  >
            <hr />
            <p className='py-5 text-sm text-center'>COPYRIGHT 2026 - OSAM - All rights reserved</p>
        </div>

    </div>
  )
}

export default Footer
