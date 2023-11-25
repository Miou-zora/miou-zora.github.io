import React from 'react'
import Triangle, { Direction } from './Triangle'
import styles from './PersoList.module.css'

class PersoExperience {
  eventName: string
  personalStatus: string
  link: string

  constructor(eventName: string, personalStatus: string, link: string) {
    this.eventName = eventName
    this.personalStatus = personalStatus
    this.link = link
  }
}

function DisplayPersoExperience(props: { persoExperience: PersoExperience, reverse: boolean }): JSX.Element {
  // const persoExperienceTriangle = <Triangle
  //   direction={ props.reverse ? Direction.Left : Direction.Right }
  //   width={50}
  //   height={50}
  //   fill='transparent'
  //   stroke='white'
  //   strokeWidth={2} />

  const [persoExperienceTriangle, setPersoExperienceTriangle] = React.useState(<Triangle
    direction={ props.reverse ? Direction.Left : Direction.Right }
    width={Math.min(window.innerWidth / 15, 50)}
    height={Math.min(window.innerWidth / 15, 50)}
    fill='transparent'
    stroke='white'
    strokeWidth={2} />
  )

  React.useEffect(() => {
    const handleResize = (): void => {
      setPersoExperienceTriangle(<Triangle
        direction={ props.reverse ? Direction.Left : Direction.Right }
        width={Math.min(window.innerWidth / 15, 50)}
        height={Math.min(window.innerWidth / 15, 50)}
        fill='transparent'
        stroke='white'
        strokeWidth={2} />)
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  if (!props.reverse) {
    return (
      <table className={styles.ref}>
        <a href={props.persoExperience.link} target='_blank' rel='noreferrer'>
          <td style={{ verticalAlign: 'middle' }}>
            {persoExperienceTriangle}
          </td>
          <td>
            <div>
              <p style={{ fontSize: 'min(5vw, 32px)', marginLeft: '50px' }}>{props.persoExperience.eventName} {props.persoExperience.personalStatus}</p>
            </div>
          </td>
        </a>
      </table>
    )
  } else {
    return (
      <table className={styles.ref}>
        <a href={props.persoExperience.link} target='_blank' rel='noreferrer'>
          <td>
            <div>
              <p style={{ fontSize: 'min(5vw, 32px)', textAlign: 'right', marginRight: '50px' }}>{props.persoExperience.eventName} {props.persoExperience.personalStatus}</p>
            </div>
          </td>
          <td style={{ verticalAlign: 'middle' }}>
            {persoExperienceTriangle}
          </td>
        </a>
      </table>
    )
  }
}

export default function PersoList(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const persoExperiences: PersoExperience[] = [
    new PersoExperience('Web2Day 2023', 'Volunteer', 'https://web2day.co/'),
    new PersoExperience('DevFest 2023', 'Volunteer', 'https://devfest2023.gdgnantes.com/'),
    new PersoExperience('GGJ 2023', 'Participation', 'https://globalgamejam.org/'),
    new PersoExperience('DevFest 2021', 'Volunteer', 'https://devfest2021.gdgnantes.com/fr/')
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
