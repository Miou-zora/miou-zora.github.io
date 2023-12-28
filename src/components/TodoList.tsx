import React from 'react'
import { Project } from '../types/Types'
import ProjectDisplay from '../components/ProjectDisplay'
import styles from './TodoList.module.css'

export default function TodoList(): JSX.Element {
  const projects: Project[] = [
    new Project('Raytracer', `### __Markdown__ *example*
*Implementation* of a Raytracer using Monte Carlo method or approximation of light's rays of a surface.
    `),
    new Project('Replic', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie sapien neque, quis consectetur ligula tincidunt pharetra. Nulla facilisi. Cras faucibus nisi condimentum aliquet blandit. Nullam nunc nisi, congue sit amet bibendum ac, pellentesque in ligula. Sed euismod dolor id massa fermentum finibus. Morbi tristique laoreet sollicitudin. In bibendum ac nibh eu hendrerit. Mauris quam purus, tempus vitae arcu sit amet, blandit porttitor augue. Nullam vitae congue augue. Donec vestibulum tortor turpis, vel fermentum nisl consequat eu. Etiam at scelerisque felis. Phasellus semper nec magna mollis consectetur. Aliquam at dui vestibulum, hendrerit arcu ac, posuere sem. Fusce rutrum tortor id lectus iaculis, vehicula lacinia ligula vulputate. Maecenas laoreet nisi eget dolor porta, eget eleifend turpis tristique. Vivamus imperdiet mi lacus, a viverra est consequat sed.'),
    new Project('Star Worst', 'AR Project, where user is immersed in the death star scene of first Star Wars film using HTC Tracker.')
  ]
  const [selectedProject, setSelectedProject] = React.useState(projects[0])

  return (
    <div style={{ display: 'grid' }}>
      <div style={{ gridColumn: '1', marginTop: '10vh' }}>
        {projects.map((project: Project) => {
          return (
            <div className={styles.selectableProject} key={project.name}>
              <a onClick={() => { setSelectedProject(project) }}><p>{project.name}</p></a>
            </div>
          )
        })}
      </div>
      <div style={{ gridColumn: '2' }}>
        <div style={{ margin: '5vw 5vw' }}>
          <ProjectDisplay project={selectedProject} direction='Right' />
        </div>
      </div>
    </div>
  )
}
