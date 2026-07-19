import React from 'react'
import './AboutMe.css'
import '../App.css'
import { Button } from './Button';


function AboutMe() {
    return (
        <section id='about' className='about-me-container'>
            <div className='about-me-image'>                    
                <img src='/images/img-1.jpg' alt='photo of myself' className='about-me-photo'/>
            </div>
            <div className='about-me-content'>
                <h1>
                    About Me
                </h1>
                <p>
                    Hello, I'm Jessica! I am a computer science and neuroscience graduate from the University of Otago. 
                </p>
                <div>
                    <Button href='https://github.com/Im-Jessica-Fan' buttonStyle='btn--transparent'><i className="fa-brands fa-github"></i></Button>
                    <Button href='https://www.linkedin.com/in/imjessicafan' buttonStyle='btn--transparent'><i className="fa-brands fa-linkedin"></i></Button>
                    <Button href='mailto:jessicafan2603@gmail.com' buttonStyle='btn--transparent'><i className="fa-solid fa-envelope"></i></Button>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
