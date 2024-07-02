import React from 'react'
import heart from './heart.png'
import user1 from './users/user1.png'
import user2 from './users/user2.png'
import user3 from './users/user3.png'
import user4 from './users/user4.png'
const Reviews = () => {
  return (
    <div className='moofli-about'>
      <div className='moofli-desc'>
        Where minds crunch together <span class="just-space">just</span> like peanuts..
      </div>
      <div className='like-count'>
        <div className='value'>4.5k+ O</div>
        <div className='value'>3.6k+ O</div>
        <div className='value'>234 O</div>
        <div className='value'>6.7k+ O</div>
      </div>

      <div className='review-title'>
        We don’t crave for reviews, we know we are awesome
        but still there you go...
      </div>

      <div className='user-rating'>
        <div className='user-1'>
          <img src={user1}/>
          <div className='rating-container'>
            <div className='rating'>5 stars</div>
            <div className='reason'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
        <div className='user-2'>
          <img src={user2}/>
          <div className='rating-container'>
            <div className='rating'>5 stars</div>
            <div className='reason'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
        <div className='user-3'>
          <img src={user3}/>
          <div className='rating-container'>
            <div className='rating'>5 stars</div>
            <div className='reason'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
        <div className='user-4'>
          <img src={user4}/>
          <div className='rating-container'>
            <div className='rating'>5 stars</div>
            <div className='reason'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
