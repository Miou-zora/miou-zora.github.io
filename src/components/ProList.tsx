import React from 'react'
import Triangle, { Direction } from './Triangle'

class ProExperience {
  job: string
  company: string
  jobState: string
  date: { start: string, end: string }
  techs: string[]

  constructor(job: string, company: string, jobState: string, date: { start: string, end: string }, techs: string[]) {
    this.job = job
    this.company = company
    this.jobState = jobState
    this.date = date
    this.techs = techs
  }
}

function DisplayProExperience(props: { proExperience: ProExperience }): JSX.Element {
  // const triangle: JSX.Element = <Triangle
  //   direction={ Direction.Right }
  //   width={40}
  //   height={40}
  //   fill='transparent'
  //   stroke='white'
  //   strokeWidth={2} />

  // make triangle responsive
  const [triangle, setTriangle] = React.useState(<Triangle
    direction={Direction.Right}
    width={Math.min(window.innerWidth / 20, 40)}
    height={Math.min(window.innerWidth / 20, 40)}
    fill='transparent'
    stroke='white'
    strokeWidth={2} />)
  React.useEffect(() => {
    const handleResize = (): void => {
      setTriangle(<Triangle
        direction={Direction.Right}
        width={Math.min(window.innerWidth / 20, 40)}
        height={Math.min(window.innerWidth / 20, 40)}
        fill='transparent'
        stroke='white'
        strokeWidth={2} />)
    }
    window.addEventListener('resize', handleResize)
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  return (
    <table>
      <tr>
        <td>
          <div style={{ marginRight: 'min(3vw, 2rem)' }}>
            {triangle}
          </div>
        </td>
        <td>
          <p style={{ fontSize: 'min(6vw, 45px)', margin: 'auto' }}>{props.proExperience.job}</p>
        </td>
      </tr>
      <tr>
        <td/>
        <td>
          <p style={{ margin: 'auto' }}>{props.proExperience.company} · {props.proExperience.jobState}</p>
          <p style={{ margin: 'auto' }}>{props.proExperience.date.start} · {props.proExperience.date.end}</p>
          <table style={{ margin: '0 min(2vw, 40px)' }}>
            <td>
              <p style={{ marginRight: '30px' }}>Techs:</p>
            </td>
            <td>
              <p>{props.proExperience.techs.join(' · ')}</p>
            </td>
          </table>
        </td>
      </tr>
    </table>
  )
}

export default function ProList(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const proExperiences: ProExperience[] = [
    new ProExperience(
      'Fullstack Developer',
      'OPEN',
      'Intership',
      { start: '2022-06', end: '2022-12' },
      ['Docker', 'Agile methods', 'Full-stack', 'JIRA', 'GitLab', 'Java', 'Vue.js', 'Spring', 'JavaServer Pages (JSP)']
    )]
  return (
    <div style={{ margin: '20px' }}>
      {proExperiences.map((proExperience, index) => {
        return (
          <div key={index}>
            <DisplayProExperience proExperience={proExperience} />
          </div>
        )
      })}
    </div>
  )
}
