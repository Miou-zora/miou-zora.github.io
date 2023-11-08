import React from 'react'
import PageButton from '../components/PageButton'
import '../styles/Globals.css'
import styles from './Home.module.css'

export default function HomePage(): JSX.Element {
  console.log(styles.test)
  return (
    <div>
      <h3 className={styles.workInProgress}>Work in progress...</h3>
      <h1 className={styles.miouzora}>MIOUZORA</h1>
      <PageButton page="/done">DONE PAGE</PageButton>
      <PageButton page="/me">ME PAGE</PageButton>
      <PageButton page="/todo">TODO PAGE</PageButton>
    </div>
  )
}
