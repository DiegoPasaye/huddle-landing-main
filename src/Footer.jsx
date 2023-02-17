import React from 'react'
import logo from './images/logo.svg'
import tel from './images/icon-phone.svg'
import mail from './images/icon-email.svg'
import location from './images/icon-location.svg'
import fb from './images/icon-facebook.svg'
import tw from './images/icon-twitter.svg'
import ig from './images/icon-instagram.svg'

export const Footer = () => {
  return (
    <footer>

        <div className='first-section'>
            <img src={logo} alt="Logo image" />
            <div className='join'>
                <img src={location} alt="location logo" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>

            <div className='join'>
                <img src={tel} alt="phone icon" />
                <p>+1-543-123-4567</p>
            </div>

            <div className='join'>
                <img src={mail} alt="mail icon" />
                <p>example@huddle.com</p>
            </div>
        </div>

        <div className='footer-section'>
            <p>About Us</p>
            <p>What We Do</p>
            <p>FAQ</p>
        </div>

        <div className='footer-section'>
            <p>Career</p>
            <p>Blog</p>
            <p>Contact Us</p>
        </div>

        <div className='footer-icons-right'>
            <img src={fb} alt="facebook icon" />
            <img src={tw} alt="twitter icon" />
            <img src={ig} alt="instagram icon" />
        </div>
    </footer>
  )
}
