import React, { useState } from 'react'
import './Main.css'
import SideMenu from '../../components/SideMenu';
import Header from '../Header/Header';


function Main() {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(true);
  }
  return (
    <main>
      <SideMenu active={active} />
      <div className={`banner ${active ? 'active' : undefined}`}>
        <Header toggleFunction={handleToggle} />
      </div>
    </main>
  )
}

export default Main
