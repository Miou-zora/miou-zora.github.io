import React from 'react'
import DiscordLogo from '../assets/DiscordLogo.png'
import GmailLogo from '../assets/GmailLogo.png'
import LinkedinLogo from '../assets/LinkedinLogo.png'
import './Contact.css'

function copyMyDiscord(): void {
  void navigator.clipboard.writeText('miouzora')
  alert('You have copied my Discord tag to your clipboard!')
}

export default function Contact(): JSX.Element {
  return (
    <div style={{ display: 'flex', marginBottom: '20px', marginTop: '5%' }}>
      <div style={{ margin: 'auto' }}>
        <button onClick={ copyMyDiscord } style={{ justifyContent: 'center', backgroundColor: 'transparent', borderColor: 'transparent', cursor: 'pointer' }}>
          <img src={DiscordLogo}/>
        </button>
      </div>
      <div style={{ margin: 'auto' }}>
        <a href='https://www.linkedin.com/in/alexandre-franquet/' style={{ justifyContent: 'center' }}>
          <img src={LinkedinLogo}/>
        </a>
      </div>
      <div style={{ margin: 'auto' }}>
        <a href='mailto:alexandre.franquet@epitech.eu' style={{ justifyContent: 'center' }}>
          <img src={GmailLogo}/>
        </a>
      </div>
    </div>
  )
}
