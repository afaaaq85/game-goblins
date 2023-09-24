import React from 'react'
import './Header.css'
import UserImage from '../../images/user.jfif'

const Header = ({toggleFunction}) => {
  return (
    <header>
      <a href='#aaa' className='menu' onClick={toggleFunction}>
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
        <div className='avatar'>
          <a href='#'>
            <img src={UserImage} alt='User Image' />
          </a>
          <div className='user'>
            <span>Username</span>
            <a href='#'>View Profile</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
