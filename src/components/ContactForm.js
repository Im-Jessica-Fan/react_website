import { useState } from 'react';
import './ContactForm.css';
import { Button } from './Button'

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "86123b85-064e-42d9-ab42-8676398a32e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }  
    };

  return (
    <section className="contact-section">
      <div className="contact-intro">
        <h1>Contact</h1>
        <h2>Get in Touch</h2>
        <div className="contact-description">
          <p>Thanks for stopping by!</p> 
          <p>Have a question, or want to connect? Feel free to reach out!</p>
        </div>
        <div className='contact-socials'>
          <Button href='https://github.com/Im-Jessica-Fan' buttonStyle='btn--transparent'><i className="fa-brands fa-github"></i></Button>
          <Button href='https://www.linkedin.com/in/imjessicafan' buttonStyle='btn--transparent'><i className="fa-brands fa-linkedin"></i></Button>
        </div>  
      </div>

      <form className="contact-form" onSubmit={onSubmit}>
        <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
        <input type="hidden" name="from_name" value="My Website" />

        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name *</label>
            <input id="name" name="name" className="form-input" placeholder="Your name" type="text" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email *</label>
            <input id="email" name="email" className="form-input" placeholder="Your email" type="email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">Message *</label>
            <textarea className="form-textarea" id="message" name="message" placeholder="Your message" required></textarea>
          </div>
        </div>
        <button className="form-submit" type="submit"><i className="fa-regular fa-paper-plane"/>Send Message</button>
        <div className='form-submit-result'>{result && <p>{result}</p>}</div>
      </form>
    </section>  
  );
}