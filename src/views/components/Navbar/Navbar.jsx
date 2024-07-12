import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo-rose.png'

export default function Navbar() {
  return (
    <>
    <img className="logo" src={Logo} alt='logo' />
    <nav>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Footer</a></li>
            </ul>
    </nav>
    </>
  )
}
