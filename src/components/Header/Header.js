import './Header.css'
import React from 'react'

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className='header'>
     Movie Hub
    </span>
    
  )

}

export default Header