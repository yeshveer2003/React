import React from 'react'
import { FaUser } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { TiMinus } from "react-icons/ti";
import { IoBag } from "react-icons/io5";
import { HiLanguage } from "react-icons/hi2";
import { GiSkills } from "react-icons/gi";
import { CgCode } from "react-icons/cg";
import '@fontsource-variable/roboto-slab';
``
function Resume() {
  return (
    <div className='mt-[10%] flex ' style={{fontFamily:"Roboto Slab Variable"}}>
    
    <div className='flex '>
    <div className='ml-8 bg-[#3a393930] w-full h-auto mb-4 mr-8  flex'>
      <div className='border-r-2 '>
      <div className='relative bg-[#bd1b1b] text-white font-bold text-3xl px-5 py-2    rounded-br-full w-[38%] '>Resume</div>
      
      <div className='flex flex-col justify-center w- '>
        <div className='flex items-center mt-8 ml-10  font-bold text-3xl  '>
        <FaUser className='mr-4'  style={{color:'red'}}/>  Profile </div>
        <div className='flex items-center ml-20 mr-40 mt-8 justify-center text-sm '>A highly motivated and detail-oriented junior front-end developer with a passion for
            creating innovative and visually appealing web applications. Proficient in HTML, CSS,
            JavaScript, and React, with experience in developing responsive and user-friendly websites.
            Strong problem-solving</div>
      </div>
      <div >
      <div className='flex items-center mt-8 ml-10 font-bold text-3xl '>
      <IoBookOutline className='mr-4 text-3xl' style={{color:'red'}}/>  Education </div>
      <div className='flex items-center ml-16 mt-6 text-md  '> <TiMinus  style={{color:'red'}} />Java script from scratch Software Devlopment Acadmey (SDA)</div>
      <div className='ml-20 text-sm mt-0.5 text-[#535355cf]'>17.09.2022 -  28.03.2023</div> 
      <div className='flex items-center ml-16 mt-6 text-md  '> <TiMinus  style={{color:'red'}} />Training Finance 5 & Alha Web, ATC</div>
      <div className='ml-20 text-sm mt-0.5 text-[#535355cf]'>04.2022 - 05.2022</div> 
      <div className='flex items-center ml-16 mt-6 text-md  '> <TiMinus  style={{color:'red'}} />MSC Financial Markets & Banking, Universiteti Luarasi</div>
      <div className='ml-20 text-sm mt-0.5 text-[#535355cf]'>11.2020 - 07.2022</div>
      <div className='flex items-center ml-16 mt-6 text-md  '> <TiMinus  style={{color:'red'}} />Bachelor of Finance & Banking, Aleksandër Moisiu University of Durrës</div>
      <div className='ml-20 text-sm mt-0.5 text-[#535355cf]'>10.2016 - 07.2020</div>
      </div>
      <div>
      <div className='flex items-center mt-8 ml-10  font-bold text-3xl  '>
      <IoBag className='mr-4'  style={{color:'red'}}/> work experience  </div>
      <div className='flex items-center ml-16 mt-6 text-md  '> <TiMinus  style={{color:'red'}} />Assistant Manager, Move One SHPK</div>
      <div className='ml-20 text-sm mt-0.5 text-[#535355cf]'>05.2020 - 08.2022</div> 

      </div>
      </div>
      <div className=' mt-10 pr-20 w-auto '>
        <div className='flex items-center mt-8 ml-22 font-bold text-3xl justify-center pl-8'>
        <HiLanguage className='mr-4 text-3xl' style={{color:'red'}}/> Language </div>
        <div className='ml-40 text-sm mt-0.5 text-[#c1c1c7eb] '> India-Hindi </div>
        <div className='ml-40 text-sm mt-0.5 text-[#c1c1c7eb] '>English - B2 </div>
        <div className='flex items-center mt-8  font-bold text-3xl justify-center w-96 pl-8 '>
        <GiSkills className='mr-4 text-3xl' style={{color:'red'}}/> Soft Skills </div>
        <div className='ml-40 text-sm mt-0.5 text-[#c1c1c7eb] '>Communication </div>
        <div className='ml-40 text-sm mt-0.5 text-[#c1c1c7eb] '>Attention to detail </div>
        <div className='ml-40 text-sm mt-0.5 text-[#c1c1c7eb] '> Teamwork</div>
        <div className='ml-40 text-sm mt-0.5 text-[#c1c1c7eb] '> Problem Solvin Skills</div>
        <div className='ml-40 text-sm mt-0.5 text-[#c1c1c7eb] '> Leadership</div>
        <div className='flex items-center mt-8  font-bold text-3xl justify-center w-96 pl-24 '>
        <CgCode className='mr-4 text-3xl' style={{color:'red'}}/> Technical Skills </div>
        <div className='ml-40 text-sm mt-1 text-[#c1c1c7eb] '>Knowledge of HTML and CSS</div>
        <div className='ml-40 text-sm mt-1 text-[#c1c1c7eb] '>Familiarity with CSS preprocessors</div>
        <div className='ml-40 text-sm mt-1 text-[#c1c1c7eb] mb-0.5'>Understanding of web development frameworks (React, NextJS)</div>
        <div className='ml-40 text-sm mt-1 text-[#c1c1c7eb] '>Problem-solving skills</div>
        <div className='flex items-center mt-8  font-bold text-3xl justify-center w-96   '>
        <CgCode className='mr-4 text-3xl' style={{color:'red'}}/> Git hub </div>
        <div className='ml-40 text-sm mt-1 text-[#c1c1c7eb] '>https.//github.com/yashveer</div>
        </div>

    </div>
    
    </div>
    </div>
  )
}

export default Resume