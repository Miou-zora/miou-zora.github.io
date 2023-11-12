import React from 'react'
import PageButton from '../components/PageButton'
import { Direction } from '../components/Triangle'

export default function DonePage(): JSX.Element {
  return (
    <>
      <PageButton page="/" direction={Direction.Right}>HOME PAGE</PageButton>
      <h1>DONE PAGE</h1>
    </>
  )
}
