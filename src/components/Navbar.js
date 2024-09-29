import React from 'react'
import Image from "next/image";
import logo from  '@/assets/Vector.png'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-contain">
            <div className="left">
                <a href="/">
                    <Image 
                        // className={styles.logo}
                        src={logo}
                        alt="Next.js Logo"
                        width={37}
                        height={37}
                        priority
                    />
                    <p>izzy <br />Build</p>
                </a>
            </div>
            <div className="mid">
                <ul>
                    <li>Home</li>
                    <li>About </li>
                    <li>Project</li>
                    <li>News </li>
                    <li>Team</li>
                </ul>
            </div>
            <div className="right">
                <button className='contact-us-btn'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar