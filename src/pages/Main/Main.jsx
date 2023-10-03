import React from 'react'
import './Main.css'
import SideMenu from '../../components/SideMenu';
import Header from '../Header/Header';

function Main() {
  return (
    <main>
      <SideMenu />
      <div className='banner'>
        <Header/>
      </div>
    </main>
  )
}

export default Main
