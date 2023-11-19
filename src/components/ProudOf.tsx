import React from 'react'
import styles from './ProudOf.module.css'

class Project {
  name: string
  description: string
  link: string

  constructor(name: string, description: string, link: string) {
    this.name = name
    this.description = description
    this.link = link
  }
}

export default function ProudOf(): JSX.Element {
  const projects: Project[] = [
    new Project('Raytracer', 'Implementation of a Raytracer using Monte Carlo method or approximation of light\'s rays of a surface.', 'https://github.com/Miou-zora/Raytracer'),
    new Project('Replic', 'A CI / CD project creator that create a mirror of a project. It create a basic Github Actions workflow, and can be customized to add contributors, files to the projet.', 'https://github.com/Miou-zora/Replic'),
    new Project('Star Worst', 'AR Project, where user is immersed in the death star scene of first Star Wars film using HTC Tracker.', 'https://github.com/Queng123/Project-DevFest')
  ]

  return (
    <div>
      <h1 className={styles.title}>PROUD OF</h1>
      <table className={styles.table}>
        {projects.map((project: Project) => {
          return (
            <td key={project.name} className={styles.ref}>
              <a href={project.link}>
                <tr><h2 className={styles.projectName}>{project.name}</h2></tr>
                <tr><p className={styles.projectDescription}>{project.description}</p></tr>
              </a>
            </td>
          )
        })}
      </table>
    </div>
  )
}
