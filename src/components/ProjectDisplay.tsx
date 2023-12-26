import React from 'react'
import { type Direction, type Project } from '../types/Types'

export default function ProjectDisplay(props: { project: Project, direction: Direction }): JSX.Element {
  return (
    <div>
      <h2 style={{ textAlign: (props.direction === 'Right' ? 'right' : 'left') }}>{ props.project.name }</h2>
      <div>
        <p>{ props.project.mdDescription }</p>
      </div>
    </div>
  )
}
