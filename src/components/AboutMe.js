import React from 'react'
import './AboutMe.css'
import '../App.css'
import { Button } from './Button';


function AboutMe() {
    return (
        <section id='about' className='about-me-container'>
            <div className='about-me-image' />
            <div className='about-me-content'>
                <h1>
                    About Me
                </h1>
                <p>
                    Hello! I'm Jessica, a Computer Science and Neuroscience graduate from the University of Otago with interests in full-stack development and data science. I am passionate about building technology that creates meaningful impacts on people's lives. I thrive on stepping out of my comfort zone, embracing new challenges, and continuously expanding my knowledge and skills.</p>
                <p>
                    Beyond coding, I enjoy hiking, travelling, and immersing myself in new cultures. This led me to participate in Global Student Exchange Programs in both Canada and Scotland, where I embraced new environments, broadened my perspective, and challenged myself to grow personally and professionally.</p>
                <div className='about-me-socials'>
                    <Button href='https://github.com/Im-Jessica-Fan' buttonStyle='btn--transparent'><i className="fa-brands fa-github"></i></Button>
                    <Button href='https://www.linkedin.com/in/imjessicafan' buttonStyle='btn--transparent'><i className="fa-brands fa-linkedin"></i></Button>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
