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
    new Project('Engine Squared', 'A game engine that aims to provide a developer friendly and open-source alternative for 3D game development. It is designed to provide accurate physics simulation and visually appealing graphics in a single package.', 'https://github.com/EngineSquared/EngineSquared'),
    new Project('R-Type', 'This project is a reproduction of "R-Type" game using a custom game engine (ECS) and up for 4 players in a same room.', 'https://github.com/Miou-zora/R-Type')
  ]

  if (window.innerWidth / window.innerHeight < 1) {
    return (
      <div>
        <h1 className={styles.title}>PROUD OF</h1>
        <table className={styles.table}>
          {projects.map((project: Project) => {
            return (
              <tr key={project.name} className={styles.ref}>
                <a href={project.link}>
                  <tr><h2 className={styles.projectName}>{project.name}</h2></tr>
                  <tr><p className={styles.projectDescription}>{project.description}</p></tr>
                </a>
              </tr>
            )
          })}
        </table>
      </div>
    )
  } else {
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
}
