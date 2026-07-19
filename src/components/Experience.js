import React from 'react'
import './Experience.css'
import '../App.css'

function Experience() {
  return (
    <section id='experience' className='experience-container'>
      <div>
        <h1>My Journey</h1>
      </div>
      <div>
        <div>
          <h2>Education</h2>
          <div>
              <p>Bachelor of Science</p>
              <p>Majoring in Computer Science and Neuroscience</p>
              <p>University of Otago</p>
              <p>Dunedin, New Zealand</p>
              <p>February 2023 - May 2026</p>
              <p>Cumulative GPA: 7.9/9.0</p>
              <ul>
                <li>University of Otago New Frontiers Scholarship (2023)</li>
                <li>Academic Excellence Honour Roll (2024)</li>
                <li>Class Representative (2024)</li>
              </ul>
          </div>
          <div>
            <p>Global Student Exchange Program</p>
            <p>University of Edinburgh</p>
            <p>Edinburgh, Scotland</p>
            <p>January 2026 - May 2026</p>
          </div>
          <div>
            <p>Global Student Exchange Program</p>
            <p>University of British Columbia</p>
            <p>Vancouver, Canada</p>
            <p>September 2025 - December 2025</p>
          </div>
        </div>
        <div>
          <h2>Experience</h2>
          <div>
            <p>Data Science Intern</p>
            <p>Scentian Bio</p>
            <p>Auckland, New Zealand</p>
            <p>July 2025 - August 2025</p>
          </div>
          <div>
            <p>Bioinformatics Intern</p>
            <p>Scentian Bio</p>
            <p>Auckland, New Zealand</p>
            <p>November 2024 - August 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
