import React, { useRef } from 'react'
import '../styles/ContactSection.css'
import Image from "next/image";
import contactImg from '../assets/contactImg.png'

import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {

  const contactAnimate = useRef()

  const timeline = gsap.timeline({
        
    scrollTrigger: {
        trigger: '.contact',
        start: 'top bottom',
        // scrub: true
    },
  });

  useGSAP(() => {
    timeline.from('.contactImg', {
      y: 10,
      opacity: 0.3,
    })
    timeline.from('.cont-cover h2', {
      y: 20,
      opacity: 0,
      delay: 0.8
    })
    timeline.from('.cont-cover button', {
      y: 40,
      ease: 'bounce',
      delay: 0.7
    })

    
  }, {})

  return (
    <div ref={contactAnimate} className='contact'>
        <div className="contact-contain">
            <div className="cont-cover">
                <Image 
                    className='contactImg'
                    src={contactImg}
                    alt="Next.js Logo"
                    width={510}
                    height={112}
                    priority
                />

                <h2 className='canva-font'>Have any project idea?</h2>
                <button className='contact-us-btn'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default ContactSection