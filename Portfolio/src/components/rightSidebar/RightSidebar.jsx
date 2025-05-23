import React from 'react'
import { GrHomeOption } from "react-icons/gr";
import { TiDocumentText } from "react-icons/ti";
import { GrProjects } from "react-icons/gr";
import { MdOutlinePersonPin } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";


function RightSidebar() {
  return (
    <div className='w-[5%] rounded-lg bg-gray-50 p-4 flex flex-col items-center justify-center gap-6'>
      <div className='nav-btn-box text-2xl cursor-pointer hover:text-3xl'><GrHomeOption className='' /></div>
      <div className='nav-btn-box text-2xl cursor-pointer hover:text-3xl'><MdOutlinePersonPin className='' /></div>
      <div className='nav-btn-box text-2xl cursor-pointer hover:text-3xl'><TiDocumentText className='' /></div>
      <div className='nav-btn-box text-2xl cursor-pointer hover:text-3xl'><GrProjects className='' /></div>
      <div className='nav-btn-box text-2xl cursor-pointer hover:text-3xl'><RiContactsBook3Line className='' /></div>
    </div>
  )
}

export default RightSidebar
