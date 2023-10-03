import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <a href='#aaa' className='menu'>
        <i class="bi bi-sliders"></i>
      </a>
      <div className='userItems'>
        <a href='#ab' className='icon'>
          <i class="bi bi-heart-fill"></i>
          <span className='like'>0</span>
        </a>
        <a href='#ab' className='icon'>
          <i class="bi bi-bag-fill"></i>
          <span className='bag'>0</span>
        </a>
      </div>
    </header>
  )
}

export default Header
