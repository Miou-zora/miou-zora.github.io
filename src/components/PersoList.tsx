import React from 'react'
import Triangle, { Direction } from './Triangle'

function DisplayPersoExperience(props: { persoExperience: string, reverse: boolean }): JSX.Element {
  const persoExperienceTriangle = <Triangle
    direction={ props.reverse ? Direction.Left : Direction.Right }
    width={50}
    height={50}
    fill='transparent'
    stroke='white'
    strokeWidth={2} />

  if (!props.reverse) {
    return (
      <table>
        <td style={{ verticalAlign: 'middle' }}>
          {persoExperienceTriangle}
        </td>
        <td>
          <div>
            <p style={{ fontSize: 'min(5vw, 1.7rem)', marginLeft: '50px' }}>{props.persoExperience}</p>
          </div>
        </td>
      </table>
    )
  } else {
    return (
      <table>
        <td>
          <div>
            <p style={{ fontSize: 'min(5vw, 1.7rem)', textAlign: 'right', marginRight: '50px' }}>{props.persoExperience}</p>
          </div>
        </td>
        <td style={{ verticalAlign: 'middle' }}>
          {persoExperienceTriangle}
        </td>
      </table>
    )
  }
}

export default function PersoList(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const persoExperiences: string[] = [
    'Web2Day 2023 Volunteer',
    'DevFest 2023 Volunteer',
    'GGJ 2023 Participation',
    'DevFest 2021 Volunteer'
  ]
  const layers: JSX.Element[] = []

  for (let i = 0; i < persoExperiences.length; i++) {
    if (i % 2 === 1) {
      layers.push(
        <div key={i} style={{ display: 'flex', justifyContent: 'right', marginRight: 'min(1vw, 10rem)' }}>
          <DisplayPersoExperience persoExperience={persoExperiences[i]} reverse={i % 2 === 1} />
        </div>
      )
    } else {
      layers.push(
        <div key={i} style={{ marginLeft: 'min(1vw, 10rem)' }}>
          <DisplayPersoExperience persoExperience={persoExperiences[i]} reverse={i % 2 === 1} />
        </div>
      )
    }
  }

  return (
    <div>
      {layers}
    </div>
  )
}
