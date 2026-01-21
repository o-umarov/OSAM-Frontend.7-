import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum fuga, deserunt est ipsa rem nesciunt fugiat modi beatae suscipit a corrupti minus eaque. Cum eveniet illum doloribus ratione, fugiat eius.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui molestiae odio id voluptate reprehenderit nisi corporis est, officia laudantium porro ex illum ab cupiditate exercitationem hic velit natus sed perferendis.</p>
          <b className='text-gray-800'>OUR MISSION</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex a labore possimus! Quam placeat est voluptatem maxime, eum, inventore quo commodi quaerat, dicta itaque explicabo accusamus. Quaerat vel maiores molestias.</p>
        </div>
      </div>
      <div className='text-2xl py-4'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>QUALITY ASSURANCE</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus dolorum, maiores ad tempore obcaecati officia aliquam ut repudiandae ab eveniet provident nihil corrupti blanditiis laborum commodi architecto corporis expedita!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>CONVENIENCE</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus dolorum, maiores ad tempore obcaecati officia aliquam ut repudiandae ab eveniet provident nihil corrupti blanditiis laborum commodi architecto corporis expedita!</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>EXCEPTIONAL CS</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloribus dolorum, maiores ad tempore obcaecati officia aliquam ut repudiandae ab eveniet provident nihil corrupti blanditiis laborum commodi architecto corporis expedita!</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
