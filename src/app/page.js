'use client'

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from "@/sections/HeroSection";
import LearnMore from "@/components/LearnMore";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import TestimonialSection from "@/sections/TestimonialSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import PreLoader from '@/components/PreLoader';
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const timeline = gsap.timeline({
    repeatDelay: 1
  });

  useGSAP(() => {
    timeline.to('.preloading', {
      display: 'none', 
      delay: 1,
      duration: 3
    })
    timeline.from('#loadedSection', {
      display: 'none',       
    })
  }, {})

  return (
    <div>
      
        <div className="preloading">
          <PreLoader />
        </div>
        <div id='loadedSection'>
          <Navbar />
          <HeroSection />
          <LearnMore />
          <AboutSection />
          <ProjectSection />
          <TestimonialSection />
          <ContactSection/>
          <Footer/>
        </div>
    </div>
  );
}

// 'use client'

// import { useEffect, useRef, useState } from 'react';


// import Image from "next/image";
// import styles from "./page.module.css";
// import HeroSection from "@/sections/HeroSection";
// import LearnMore from "@/components/LearnMore";
// import AboutSection from "@/sections/AboutSection";
// import ProjectSection from "@/sections/ProjectSection";
// import TestimonialSection from "@/sections/TestimonialSection";
// import ContactSection from "@/sections/ContactSection";
// import Footer from "@/components/Footer";
// import {gsap} from 'gsap'
// import { useGSAP } from '@gsap/react'

// // preloader
// import PreLoader from '@/components/PreLoader';
// import Navbar from '@/components/Navbar';

// export default function Home() {


//   const [loading, setLoading] = useState(false);

//   const [showMain, setShowMain] = useState(false)
 
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 7000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div>
//       {
//         loading && <PreLoader id='preloadingSection' /> 
//       }
       
      
//         <div id='loadedSection'>
//           <Navbar />
//           <HeroSection />
//           <LearnMore />
//           <AboutSection />
//           <ProjectSection />
//           <TestimonialSection />
//           <ContactSection/>
//           <Footer/>
//         </div>
       
//     </div>
//   );
// }
