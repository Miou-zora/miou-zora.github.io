import React from 'react'
import styles from './MeAsAPerson.module.css'

export default function MeAsAPerson(): JSX.Element {
  return (
    <div>
      <h1 className={styles.meAsAPerson}>ME AS A PERSON</h1>
      <div className={styles.textContainer}>
        <p className={styles.text}>Hello, my name is Alexandre Franquet, self-nicknamed Miouzora, I’m 20. I’m a french student, who’s currently studying at Epitech school. I’m a developper who works to be a game developer one day.</p>
      </div>
    </div>
  )
}
