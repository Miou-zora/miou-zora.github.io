import React from 'react'
import PersoList from './PersoList'

export default function PersoExp(): JSX.Element {
  return (
    <div>
      <h1 style={{ marginRight: '4vw', textAlign: 'right' }}>PERSONAL EXPERIENCE</h1>
      <div style={{ margin: '20px' }}>
        <PersoList />
      </div>
    </div>
  )
}
