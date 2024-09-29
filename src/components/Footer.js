import React from 'react'
import '../styles/Footer.css'
import Image from 'next/image'
import logo from  '@/assets/Vector.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-contain">
            <div className="first">
                <a href="/">
                    <Image 
                        // className={styles.logo}
                        src={logo}
                        alt="Next.js Logo"
                        width={37}
                        height={37}
                        priority
                    />
                    <p className='canva-font'>izzy <br />Build</p>
                </a>
                <p>Founded in 2007, Sparch is specializing in providing innovative services such as websitFounded in 2007.</p>
            </div>
            <div className="second">
                <h4>Important Links</h4>
                <ul>
                    <li>Home </li>
                    <li>About Us </li>
                    <li>Project </li>
                    <li>News </li>
                    <li>Team</li>
                </ul>
            </div>
            <div className="third">
                <h4>Support</h4>
                <ul>
                    <li>FAQs </li>
                    <li>Privacy Policy </li>
                    <li>Terms Of Service </li>
                    <li>Terms Of Use</li>
                </ul>
            </div>
            <div className="fourth">
                <h4>Social Media</h4>
                <ul>
                    <li>Facebook </li>
                    <li>Instagram </li>
                    <li>LinkedIn </li>
                    <li>Youtube</li>
                </ul>
            </div>
        </div>
        <p className='copy'>Copyright 2025 © All Right Reserved</p>
    </div>
  )
}

export default Footer