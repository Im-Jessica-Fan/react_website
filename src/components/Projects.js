import React from 'react'
import './Projects.css'
import '../App.css'
import { FaReact, FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

function Projects() {

  const projects = [
    {
      title: "ANDIE",
      description:
        "A Non-Destructive Image Editor that creates a Graphical User Interface (GUI) that provides access to various image editing and processing operations.",
      tags: ["Java", "Git", "GitLab", "Gradle"],
      github: "http://localhost:3000/git-private"    
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website showcasing my projects, skills, experience, and background. You're looking at it!",
      tags: ["React", "HTML", "CSS", "JavaScript", "GitHub"],
      github: "https://github.com/Im-Jessica-Fan/react_website",
    }
  ]

  const skills = [
    {
      category: "Programming Languages",
      items: [
        {
          name: "Python",
          icon: null
        },
        {
          name: "Java",
          icon: null
        },
        {
          name: "JavaScript",
          icon: null
        },
        {
          name: "TypeScript",
          icon: null
        },
        {
          name: "SQL",
          icon: null
        }
      ]
    },
    {
      category: "Backend",
      items: [
        {
          name: "Python",
          icon: FaPython
        },
        {
          name: "Java",
          icon: null
        },
        {
          name: "Node.js",
          icon: null
        },
        {
          name: "Express",
          icon: null
        }
      ]
    },
    {
      category: "Database",
      items: [
        {
          name: "Python",
          icon: FaPython
        },
        {
          name: "Java",
          icon: null
        },
        {
          name: "Node.js",
          icon: null
        },
        {
          name: "Express",
          icon: null
        }
      ]
    },
    {
      category: "Tools",
      items: [
        {
          name: "Python",
          icon: FaPython
        },
        {
          name: "Java",
          icon: null
        },
        {
          name: "Node.js",
          icon: null
        },
        {
          name: "Express",
          icon: null
        }
      ]
    }
  ];


  return (
    <section id="projects" className="projects-container">
      <div className='projects-content'>
        <h1>Personal Projects</h1>
        <div className="project-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              
              <div className="project-buttons">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                {/* <a href={project.demo}>Demo ↗</a> */}
              </div>

              <div className="project-tags">
                {project.tags.map((tag, i)=>(
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className='stack-content'>
        <h1>My Stack</h1>

        {skills.map(section => (
          <div className="stack-row" key={section.category}>
            <h2>{section.category}</h2>

            <div className="skill-list">
            {section.items.map(skill => {
            const Icon = skill.icon;

            return (
              <div className="skill-pill" key={skill.name}>
                {Icon && <Icon />}
                {skill.name}
              </div>
            );
            })}            
            </div>
          </div>
        ))}
      </div> */}
    </section>
  )
}

export default Projects