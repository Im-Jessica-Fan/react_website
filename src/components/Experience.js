import React from 'react'
import './Experience.css'
import '../App.css'

function Experience() {
  return (
<section id="experience" className="experience-container">
  <div className="experience-content">
    <h1 className="experience-title">My Journey</h1>

    <div className="timeline-wrapper">
      <div className="timeline-column">
        <h1>Education</h1>

        <div className="timeline-item current">
          <div className="timeline-content">
            <img src="/images/otago.jpg" alt="University of Otago" className="corner-logo" />
            <p className="date">Feb 2023 - May 2026</p>
            <h3>Bachelor of Science</h3>
            <p className='major'>Majoring in Computer Science and Neuroscience</p>
            <p>University of Otago</p>
            <p>Dunedin, New Zealand</p>
            <ul>
              <li>University of Otago New Frontiers Scholarship (2023)</li>
              <li>Academic Excellence Honour Roll (2024)</li>
              <li>Class Representative (2024)</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <img src="/images/edinburgh.jpg" alt="University of Edinburgh" className="corner-logo" />
            <p className="date">Jan 2026 - May 2026</p>
            <h3>Global Student Exchange Program</h3>
            <p>University of Edinburgh</p>
            <p className='timeline-lastp'>Edinburgh, Scotland</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <img src="/images/ubc.jpg" alt="University of British Columbia" className="corner-logo" />
            <p className="date">Sep 2025 - Dec 2025</p>
            <h3>Global Student Exchange Program</h3>
            <p>University of British Columbia</p>
            <p className='timeline-lastp'>Vancouver, Canada</p>
          </div>
        </div>
      </div>

      <div className="timeline-column">
        <h1>Experience</h1>

        <div className="timeline-item current">
          <div className="timeline-content">
            <img src="/images/scentianbio.jpg" alt="Scentian Bio" className="corner-logo" />
            <p className="date">Jul 2025 - Aug 2025</p>
            <h3>Data Science Intern</h3>
            <p>Scentian Bio</p>
            <p className='timeline-lastp'>Auckland, New Zealand</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <img src="/images/scentianbio.jpg" alt="Scentian Bio" className="corner-logo" />
            <p className="date">Nov 2024 - Feb 2025</p>
            <h3>Bioinformatics Intern</h3>
            <p>Scentian Bio</p>
            <p className='timeline-lastp'>Auckland, New Zealand</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <img src="/images/otago.jpg" alt="University of Otago" className="corner-logo" />
            <p className="date">2024</p>
            <h3>Class Representative</h3>
            <p>University of Otago</p>
            <p className='timeline-lastp'>Dunedin, New Zealand</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>  )
}

export default Experience
