import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import {BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
   <>
    <div className='Footer-Flex'>
    <div className='First-Section'>
    <h1>GYM</h1>
    <p className='p-1'>
        Sport makes our life more interesting. The number of places where one can go in for sports.   </p>
        </div>
        <div>
        <h2>MENU</h2>
        <p className='p-2'>About</p>
        <p className='p-2'>Classes</p>
        <p className='p-2'>Blog</p>
        <p className='p-2'>Contact</p>
        </div>
        <div>
            <h2>ADDRESS</h2>
            <p className='p-2'>9157 Euclid Dr.</p>
           <p className='p-2'>Rome, NY 13440</p>      
        </div>
        <div className='Footer-Icons'>
   
   <FaFacebookF className='Footer-Icon-1'/>
   
   <BsTwitter className='Footer-Icon-2'/>
   </div>
   </div>
   </>
  )
}

export default Footer
