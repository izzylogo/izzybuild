import React, { useRef } from 'react'
import '../styles/Preloader.css'
import logo from  '@/assets/Vector.png'
import Image from "next/image";
import '../components/SplitText'


import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';
// import { SplitText } from 'gsap-trial/all';

gsap.registerPlugin(ScrollTrigger)

const PreLoader = () => {

  const animating = useRef()

  const timeline = gsap.timeline({
    duration: 0.5
  });

  useGSAP(() => {

    timeline.from('.preload-logo', {
      y: 160,
      ease: 'back.inOut',
      stagger: 0.05,
      delay: 0.2,
      duration: 0.9,
      opacity: 1
      
    })

    timeline.from('.split', {
      y: 160,
      ease: 'back.inOut',
      stagger: 0.05,
      duration: 0.9,
      opacity: 1,
      // delay: 0.3,

      stagger: {
        amount: .6,
        grid: [2, 1],
        axis:  'y',
        ease: 'back.in',
        from: 'start',
      }
    })

    timeline.to('.preload-logo', {
      y: -160,
      ease: 'back.inOut',
      stagger: 0.05,
      duration: 0.9,
      // delay: 0.5,
      opacity: 1

    })

    timeline.to('.split', {
      y: -160,
      ease: 'back.inOut',
      stagger: 0.05,
      duration: 0.9,
      opacity: 1,
      // delay: 0.5,
    })


    timeline.to('.preloader', {
      duration: 1.25,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
      display: 'none'
    })


  }, {})
   

  return (
    <div className='preloader'>
        <div ref={animating} class="demo">
          <div className="inner">
            <Image  
                  className='preload-logo'
                  // className={styles.logo}
                  src={logo}
                  alt="Next.js Logo"
                  width={50}
                  height={50}
                  priority
              />
            <div className='splitText'>
              <p className='split'>I </p>
              <p className='split'>z</p>
              <p className='split'>z</p>
              <p className='split'>y</p>
              <p className='split'>{" "}</p>
              <p className='split'>B</p>
              <p className='split'>u</p>
              <p className='split'>i</p>
              <p className='split'>l</p>
              <p className='split'>d</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PreLoader