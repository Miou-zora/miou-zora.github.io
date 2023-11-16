import React from 'react'
import styles from './PageButton.module.css'
import Triangle, { Direction } from './Triangle'

export default function PageButton(props: { children: any, page: string, direction: Direction }): JSX.Element {
  if (Direction.Left === props.direction) {
    return (
      <div className={styles.button}>
        <a href={props.page}>
          <table>
            <tr>
              <td>
                <Triangle
                  direction={ props.direction }
                  width={50}
                  height={50}
                  fill='transparent'
                  stroke='white'
                  strokeWidth={2} />
              </td>
              <td>
                {props.children}
              </td>
            </tr>
          </table>
        </a>
      </div>
    )
  } else if (Direction.Down === props.direction) {
    return (
      <div className={styles.button}>
        <a href={props.page}>
          <table>
            <td>
              <tr>
                {props.children}
              </tr>
              <tr style={{ justifyContent: 'center', display: 'flex' }}>
                <Triangle
                  direction={ props.direction }
                  width={50}
                  height={50}
                  fill='transparent'
                  stroke='white'
                  strokeWidth={2} />
              </tr>
            </td>
          </table>
        </a>
      </div>
    )
  } else if (Direction.Up === props.direction) {
    return (
      <div className={styles.button}>
        <a href={props.page}>
          <table>
            <td>
              <tr style={{ justifyContent: 'center', display: 'flex' }}>
                <Triangle
                  direction={ props.direction }
                  width={50}
                  height={50}
                  fill='transparent'
                  stroke='white'
                  strokeWidth={2} />
              </tr>
              <tr style={{ justifyContent: 'center' }}>
                {props.children}
              </tr>
            </td>
          </table>
        </a>
      </div>
    )
  } else {
    return (
      <div className={styles.button}>
        <a href={props.page}>
          <table>
            <tr>
              <td>
                {props.children}
              </td>
              <td>
                <Triangle
                  direction={ props.direction }
                  width={50}
                  height={50}
                  fill='transparent'
                  stroke='white'
                  strokeWidth={2} />
              </td>
            </tr>
          </table>
        </a>
      </div>
    )
  }
}
