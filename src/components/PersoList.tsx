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
  const persoExperienceText = <div>
    <p>{props.persoExperience}</p>
  </div>

  if (!props.reverse) {
    return (
      <table>
        <td>
          {persoExperienceTriangle}
        </td>
        <td>
          {persoExperienceText}
        </td>
      </table>
    )
  } else {
    return (
      <table>
        <td>
          {persoExperienceText}
        </td>
        <td>
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
  return (
    <div>
      {persoExperiences.map((persoExperience, index) => {
        return (
          <div key={index}>
            <DisplayPersoExperience persoExperience={persoExperience} reverse={index % 2 === 1} />
          </div>
        )
      })}
    </div>
  )
}
