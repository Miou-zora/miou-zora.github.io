import React from 'react'

export enum Direction {
  Up,
  Down,
  Left,
  Right,
}

export default function Triangle(props: { direction: Direction, width: number, height: number, fill: string, stroke: string, strokeWidth: number }): JSX.Element {
  switch (props.direction) {
    case Direction.Up:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="62" viewBox="0 0 70 62" fill="none">
          <g filter="url(#filter0_f_59_163)">
            <path d="M35.866 13.5L35 12L34.134 13.5L13.3494 49.5L12.4833 51L14.2154 51L55.7846 51L57.5167 51L56.6506 49.5L35.866 13.5Z" stroke="white" strokeWidth="2"/>
          </g>
          <path d="M35.866 13.5L35 12L34.134 13.5L13.3494 49.5L12.4833 51L14.2154 51L55.7846 51L57.5167 51L56.6506 49.5L35.866 13.5Z" stroke="white" strokeWidth="2"/>
          <defs>
            <filter id="filter0_f_59_163" x="0.751293" y="0" width="68.4974" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_59_163"/>
            </filter>
          </defs>
        </svg>
      )
    case Direction.Down:
      return (<svg xmlns="http://www.w3.org/2000/svg" width="70" height="62" viewBox="0 0 70 62" fill="none">
        <g filter="url(#filter0_f_59_19)">
          <path d="M34.134 48.5L35 50L35.866 48.5L56.6506 12.5L57.5167 11L55.7846 11L14.2154 11L12.4833 11L13.3494 12.5L34.134 48.5Z" stroke="white" strokeWidth="2"/>
        </g>
        <path d="M34.134 48.5L35 50L35.866 48.5L56.6506 12.5L57.5167 11L55.7846 11L14.2154 11L12.4833 11L13.3494 12.5L34.134 48.5Z" stroke="white" strokeWidth="2"/>
        <defs>
          <filter id="filter0_f_59_19" x="0.751295" y="0" width="68.4974" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_59_19"/>
          </filter>
        </defs>
      </svg>
      )
    case Direction.Left:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="70" viewBox="0 0 62 70" fill="none">
          <g filter="url(#filter0_f_59_23)">
            <path d="M13.5 34.134L12 35L13.5 35.866L49.5 56.6506L51 57.5167L51 55.7846L51 14.2154L51 12.4833L49.5 13.3494L13.5 34.134Z" stroke="white" strokeWidth="2"/>
          </g>
          <path d="M13.5 34.134L12 35L13.5 35.866L49.5 56.6506L51 57.5167L51 55.7846L51 14.2154L51 12.4833L49.5 13.3494L13.5 34.134Z" stroke="white" strokeWidth="2"/>
          <defs>
            <filter id="filter0_f_59_23" x="0" y="0.751282" width="62" height="68.4974" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_59_23"/>
            </filter>
          </defs>
        </svg>)
    default:
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="62" height="70" viewBox="0 0 62 70" fill="none">
          <g filter="url(#filter0_f_59_26)">
            <path d="M48.5 35.866L50 35L48.5 34.134L12.5 13.3494L11 12.4833L11 14.2154L11 55.7846L11 57.5167L12.5 56.6506L48.5 35.866Z" stroke="white" strokeWidth="2"/>
          </g>
          <path d="M48.5 35.866L50 35L48.5 34.134L12.5 13.3494L11 12.4833L11 14.2154L11 55.7846L11 57.5167L12.5 56.6506L48.5 35.866Z" stroke="white" strokeWidth="2"/>
          <defs>
            <filter id="filter0_f_59_26" x="0" y="0.751282" width="62" height="68.4974" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="5" result="effect1_foregroundBlur_59_26"/>
            </filter>
          </defs>
        </svg>
      )
  }
}
