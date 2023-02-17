import logo from './images/logo.svg'
import React from 'react'
import './styles.css'
import mockups from './images/illustration-mockups.svg'

export const Top = () => {
  return (
    <div className='top'>
        <nav>
            <img src={logo} alt="logo icon" />
            <button>Try it free</button>
        </nav>

        <section className='presentation'>
            <div className='presentation-left'>
                <h1>Build The Community Your Fans Will love</h1>
                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <button>Get Started For Free</button>
            </div>
            <img src={mockups} alt="" />
        </section>
    </div>
  )
}
