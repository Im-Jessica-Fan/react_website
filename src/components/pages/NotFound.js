import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    
        <section className='not-found-container'>
            <img src='/images/img-2.jpg' alt='404 error background' className='not-found-background'/>
            <h1>404</h1>
            <p>Oops! Page Not Found</p>
            <Link to='/' className='return-home'>Return to Home</Link>
        </section>
  )
}

export default NotFound
