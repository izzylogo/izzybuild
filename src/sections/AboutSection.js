import React, { useRef } from 'react'
import '../styles/AboutSection.css'
import Image from "next/image";
import Icon1 from '../assets/Icon1.png'
import Icon2 from '../assets/Icon2.png'
import Icon3 from '../assets/Icon3.png'
import star from '../assets/aboutStar.png'
import rect from '../assets/rect2.png'
import splash from '../assets/splash.png'

import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


const AboutSection = () => {

    const aboutAnimate = useRef()

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: 'top bottom',
            // scrub: true
        },
    });

    useGSAP(() => {
        timeline.from('#about-h5', {
            y: 50,
            opacity: 0,
            delay: 0.5,
            ease: 'sine.inOut',
            duration: 0.7
        })
        timeline.from('.about-content', {
            y: 60,
            opacity: 0,
            delay: 0.3,
            duration: 0.7,
            ease: 'power3.in',
            stagger: {
                amount: .6,
                grid: [1, 1, 1],
                axis:  'y',
                // ease: 'back.in',
                from: 'start',
            }
        })
       
        gsap.from('.rect2', {
            x: 220,
        })

        gsap.to('.about-right-img', {
            backgroundPosition: '50% 80%', 
            duration: 0.3,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.about',
                start: 'top bottom',
                scrub: true
            },
            
        })

        timeline.from('#about-sect2-h2', {
            y: 50,
            opacity: 0, 
            delay: 0.0,
            duration: 0.3,
            ease: 'power1.in'
        })
        timeline.from('.first-tab', {
            scale: 0.3,
            opacity: 0, 
            delay: 0.0,
            duration: 0.3,
            ease: 'power1.in'
        })
        timeline.from('.first-tab h2', {
            y: 20,
            opacity: 0, 
            delay: 0.4,
            duration: 0.3,
            ease: 'power1.in'
        })
        timeline.from('.first-tab h4', {
            y: 20,
            opacity: 0, 
            delay: 0.0,
            duration: 0.3,
            ease: 'power1.in'
        })
        timeline.from('.splash', {
            x: 20,
            opacity: 0, 
            delay: 0.0,
            duration: 0.3,
            ease: 'power1.in'
        })

    }, {})

  return (
    <div ref={aboutAnimate} className='about'>
        <div className="about-contain">
            <div className="about-left">
                <h5 id='about-h5'>About Us</h5>
                <div className="abouts-det">
                    <div className="about-content">
                        <Image 
                            // className={styles.logo}
                            src={Icon1}
                            alt="Next.js Logo"
                            width={28}
                            height={28}
                            priority
                        />
                        <h3 className="canva-font">Strategy-led design in every detail!</h3>
                    </div>
                    <div className="about-content">
                        <Image 
                            // className={styles.logo}
                            src={Icon2}
                            alt="Next.js Logo"
                            width={28}
                            height={28}
                            priority
                        />
                        <h3 className="canva-font">Thought out to the smallest detail</h3>
                    </div>
                    <div className="about-content">
                        <Image 
                            // className={styles.logo}
                            src={Icon3}
                            alt="Next.js Logo"
                            width={28}
                            height={28}
                            priority
                        />
                        <h3 className="canva-font">We using top leading design</h3>
                    </div>
                </div>
            </div>
            <div className="about-right">
                <div className="about-right-img">
                    <Image 
                        className='about-star'
                        src={star}
                        alt="Next.js Logo"
                        width={87}
                        height={87}
                        priority
                    />
                    <svg class="about-svg-one" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_310_2)">
                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="rgba(17, 9, 14, 1)"></path>
                        </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                    <svg class="about-svg-two" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_310_2)">
                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="rgba(17, 9, 14, 1)"></path>
                        </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>

                    <div className="about-right-rectangle">
                        <div className="rect-cover">
                            <Image 
                                className='rect2'
                                src={rect}
                                alt="Next.js Logo"
                                width={267}
                                height={280}
                                priority
                            />
                            <svg class="about-svg-three" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_310_2)">
                                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="rgba(17, 9, 14, 1)"></path>
                                </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                            </svg>
                            <svg class="about-svg-four" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_310_2)">
                                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="rgba(17, 9, 14, 1)"></path>
                                </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-sect2 canva-font">
            <div className="about-sect2-content">
                <h2 id='about-sect2-h2' className='canva-font'>We using top leading <span>design</span></h2>

                <div className="years">
                    <div className="first-tab">
                        <h2>6+</h2>
                        <h4>Years of <br /> experience</h4>
                    </div>

                    <Image 
                        className='splash'
                        src={splash}
                        alt="Next.js Logo"
                        width={715}
                        height={130}
                        priority
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection