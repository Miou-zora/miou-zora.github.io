import React from 'react'
import PageButton from '../components/PageButton'

class Project {
  name: string
  mdDescription: string
  constructor(
    name: string,
    mdDescription: string
  ) {
    this.name = name
    this.mdDescription = mdDescription
  }
}

export default function ToDoPage(): JSX.Element {
  const projects: Project[] = [
    new Project('Raytracer', 'Implementation of a Raytracer using Monte Carlo method or approximation of light\'s rays of a surface.'),
    new Project('Replic', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie sapien neque, quis consectetur ligula tincidunt pharetra. Nulla facilisi. Cras faucibus nisi condimentum aliquet blandit. Nullam nunc nisi, congue sit amet bibendum ac, pellentesque in ligula. Sed euismod dolor id massa fermentum finibus. Morbi tristique laoreet sollicitudin. In bibendum ac nibh eu hendrerit. Mauris quam purus, tempus vitae arcu sit amet, blandit porttitor augue. Nullam vitae congue augue. Donec vestibulum tortor turpis, vel fermentum nisl consequat eu. Etiam at scelerisque felis. Phasellus semper nec magna mollis consectetur. Aliquam at dui vestibulum, hendrerit arcu ac, posuere sem. Fusce rutrum tortor id lectus iaculis, vehicula lacinia ligula vulputate. Maecenas laoreet nisi eget dolor porta, eget eleifend turpis tristique. Vivamus imperdiet mi lacus, a viverra est consequat sed.'),
    new Project('Star Worst', 'AR Project, where user is immersed in the death star scene of first Star Wars film using HTC Tracker.')
  ]
  const [selectedProject, setSelectedProject] = React.useState(projects[0])
  return (
    <>
      <PageButton page="/">HOME PAGE</PageButton>
      <h1>TODO PAGE</h1>
      <table>
        <td width={100}>
          {projects.map((project: Project) => {
            return (
              <tr key={project.name}>
                <a onClick={() => { setSelectedProject(project) }}>{project.name}</a>
              </tr>
            )
          })}
        </td>
        <td>
          <tr>
            <h1>{selectedProject.name}</h1>
          </tr>
          <tr>
            <p>{selectedProject.mdDescription}</p>
          </tr>
        </td>
      </table>
    </>
  )
}
