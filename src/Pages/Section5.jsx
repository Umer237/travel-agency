import React from 'react'
import './Section5.css'
import Traveller from '../images/Traveler.jpg'
import Laptop from '../images/Laptop.jpg'
import Mirror from '../images/Mirror.jpg'
import { TbMessages } from 'react-icons/tb';
import { AiOutlineEye } from 'react-icons/ai';

const Section5 = () => {
  return (
  <>
  <div className='Section-5-Top-Text'>
    <h2>Our Blogs And Articals</h2>
  </div>
  <div className="Section-5-Flex">
    <div>
<img src={Traveller} alt="" />
<h3>inspiration</h3>
<h2>Travel Tips & Inspiration</h2>
<TbMessages/>
<h5>250</h5>
<AiOutlineEye/>
<h5>12k+ view</h5>
</div>
<div>
<img src={Laptop} alt="" />
<h3>inspiration</h3>
<h2>Travel Tips & Inspiration</h2>
<TbMessages/>
<h5>250</h5>
<AiOutlineEye/>
<h5>12k+ view</h5>
</div>
  <div>
  <img src={Mirror} alt="" />
<h3>inspiration</h3>
<h2>Travel Tips & Inspiration</h2>
<TbMessages/>
<h5>250</h5>
<AiOutlineEye/>
<h5>12k+ view</h5>
  </div>
  </div>
  </>
  )
}

export default Section5