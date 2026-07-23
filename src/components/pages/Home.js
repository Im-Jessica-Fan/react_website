import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AboutMe from '../AboutMe';
import Experience from '../Experience';
import Projects from '../Projects';
import Contact from '../Contact';
import Navbar from '../Navbar';

function Home() {
    return (
        <>
            <div className='background-behind'/>
            <Navbar />
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