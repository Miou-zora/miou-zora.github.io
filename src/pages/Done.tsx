import React from 'react'
import PageButtonWithText from '../components/PageButtonWithText'
import { Direction } from '../components/Triangle'

export default function DonePage(): JSX.Element {
  return (
    <>
      <PageButtonWithText page="/" direction={Direction.Right} text='HOME'/>
      <h1>DONE PAGE</h1>
    </>
  )
}
