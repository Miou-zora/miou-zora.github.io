import React from 'react'
import styles from './PageButton.module.css'
import Triangle, { TriangleDirection } from './Triangle'

export default function PageButton(props: { children: any, page: string, direction: TriangleDirection }): JSX.Element {
  if (TriangleDirection.Left === props.direction) {
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
  } else if (TriangleDirection.Down === props.direction) {
    return (
      <div className={styles.button}>
        <a href={props.page}>
          <table>
            <td>
              <tr>
                {props.children}
              </tr>
              <tr style={{ justifyContent: 'center' }}>
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
  } else if (TriangleDirection.Up === props.direction) {
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
