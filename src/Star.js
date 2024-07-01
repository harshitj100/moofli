import React from 'react'
import star1 from './stars/Soft Star-1.png'
import star2 from './stars/Soft Star-2.png'
import star3 from './stars/Soft Star.png'
const Star = () => {
  return (
    <div className='star-container'>
      <div className='star-1'>
        <img src={star1}/>
      </div>
      <div className='star-2'>
        <img src={star2}/>
      </div>
      <div className='star-3'>
        <img src={star3}/>
      </div>
    </div>
  )
}

export default Star
