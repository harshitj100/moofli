import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <nav className="navbar">
      <div className="moofli">
        Moofli
      </div>
      <div className='left-section'>
        <div className="about_us">
          About us
        </div>
        <div className="contact_us">
          Contact us
        </div>
        <Link to="https://forms.gle/J2mwFxtuk79xtq7a8">
          <div className="get-started">
            Get started
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
