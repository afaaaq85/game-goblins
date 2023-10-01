import React from 'react'


function NavListItem({ item }) {
    return (
        <div>
            <li>
                <a href='#home'>
                    <i className={`bi ${item.icon}`}></i>
                    <span className='navName'>{item.name}</span>
                </a>
            </li>
        </div>
    )
}

export default NavListItem
