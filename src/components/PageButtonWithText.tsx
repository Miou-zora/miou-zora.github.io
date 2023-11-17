import React from 'react'
import { Direction } from './Triangle'
import PageButton from './PageButton'

export default function PageButtonWithText(props: { page: string, direction: Direction, text: string }): JSX.Element {
  if (props.direction === Direction.Left || props.direction === Direction.Right) {
    return (<PageButton page={props.page} direction={props.direction}>
      {props.text.split('').map((character, index) => {
        return (
          <div key={index}>
            <h3 style={{ textAlign: 'center', margin: '0.3em 10px' }}>{character}</h3>
          </div>
        )
      })}
    </PageButton>)
  } else {
    return (
      <PageButton page={props.page} direction={props.direction}>
        <h3 style={{ textAlign: 'center', margin: '2px', letterSpacing: '0.6em', marginRight: '-0.6em' }}>{props.text}</h3>
      </PageButton>
    )
  }
}
