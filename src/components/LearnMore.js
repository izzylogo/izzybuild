import React, { useRef } from 'react'
import '../styles/LearnMore.css'


import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'

import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const LearnMore = () => {
    const learnAnimate = useRef()

    const timeline = gsap.timeline({
        // repeat: -1, 
        // repeatDelay: 1, 
        // yoyo: true,
        scrollTrigger: {
            trigger: '.learn-more',
            start: 'top bottom',
            // scrub: true
        },
    });

    useGSAP(() => {
        timeline.fromTo('.learn-more-box', {
            y: -120,
            delay: 0.3,
            duration: 0.5,
            opacity: 0.3,
            ease: 'back.in',
             scrollTrigger: {
            trigger: '.learn-more',
            start: 'top bottom',
            // scrub: true
        },
        },
         {
            opacity: 1,
            y: 0,
            delay: 0.4,
            duration: 0.5,
        })

        timeline.from('#learn-box-h2', {
            y: -50,
            duration: 0.4,
            opacity: 0,
        })

        timeline.from('#learn-box-p', {
            y: -50,
            duration: 0.4,
            opacity: 0,
        })
        
        timeline.from('.learn-btn-cover', {
            y: 50,
            duration: 0.4,
            opacity: 0,
        })
    }, {})


  return (
    <div className='learn-more' ref={learnAnimate}>
        <div className="learn-more-contain">
            <div className="learn-more-box">
                <h2 id='learn-box-h2' className='canva-font'>We provide the best architecture <br /> design that is <span>out of the box!</span></h2>
                <p id='learn-box-p'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            
                <div className="learn-btn-cover">
                    <button>Learn More.</button>
                    <svg class="learn-btn-svg-one" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_310_2)">
                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="rgba(17, 9, 14, 1)"></path>
                        </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                    <svg class="learn-btn-svg-two" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_310_2)">
                            <path d="M30 0H0V30C0 13.431 13.431 0 30 0Z" fill="rgba(17, 9, 14, 1)"></path>
                        </g><defs><clipPath id="clip0_310_2"><rect width="30" height="30" fill="white"></rect></clipPath></defs>
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LearnMore