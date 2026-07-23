import React from 'react'
import './Projects.css'
import '../App.css'
import { SiPython, SiOpenjdk, SiJavascript, SiTypescript, SiReact, SiNodedotjs,SiPostgresql, SiMysql, SiPandas, SiPytorch, SiScikitlearn, SiNumpy, SiGit, SiGithub, SiGitlab, SiGooglecolab, SiJupyter, SiDocker, SiGradle} from "react-icons/si";

import { FaCode } from "react-icons/fa";
function Projects() {

  const projects = [
    {
      title: "ANDIE",
      description:
        "A Non-Destructive Image Editor that creates a Graphical User Interface (GUI) that provides access to various image editing and processing operations.",
      tags: ["Java", "Git", "GitLab", "Gradle"],
      github: null    
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
    category: "All",
    items: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: SiOpenjdk },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JSON", icon: FaCode },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Pandas", icon: SiPandas },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "NumPy", icon: SiNumpy },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitLab", icon: SiGitlab },
      { name: "Colab", icon: SiGooglecolab },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Docker", icon: SiDocker },
      { name: "Gradle", icon: SiGradle }
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
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                )}
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

      <div className='stack-content'>
        <h1>My Stack</h1>

        {skills.map(section => (
          <div className="stack-row" key={section.category}>
            {/* <h2>{section.category}</h2> */}

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
      </div>
    </section>
  )
}

export default Projects