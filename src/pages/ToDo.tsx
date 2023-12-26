import React from 'react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PageButtonWithText from '../components/PageButtonWithText'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Direction } from '../components/Triangle'

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedProject, setSelectedProject] = React.useState(projects[0])
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', display: 'grid', gridTemplateColumns: '2fr 15fr', gridTemplateRows: '2fr 15fr' }}>
      <div style={{ width: '100%', gridColumn: '1 / 3', gridRow: '1', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <h1>TODO</h1>
      </div>
      <div style={{ height: '100%', gridColumn: '1', gridRow: '1 / 3', alignItems: 'center', display: 'flex' }}>
        <PageButtonWithText page="/" direction={Direction.Left} text='HOME'/>
      </div>
      <div style={{ gridColumn: '2', gridRow: '2' }}>
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
      </div>
    </div>
  )
}
