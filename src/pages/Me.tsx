import React from 'react'
import PageButton from '../components/PageButton'

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

export default function MePage(): JSX.Element {
  const projects: Project[] = [
    new Project('Raytracer', 'Implementation of a Raytracer using Monte Carlo method or approximation of light\'s rays of a surface.', 'link'),
    new Project('Replic', 'A CI / CD project creator that create a mirror of a project. It create a basic Github Actions workflow, and can be customized to add contributors, files to the projet.', 'link'),
    new Project('Star Worst', 'AR Project, where user is immersed in the death star scene of first Star Wars film using HTC Tracker.', 'link')
  ]

  return (
    <>
      <PageButton page="/">HOME PAGE</PageButton>
      <h1>ME AS A PERSON</h1>
      <a>Hello, my name is Alexandre Franquet, self-nicknamed Miouzora, I’m 20. I’m a french student, who’s currently studying at Epitech school. I’m a developper who works to be a game developer one day.</a>
      <h1>PROUD OF</h1>
      <table>
        {projects.map((project: Project) => {
          return (
            <td key={project.name}>
              <tr>{project.name}</tr>
              <tr>{project.description}</tr>
              <tr>{project.link}</tr>
            </td>
          )
        })}
      </table>
      <table>
        <tr>
          <td>
            <h1>CONTACT</h1>
          </td>
          <td>
            <h1>Discord</h1>
          </td>
          <td>
            <h1>Email</h1>
          </td>
          <td>
            <h1>Linkedin</h1>
          </td>
        </tr>
      </table>
      <h1 className="text-with-blur">azeazeazeaze</h1>
    </>
  )
}
