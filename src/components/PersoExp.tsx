import React from 'react'
import PersoList from './PersoList'
import styles from './PersoExp.module.css'

export default function PersoExp(): JSX.Element {
  return (
    <div>
      <h1 className={styles.title}>PERSONAL EXPERIENCE</h1>
      <div className={styles.content}>
        <PersoList />
      </div>
    </div>
  )
}
