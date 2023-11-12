import React from 'react'
import PageButton from '../components/PageButton'
import { Direction } from '../components/Triangle'
import '../styles/Globals.css'
import styles from './Home.module.css'

export default function HomePage(): JSX.Element {
  return (
    <div>
      <h3 className={styles.workInProgress}>Work in progress...</h3>
      <h1 className={styles.miouzora}>MIOUZORA</h1>
      <div className={styles.leftButton}>
        <PageButton page="/done" direction={Direction.Left}><p>DONE PAGE</p></PageButton>
      </div>
      <div className={styles.bottomButton}>
        <PageButton page="/me" direction={Direction.Down}><p>ME PAGE</p></PageButton>
      </div>
      <div className={styles.rightButton}>
        <PageButton page="/todo" direction={Direction.Right}><p>TODO PAGE</p></PageButton>
      </div>
    </div>
  )
}
