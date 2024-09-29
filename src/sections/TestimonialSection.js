import React, { useRef } from 'react'
import '../styles/TestimonalSection.css'
import Image from "next/image";
import leftImage from '../assets/testLeftPerson.png'
import rightImage from '../assets/testRightPersons.png'

import { gsap } from 'gsap/all';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const TestimonialSection = () => {

    const testimonialAnimate = useRef()

    const timeline = gsap.timeline({
        
        scrollTrigger: {
            trigger: '.testimonial',
            start: 'top bottom',
            // scrub: true
        },

    });
    
    useGSAP(() => {

        timeline.from('.testimonal-card h3', {
            y: 50,
            opacity: 0,
            ease: 'sine.inOut',
            duration: 0.7
        })

        timeline.from('.stag', {
            y: 60,
            opacity: 0,
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
    }, {})

  return (
    <div ref={testimonialAnimate} className='testimonial'>
        <div className="testimonal-card">
            <h3 className='canva-font'>“I really enjoyed working with you guys, you guys are very communicative and quick to do the job. I really can’t wait to work with you again”</h3>
        
            <div className="test-bottom-detail">
                <div className="test-left">
                    <Image 
                        className='testLeftImg stag'
                        src={leftImage}
                        alt="Next.js Logo"
                        width={56}
                        height={56}
                        priority
                    />
                    <div className="test-name">
                        <h6 className='stag'>Nazra Ahamea</h6>
                        <p className='stag'>CEO of open ecam</p>
                    </div>
                </div>
                <div className="test-right">
                    <Image 
                        className='testImg stag'
                        src={rightImage}
                        alt="Next.js Logo"
                        width={230}
                        height={56}
                        priority
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSection