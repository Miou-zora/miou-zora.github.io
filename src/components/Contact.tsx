import React from 'react'
import DiscordLogo from '../assets/DiscordLogo.png'
import GmailLogo from '../assets/GmailLogo.png'
import LinkedinLogo from '../assets/LinkedinLogo.png'
import GithubLogo from '../assets/GithubLogo.png'
import styles from './Contact.module.css'
import './Contact.css'

function copyMyDiscord(): void {
  void navigator.clipboard.writeText('miouzora')
  alert('You have copied my Discord tag to your clipboard!')
}

export default function Contact(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button onClick={ copyMyDiscord } className={styles.discordButton}>
          <img src={DiscordLogo} className={styles.img}/>
        </button>
      </div>
      <div className={styles.button}>
        <a href='https://www.linkedin.com/in/alexandre-franquet/'>
          <img src={LinkedinLogo} className={styles.img}/>
        </a>
      </div>
      <div className={styles.button}>
        <a href='mailto:alexandre.franquet@epitech.eu'>
          <img src={GmailLogo} className={styles.img}/>
        </a>
      </div>
      <div className={styles.button}>
        <a href='https://github.com/Miou-zora'>
          <img src={GithubLogo} className={styles.img}/>
        </a>
      </div>
    </div>
  )
}
