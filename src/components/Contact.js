import React from 'react'
import '../App.css'
import ContactForm from './ContactForm'
import './ContactForm.css'

function Contact() {
  return (
    <section id='contact' className='contact-container'>
        <div>
            <ContactForm />
        </div>
    </section>
  )
}

export default Contact
