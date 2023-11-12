import React from 'react'

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export default function Triangle(props: { direction: Direction, width: number, height: number, fill: string, stroke: string, strokeWidth: number }): JSX.Element {
  const { direction, width, height, fill, stroke, strokeWidth } = props
  let points: string = ''
  switch (direction) {
    case Direction.Up:
      points = `0,${height} ${width},${height} ${width / 2},0`
      break
    case Direction.Down:
      points = `0,0 ${width},${0} ${width / 2},${height}`
      break
    case Direction.Left:
      points = `${width},0 ${width},${height} 0,${height / 2}`
      break
    case Direction.Right:
      points = `0,0 0,${height} ${width},${height / 2}`
      break
  }
  return (
    <svg width={width} height={height}>
      <defs>
        <filter id="white-shadow" x="0" y="0" width="100%" height="100%">
          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="5" />
          <feFlood result="colorOut" in="SourceGraphic" floodColor="white" />
          <feComposite in="colorOut" in2="blurOut" operator="in" />
          <feBlend in="SourceGraphic" />
        </filter>
      </defs>
      <polygon points={points} fill={fill} stroke={stroke} strokeWidth={strokeWidth} filter="url(#white-shadow)" />
    </svg>
  )
}
