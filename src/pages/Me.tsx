import React from 'react'
import { TriangleDirection } from '../components/Triangle'
import style from './Me.module.css'
import PageButtonWithText from '../components/PageButtonWithText'
import MeAsAPerson from '../components/MeAsAPerson'
import ProudOf from '../components/ProudOf'
import ProExp from '../components/ProExp'
import Contact from '../components/Contact'
import PersoExp from '../components/PersoExp'

export default function MePage(): JSX.Element {
  return (
    <>
      <div className={style.middleButton}>
        <PageButtonWithText page="/" direction={TriangleDirection.Up} text="HOME" />
      </div>
      <div style={{ margin: '0 2vw' }}>
        <MeAsAPerson />
        <ProudOf />
        <ProExp />
        <PersoExp />
        <Contact />
      </div>
    </>
  )
}
