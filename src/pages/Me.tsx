import React from 'react'
import { Direction } from '../components/Triangle'
import style from './Me.module.css'
import PageButtonWithText from '../components/PageButtonWithText'
import ProList from '../components/ProList'
import PersoList from '../components/PersoList'

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
      <div className={style.middleButton}>
        <PageButtonWithText page="/" direction={Direction.Up} text="HOME"/>
      </div>
      <h1>ME AS A PERSON</h1>
      <p>Hello, my name is Alexandre Franquet, self-nicknamed Miouzora, I’m 20. I’m a french student, who’s currently studying at Epitech school. I’m a developper who works to be a game developer one day.</p>
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
      <h1>PROFESSIONAL EXPERIENCE</h1>
      <ProList/>
      <h1>PERSONAL EXPERIENCE</h1>
      <PersoList/>
      <table>
        <tr>
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
    </>
  )
}
