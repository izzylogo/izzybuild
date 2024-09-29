import React, { useRef } from 'react'
import Image from "next/image";
import '../styles/ProjectSection.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

import {gsap} from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)


const ProjectSection = () => {

    const projectAnimate = useRef()

    const timeline = gsap.timeline({
        
        scrollTrigger: {
            trigger: '.project',
            start: 'top bottom',
            // scrub: true
        },
    });

    const timeline2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.main-projects',
            start: 'top bottom',
            // scrub: true
        },
    })

    useGSAP(() => {
        timeline.from('.project-contain-h2', {
            y: 50,
            opacity: 0,
            delay: 0.5,
            ease: 'sine.inOut',
            duration: 0.7
        }, {})

        timeline.from('.project-detail', {
            opacity: 0,
            delay: 0.5,
            duration: 0.7,
            ease: 'power3.in',
        })

        timeline2.from('.proj', {
            y: 60,
            opacity: 0,
            delay: 0.5,
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

        timeline.from('.see-projects', {
            y: 60,
            opacity: 0,
            delay: 0.2,
            duration: 0.3,
            ease: 'bounce.in'
        })

        // gsap.to('.projectImg', {
        //     backgroundPosition: '50% 80%', 
        //     duration: 0.3,
        //     delay: 0.5,
        //     scrollTrigger: {
        //         trigger: '.main-projects',
        //         start: 'top bottom',
        //         scrub: true
        //     },
        // })
        gsap.to('.projectImg1', {
            backgroundPosition: '50% 80%', 
            duration: 0.3,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.main-project1',
                start: 'top bottom',
                scrub: true
            },
        })
        gsap.to('.projectImg2', {
            backgroundPosition: '50% 80%', 
            duration: 0.3,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.main-project2',
                start: 'top bottom',
                scrub: true
            },
        })
        gsap.to('.projectImg3', {
            backgroundPosition: '50% 80%', 
            duration: 0.3,
            delay: 0.5,
            scrollTrigger: {
                trigger: '.main-project3',
                start: 'top bottom',
                scrub: true
            },
        })
    }, {})

  return (
    <div ref={projectAnimate} className='project'>
        <div className="project-contain">
            <h2 className='canva-font project-contain-h2'>Our Projects</h2>

            <div className="projects">
                <div className="main-projects main-project1">
                    <div className="project-image">
                        <div className="projectImg1 projectImg"></div>
                        {/* <Image 
                            className='projectImg'
                            src={project1}
                            alt="Next.js Logo"
                            width={770}
                            height={350}
                            priority
                        /> */}
                    </div>

                    <div className="project-detail">
                        <h4 className='canva-font proj'>Landscape</h4>
                        <p className='proj'>Founded in 2007, Sparch is specializing in providing innovative services such as websitFounded in 2007.</p>
                        <button className='proj'>See Projects</button>
                    </div>
                </div>
                <div className="main-projects main-project2">
                    <div className="project-detail">
                        <h4 className='canva-font proj'>Landscape</h4>
                        <p className='proj'>Founded in 2007, Sparch is specializing in providing innovative services such as websitFounded in 2007.</p>
                        <button className='proj'>See Projects</button>
                    </div>
                    <div className="project-image">
                        <div className="projectImg2 projectImg"></div>
                        {/* <Image 
                            className='projectImg'
                            src={project2}
                            alt="Next.js Logo"
                            width={770}
                            height={350}
                            priority
                        /> */}
                    </div>
                </div>
                <div className="main-projects  main-project3">
                    <div className="project-image">
                        <div className="projectImg3 projectImg"></div>
                        {/* <Image 
                            className='projectImg'
                            src={project3}
                            alt="Next.js Logo"
                            width={770}
                            height={350}
                            priority
                        /> */}
                    </div>

                    <div className="project-detail">
                        <h4 className='canva-font proj'>Landscape</h4>
                        <p className='proj'>Founded in 2007, Sparch is specializing in providing innovative services such as websitFounded in 2007.</p>
                        <button className='proj'>See Projects</button>
                    </div>
                </div>
            </div>

            <div className="btn-cover">
                <button className='see-projects'>See All Projects</button>
            </div>
        </div>
    </div>
  )
}

export default ProjectSection