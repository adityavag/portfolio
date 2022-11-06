import React from 'react';
import {FiLinkedin, FiGithub, FiInstagram,} from 'react-icons/fi'
import {FaJava,FaHtml5,FaReact,FaNodeJs} from 'react-icons/fa'
import { Fade} from 'react-reveal'
import { DiGit, DiCss3Full } from 'react-icons/di'
import { MdOutlineEmail } from 'react-icons/md'
import { SiBootstrap,SiTailwindcss,SiSpringboot,SiJavascript,SiCplusplus} from 'react-icons/si'
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
          I'm Aditya
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Full Stack Developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        Computer Science Engineering Undergraduate from SRMIST, India. 
        <br/>Currently exploring the ins and outs of Web Development. 
        </p>
        <div className='flex'>
            <a href="https://github.com/adityavag"><FiGithub color="#91EAE4" className='mr-3 my-5 h-5 w-5'/></a>
            <a href="https://www.linkedin.com/in/adityacse"><FiLinkedin color="#91EAE4" className='mx-3 my-5 h-5 w-5'/></a>
            <a href="https://www.instagram.com/aditya_vagarwal"><FiInstagram color="#91EAE4" className='mx-3 my-5 h-5 w-5'/></a>
            <a href="mailto:adi247u@gmail.com"><MdOutlineEmail color="#91EAE4" className='mx-3 mr-3 my-5 h-5 w-5'/></a>
        </div>
            <span className='text-[#8892b0] py-4 max-w-[700px] animate-pulse'>
              Tech I've Explored
            </span>
        <div className='flex'>
            <span className='mr-3    w-5'><DiGit color="#91EAE4" className='animate-pulse    h-5 w-5'/></span>
            <span className='mr-3    w-5'><FaJava color="#91EAE4" className='animate-pulse   h-5 w-5'/></span>
            <span className='mr-3    w-5'><SiTailwindcss color="#91EAE4" className='animate-pulse  h-5 w-5'/></span>
            <span className='mr-3    w-5'><SiBootstrap color="#91EAE4" className='animate-pulse   h-5 w-5'/></span>
            <span className='mr-3    w-5'><SiCplusplus color="#91EAE4" className='animate-pulse    h-5 w-5'/></span>
            <span className='mr-3    w-5'><FaHtml5 color="#91EAE4" className='animate-pulse   h-5 w-5'/></span>
            <span className='mr-3    w-5'><DiCss3Full color="#91EAE4" className='animate-pulse  h-5 w-5'/></span>
            <span className='mr-3    w-5'><SiJavascript color="#91EAE4" className='animate-pulse    h-5 w-5'/></span>
            <span className='mr-3    w-5'><FaReact color="#91EAE4" className='animate-pulse   h-5 w-5'/></span>
            <span className='mr-3    w-5'><FaNodeJs color="#91EAE4" className='animate-pulse  h-5 w-5'/></span>
            <span className='mr-3    w-5'><SiSpringboot color="#91EAE4" className='animate-pulse  h-5 w-5'/></span>
        </div>
      </div>
    </div>
    </Fade>
  )
}