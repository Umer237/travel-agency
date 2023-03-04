import React from 'react';
import './Section7.css'
import { AiFillStar } from 'react-icons/ai';

const Section7 = () => {
  return (
<>
<div className="section7-text">
    <h2>What Are The Client<br></br>Saying About Us</h2>
</div>
<div className="section7-flex">
<div className="section7-box">
    <h5>David Salsa</h5>
    <h6>Park Street, L/K-2,USA</h6>
</div>
<div className="section7-icon">
    <h5>4.7</h5>
<AiFillStar className='icon-section'/>
</div>
</div>
</>
  )
}

export default Section7
