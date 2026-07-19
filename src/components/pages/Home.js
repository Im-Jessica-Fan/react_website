import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import LiquidEther from '../LiquidEther';
import Projects from '../Projects';
import Contact from '../Contact';

function Home() {
    return (
        <>
            <div className='background-behind'>
            {/* <div className="background-effect">
            <LiquidEther
                colors={["#ffffffff", "#ffffffff", "#ffffffff"]}                
                mouseForce={20}
                cursorSize={100}
                isViscous
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
            />   
            </div>          */}
            </div>            
            <HeroSection />
            <AboutMe />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;