import React from 'react';
import {FiLinkedin, FiGithub, FiInstagram, FiMail, FiTwitter} from 'react-icons/fi'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Fade} from 'react-reveal'

export default function Home() {
  return (
    <Fade left>
      <div name='home' className='w-full h-screen bg-[#191b24]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-9 flex flex-col justify-center h-screen'>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Hello,World !
        </h1>
        <br/>
        <br/>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Aditya
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Full Stack Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Computer Science Engineering Undergraduate from SRMIST, India. 
        Currently exploring the ins and outs of Web Development. 
        </p>
        <div className='flex'>
            <a href="https://github.com/adityavag"><FiGithub color="#91EAE4" className='mr-3 my-5 h-5 w-5'/></a>
            <a href="https://www.linkedin.com/in/adityacse"><FiLinkedin color="#91EAE4" className='mx-3 my-5 h-5 w-5'/></a>
            <a href="https://www.instagram.com/aditya_vagarwal"><FiInstagram color="#91EAE4" className='mx-3 my-5 h-5 w-5'/></a>
        </div>
      </div>
    </div>
    </Fade>
  )
}