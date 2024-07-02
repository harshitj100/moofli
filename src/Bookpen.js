import React from 'react'
import rectangle2 from './rectangles/Rectangle 2.png'
import rectangle3 from './rectangles/Rectangle 3.png'
import rectangle4 from './rectangles/Rectangle 4.png'
import rectangle5 from './rectangles/Rectangle 5.png'
import bookpen from './book-pen.png'
const Bookpen = () => {
  return (
    <div className="new-element">
      <div className='rectangle-images'>
        <img src={rectangle2} />
        <img src={rectangle3} />
        <img src={rectangle4} />
        <img src={rectangle5} />
      </div>
      <div className='bookpen-images'>
        <img src={bookpen}/>
      </div>    
    </div>
  )
}

export default Bookpen
