import React from 'react'
import Logo from '../../assets/react.svg'
import { FaLinkedinIn, FaGithub, FaFacebookF, FaMailBulk, } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineContactPhone } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";



function LeftSidebar() {
  return (
    <div className='w-[25%] h-full flex items-end'>
      <div className="sidevar-inner-cont rounded-lg bg-gray-50 p-4 h-[90%] w-full flex items-center justify-start gap-4 flex-col">
        {/* image */}
        <div className="profile-image w-full -mt-18 flex justify-center"><img src={Logo} alt="Profile Image" className='size-34 bg-[#121212] rounded-lg p-3' /></div>
        {/* name and tag */}
        <div className='flex flex-col items-center w-full'>
          <div className='name text-2xl font-semibold'><h1>Harsh Lakhanpal</h1></div>
        <div className="tag bg-amber-300 rounded-4xl px-4 py-2 text-sm">Web Developer</div>
        </div>
{/* social media links */}
        <div className='social-links flex text-2xl gap-3'>
          <FaLinkedinIn className='hover:scale-150 cursor-pointer'/>
          <FaGithub className='hover:scale-150 cursor-pointer'/>
          <FaFacebookF className='hover:scale-150 cursor-pointer'/>
          <GrInstagram className='hover:scale-150 cursor-pointer'/>
        </div>
        {/* contact */}
        <div className='w-full flex flex-col gap-4 py-2'>
          {/* image box call */}
          <div className="imagebox flex flex-nowrap gap-2 justify-start items-center w-full">
            <div className="image-box-img text-2xl text-white bg-[#1a1a1a] p-3 rounded-4xl"><MdOutlineContactPhone className=''/></div>
            <div className="image-box-cont flex flex-col items-start">
              <div className="image-box-title text-md font-normal">Phone:</div>
              <div className="image-box-title text-xl font-semibold"><a href="tel:8628028059">8628028059</a></div>
            </div>
          </div>
          {/* image box mail */}
          <div className="imagebox flex flex-nowrap gap-2 justify-start items-center w-full">
            <div className="image-box-img text-2xl text-white bg-[#1a1a1a] p-3 rounded-4xl"><FaMailBulk className=''/></div>
            <div className="image-box-cont flex flex-col items-start">
              <div className="image-box-title text-md font-normal">E-mail:</div>
              <div className="image-box-title text-md font-semibold"><a href="mailto:harsh.lakhanpal3@gmail.com">harsh.lakhanpal3@gmail.com</a></div>
            </div>
          </div>
          {/* image box Location */}
          <div className="imagebox flex flex-nowrap gap-2 justify-start items-center w-full">
            <div className="image-box-img text-2xl text-white bg-[#1a1a1a] p-3 rounded-4xl"><RiUserLocationFill className=''/></div>
            <div className="image-box-cont flex flex-col items-start">
              <div className="image-box-title text-md font-normal">Location:</div>
              <div className="image-box-title text-md font-semibold">Chandigarh/Mohali</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar
