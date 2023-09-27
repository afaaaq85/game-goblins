import React, { useState } from 'react'
import './sideMenu.css'
import navListData from '../data/navListData'
import socialListData from '../data/socialListData';
import NavListItem from './NavListItem';


function SideMenu({active}) {
    const [navData, setNavData] = useState(navListData);
    const [socialData, setSocialData] = useState(socialListData);

    return (
        <div className={`sideMenu ${active ? 'active' : undefined}`}>
            <a href='#aa' className='logo'>
                <i className="bi bi-controller"></i>
                <span className='brand'>GameON</span>
            </a>
            <ul className='nav'>
                {navData.map(item => (
                    <NavListItem key={item._id} item={item} />
                ))}
            </ul>
            <ul className='social'>
                {socialData.map(item => (
                    <NavListItem key={item._id} item={item} />
                ))}
            </ul>

        </div>
    )
}

export default SideMenu
