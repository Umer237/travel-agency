import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import {BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
   <>
    <div className='Footer-Flex'>
    <div className='First-Section'>
    <h1>grapeslab</h1>
    <p className='p-1'>
        Sport makes our life more interesting. The number of places where one can go in for sports.   </p>
        </div>
        <div>
        <h2>Home</h2>
        <p className='p-2'>About us</p>
        <p className='p-2'>Destinatination</p>
        <p className='p-2'>Community</p>
        <p className='p-2'>Contact Us</p>
        </div>
        <div>
            <h2>Legal</h2>
            <p className='p-2'>Discover</p>
           <p className='p-2'>Special deals</p>      
           <p className='p-2'>Community</p>      
           <p className='p-2'>Blog</p>      
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
