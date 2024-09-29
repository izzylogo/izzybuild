'use client'

import React, {useRef, useState, useEffect} from 'react'
import Image from "next/image";
import '../styles/HeroSection.css'
import line from '../assets/line.png'

import { ScrollTrigger } from 'gsap/all';
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {


    const container = useRef()

    const scrollImage = useRef()

    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            // scrub: true
        },
    });

    useGSAP(() => {
        gsap.fromTo('#introText', {
            opacity: 0,
            x: -300,
            delay: 5.5,
            duration: 1.3,
        },{
            opacity: 1,
            x: 0,
            delay: 5.5,
            duration: 1.3,
        })
        
        gsap.fromTo('.bottom-left-img', {
            opacity: 1,
            x: -700,
            delay: 5.5,
            duration: 1.3,
        },{
            opacity: 1,
            x: 0,
            delay: 5.5,
            duration: 1.3,
        })
        

        gsap.fromTo('#top-right', {
            x: -120,
            delay: 5.5,
            duration: 1.3,
            opacity: 1
        },
         {
            opacity: 1,
            x: 0,
            delay: 5.5,
            duration: 1.3,
        })

        gsap.from('.bg-text', {
            x: 200,
            opacity: 0,
            delay: 5,
            duration: 1.5
        })

        gsap.from('.num', {
            y: 60,
            opacity: 0.4,
            duration: .8,
            delay: 5,
            stagger: {
              amount: .9,
              grid: [1, 1, 1],
              axis:  'y',
              ease: 'circ-in',
              from: 'start',
            }
        })

        
    }, {})

  return (
    <div className='hero'>
        <div className="hero-contain">
            <div className="hero-top">
                <div className="topleft">
                    <p id='introText'>Founded in 2007, Sparch is specializing in providing innovative services such as websitFounded in 2007.</p>
                </div>
                <div className="topright" id='top-right'>
                    <h1 className='showing bg-text'>
                        "We shape our <br /> buildings, <span>thereafter <br /> they shape us."</span>
                    </h1>
                    <h1 className='dont bg-text'>
                        "We shape our <br /> buildings, <span>thereafter <br /> they shape us."</span>
                    </h1>
                    <svg class="svg-one" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_310_2)">
                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="rgba(17, 9, 14, 1)"></path>
                        </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                </div>
            </div>
            <div className="hero-bottom">
                <div className="bottomleft">
                    <div id='mainbg' className="bottomleft-contain">
                        <svg class="svg-two" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_310_2)">
                                <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="rgba(17, 9, 14, 1)"></path>
                            </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                        </svg>

                        <div className="bottom-left-img">
                            <svg class="svg-three" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_310_2)">
                                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="rgba(17, 9, 14, 1)"></path>
                                </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                            </svg>

                            <svg class="svg-four" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_310_2)">
                                    <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="rgba(17, 9, 14, 1)"></path>
                                </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                            </svg>

                        </div>
                    </div>

                </div>
                <div className="bottomright">
                    <div className="num">
                        <h2>01. <span>Home in Forest</span></h2>
                    </div>
                    <div className="num">
                        <h2>02. <span>Villa in London</span></h2>
                    </div>
                    <div className="num">
                        <h2>03. <span>Renovate Exterior</span></h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection