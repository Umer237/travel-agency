import React from 'react'
import './Section2.css'
import img1 from '../images/Paris.jpeg'
import img2 from '../images/Spain.jpeg'
import img3 from '../images/Portugal.jpeg'
import img4 from '../images/Hazrat-Ali-Tomb.jpg'

const Section2 = () => {
  return (
   <>
   <div className='Section-2-Top-Text'>
    <h2>Inspiration For Future Getaways</h2>
   </div>
   <div className='Section-2-Flex'>
  <img src={img1} alt="" />
  <img src={img2} alt="" />
  <img src={img3} alt="" />
  <img src={img4} alt="" />
   </div>
   </>
  )
}

export default Section2