import React from 'react'
import { GiTechnoHeart } from 'react-icons/gi'
export default function Footer() {
  return (
    <div className='flex flex-col items-center w-full xl:py-10 sm:py-8 pb-10 xl:text-xl lg:text-sm drop-shadow-2xl'>
            <div className='flex items-center animate-pulse text-[#7F7FD5]'>Made with <GiTechnoHeart className='mx-2'/> by Aditya</div>
            <div><a href="https://github.com/adityavag/portfolio" className='animate-pulse text-[#7F7FD5]'>View Source Code</a></div>
        </div>
  )
}
