import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <nav>
            <ul>
               <Link to="/Dashboard" className='text-class'>Dashboard Page</Link> 
                <Link to="/posts" className='text-class'>Posts Page</Link>
                <Link to="/links" className='text-class'>Links Page</Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar