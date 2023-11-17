import React from 'react'

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
    new Project('Raytracer', 'Implementation of a Raytracer using Monte Carlo method or approximation of light\'s rays of a surface.', 'link'),
    new Project('Replic', 'A CI / CD project creator that create a mirror of a project. It create a basic Github Actions workflow, and can be customized to add contributors, files to the projet.', 'link'),
    new Project('Star Worst', 'AR Project, where user is immersed in the death star scene of first Star Wars film using HTC Tracker.', 'link')
  ]

  return (
    <div>
      <h1>PROUD OF</h1>
      <table>
        {projects.map((project: Project) => {
          return (
            <td key={project.name}>
              <tr><p>{project.name}</p></tr>
              <tr><p>{project.description}</p></tr>
              <tr><p>{project.link}</p></tr>
            </td>
          )
        })}
      </table>
    </div>
  )
}
