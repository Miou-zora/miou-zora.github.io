import React from 'react'
import PageButton from '../components/PageButton'

export default function HomePage(): JSX.Element {
  return (
    <>
      <h1>MIOUZORA!</h1>
      <PageButton page="/done">DONE PAGE</PageButton>
      <PageButton page="/me">ME PAGE</PageButton>
      <PageButton page="/todo">TODO PAGE</PageButton>
    </>
  )
}
