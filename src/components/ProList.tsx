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
  return (
    <table>
      <td>
        <Triangle
          direction={ Direction.Right }
          width={50}
          height={50}
          fill='transparent'
          stroke='white'
          strokeWidth={2} />
      </td>
      <td>
        <div>
          <p>{props.proExperience.job}</p>
          <p>{props.proExperience.company} · {props.proExperience.jobState}</p>
          <p>{props.proExperience.date.start} · {props.proExperience.date.end}</p>
          <table>
            <td>
              <p>Techs:</p>
            </td>
            <td>
              <Triangle
                direction={ Direction.Right }
                width={25}
                height={25}
                fill='transparent'
                stroke='white'
                strokeWidth={2} />
            </td>
            <td>
              <p>{props.proExperience.techs.join(' · ')}</p>
            </td>
          </table>
        </div>
      </td>
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
      ['Docker', 'Agile methods', 'Full-stack', 'JIRA', 'GitLab', 'Java', 'Vue.js', 'JavaScript', 'Framework Spring', 'JavaServer Pages (JSP)']
    )]
  return (
    <div>
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
