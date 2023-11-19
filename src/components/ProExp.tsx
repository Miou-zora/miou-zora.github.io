import React from 'react'
import ProList from './ProList'
import styles from './ProExp.module.css'

export default function ProExp(): JSX.Element {
  return (
    <div>
      <h1 className={styles.title}>PROFESSIONAL EXPERIENCE</h1>
      <div className={styles.content}>
        <ProList />
      </div>
    </div>
  )
}
