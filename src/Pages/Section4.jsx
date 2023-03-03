import React from 'react'
import './Section4.css'

import Logo1 from '../images/AirBnb.jpg'
import Logo2 from '../images/Google.webp'
import Logo3 from '../images/Microsoft.jpeg'
import Logo4 from '../images/OYO.png'
import Logo5 from '../images/Amazon.png'
import Logo6 from '../images/FedEx.jpeg'
import Logo7 from '../images/Bookmyshow.jpg'
import Logo8 from '../images/WalMart.png'
import Logo9 from '../images/OLA.png'


const Section4 = () => {
  return (
 <>
 <div className="Section4-Top-Text">
    <h2>The Companies We Are Supported By </h2>
 </div>
 <div className="Section-4-Flex">
  <div className='Row-1'> 
  <img src={Logo1} alt="" />
  <img src={Logo2} alt="" />
  <img src={Logo3} alt="" />
  <img src={Logo4} alt="" />
  <img src={Logo5} alt="" />
  </div>
  <div className='Row-2'>
  <img src={Logo6} alt="" />
  <img src={Logo7} alt="" />
  <img src={Logo8} alt="" />
  <img src={Logo9} alt="" />
  <button>Explore More</button>
  </div>
 </div>
 </>
  )
}

export default Section4