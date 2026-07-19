import React from 'react'
import '../App.css'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <p>
            © {new Date().getFullYear()} Jessica Fan
        </p>
    </div>    
  )
}

export default Footer
