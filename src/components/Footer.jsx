import React from 'react'
import {Fade} from 'react-reveal'
import { BsCodeSlash } from 'react-icons/bs'
export default function Footer() {
  return (
    <Fade left>
      <div className='flex flex-col items-center  bg-[#191b24] w-full py-2'>
        <a href="https://github.com/adityavag/portfolio"><BsCodeSlash className='animate-pulse text-[#ccd6f6]'/></a>
      </div>
    </Fade>
  )
}
