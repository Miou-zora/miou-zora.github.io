import React from 'react'

export default function PageButton(props: { children: any, page: string }): JSX.Element {
  return (
    <>
      <a href={props.page}>
        <button onClick={() => { }}>
          {props.children}
        </button>
      </a>
    </>
  )
}
