import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <section id='hero' className='hero-container'>
            {/* <video src='/videos/video-2.mp4' autoPlay loop muted /> */}
            <img src='/images/img-2.jpg' alt='hero background' className='hero-background'/>
            <h1>Jessica Fan</h1>
            <p>Computer Science Graduate</p>
        </section>
    );
}

export default HeroSection;
