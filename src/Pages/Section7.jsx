import React from 'react'
import './Section7.css'
import man from '../images/man.jpg'
import girl from '../images/girl.jpg'

const Section7 = () => {
  return (
<>
<div className="Section-7-Top-Text">
<h2>What Are The Client Saying About Us</h2>
</div>
<div className='Section-7-Flex'>
    <div className='Circle-Image'>
<img className='Image-1' src={man} alt="" />
<img className='Image-2' src={girl} alt="" />
<img className='Image-1' src={man} alt="" />
<img className='Image-2' src={girl} alt="" />
</div>
<div className='Section-1'>
    <div className='Section-1-Text'>
    <img className='Person-1' src={man} alt="" />
    <h2>David Salsa</h2>
    <h3>Park Street, L/k-2, USA</h3>
    </div>
    <p>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which slightly believable.</p>
</div>
<div className='Section-2'>
    <div className='Section-2-Text'>
    <img className='Person-2' src={girl} alt="" />
    <h2>Lusia Salsa</h2>
    <h3>Park Street, L/k-2, USA</h3>
    </div>
    <p>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which slightly believable.</p>
</div>
</div>
</>
  )
}

export default Section7