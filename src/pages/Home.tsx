import React from 'react'
import PageButtonWithText from '../components/PageButtonWithText'
import { Direction } from '../components/Triangle'
import '../styles/Globals.css'
import styles from './Home.module.css'

export default function HomePage(): JSX.Element {
  return (
    <div>
      <h3 className={styles.workInProgress}>Work in progress...</h3>
      <h1 className={styles.miouzora}>MIOUZORA</h1>
      <div className={styles.leftButton}>
        <PageButtonWithText page="/done" direction={Direction.Left} text='DONE'/>
      </div>
      <div className={styles.bottomButton}>
        <PageButtonWithText page="/me" direction={Direction.Down} text='ME'/>
      </div>
      <div className={styles.rightButton}>
        <PageButtonWithText page="/todo" direction={Direction.Right} text='TODO'/>
      </div>
    </div>
  )
}
