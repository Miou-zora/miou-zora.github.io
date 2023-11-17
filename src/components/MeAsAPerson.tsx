import React from 'react'

export default function MeAsAPerson(): JSX.Element {
  return (
    <div>
      <h1 style={{ marginLeft: '4vw', fontSize: 'min(7vw, 3.5rem)' }}>ME AS A PERSON</h1>
      <div style={{ minWidth: '50vw', maxWidth: '600px', margin: '4rem auto' }}>
        <p style={{ textAlign: 'center', fontWeight: '100' }}>Hello, my name is Alexandre Franquet, self-nicknamed Miouzora, I’m 20. I’m a french student, who’s currently studying at Epitech school. I’m a developper who works to be a game developer one day.</p>
      </div>
    </div>
  )
}
