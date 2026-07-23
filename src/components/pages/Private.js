import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css';

function Private() {
  return (
        <section className='not-found-container'>
            <img src='/images/img-2.jpg' alt='404 error background' className='not-found-background'/>
            <h1>Sorry!</h1>
            <p>This repository is private following academic integrity guidelines.</p>
            <Link to='/' className='return-home'>Return Home</Link>
        </section>
  )
}

export default Private
