import React from 'react'
import PageButtonWithText from '../components/PageButtonWithText'
import { TriangleDirection } from '../components/Triangle'
import TodoList from '../components/TodoList'

export default function ToDoPage(): JSX.Element {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', display: 'grid', gridTemplateColumns: '2fr 15fr', gridTemplateRows: '2fr 15fr' }}>
      <div style={{ width: '100%', gridColumn: '1 / 3', gridRow: '1', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
        <h1>TODO</h1>
      </div>
      <div style={{ height: '100%', gridColumn: '1', gridRow: '1 / 3', alignItems: 'center', display: 'flex' }}>
        <PageButtonWithText page="/" direction={TriangleDirection.Left} text='HOME'/>
      </div>
      <div style={{ gridColumn: '2', gridRow: '2' }}>
        <TodoList />
      </div>
    </div>
  )
}
