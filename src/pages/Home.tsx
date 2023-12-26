import React from 'react'
import PageButtonWithText from '../components/PageButtonWithText'
import { TriangleDirection } from '../components/Triangle'
import '../styles/Globals.css'
import styles from './Home.module.css'

export default function HomePage(): JSX.Element {
  const [title, setTitle] = React.useState((window.innerWidth / window.innerHeight < 1) ? <h1 className={styles.mz}>MZ</h1> : <h1 className={styles.miouzora}>MIOUZORA</h1>)

  // If screen size ratio is too small, change title to MZ
  React.useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth / window.innerHeight < 1) {
        setTitle(<h1 className={styles.mz}>MZ</h1>)
      } else {
        setTitle(<h1 className={styles.miouzora}>MIOUZORA</h1>)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <div>
      {title}
      {/* <div className={styles.leftButton}>
        <PageButtonWithText page="/done" direction={Direction.Left} text='DONE'/>
      </div> */}
      <div className={styles.bottomButton}>
        <PageButtonWithText page="/me" direction={TriangleDirection.Down} text='ME'/>
      </div>
      {/* <div className={styles.rightButton}>
        <PageButtonWithText page="/todo" direction={Direction.Right} text='TODO'/>
      </div> */}
    </div>
  )
}
