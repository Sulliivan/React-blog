import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact Us',
        path: '/contact-us'
    },
    {
        title: 'Login',
        path: '/login'
    }
]

export default function Navigation ({user}) {
    const [menuActive, setMenuActive] = useState(false)


    return (
    <nav className="site-navigation">
        <span>My React Blog</span>
            <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    { navLinks.map((link, index)=> (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))
                    }
                </ul>
                <span  className="menu-avatar-name">{`${user.firstName} ${user.lastName}`} </span>
            </div> 
                <ion-icon name="menu" onClick={() => setMenuActive(!menuActive)}/>
    </nav>)
}