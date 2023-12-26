export class Project {
  name: string
  mdDescription: string
  constructor(
    name: string,
    mdDescription: string
  ) {
    this.name = name
    this.mdDescription = mdDescription
  }
}

export type Direction = 'Left' | 'Right' | 'Up' | 'Down'
