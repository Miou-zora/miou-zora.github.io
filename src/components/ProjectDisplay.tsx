import React from 'react'
import { type Direction, type Project } from '../types/Types'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ProjectDisplay(props: { project: Project, direction: Direction }): JSX.Element {
  return (
    <div>
      <h2 style={{ textAlign: (props.direction === 'Right' ? 'right' : 'left') }}>{ props.project.name }</h2>
      <div>
        <Markdown remarkPlugins={[remarkGfm]}>{ props.project.mdDescription }</Markdown>
      </div>
    </div>
  )
}
