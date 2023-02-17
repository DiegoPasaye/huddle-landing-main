import React from 'react'
import grow from './images/illustration-grow-together.svg'
import flowing from './images/illustration-flowing-conversation.svg'
import users from './images/illustration-your-users.svg'

export const Caracteristicas = () => {
  return (
    <div className='caracteristicas'>
        <div className='caracteristicas-divs'>
            <div className='caracteristicas-text'>
                <h2>Grow Together</h2>
                <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
            </div>
            <img src={grow} alt="grow image" />
        </div>

        <div className='caracteristicas-divs flowing'>
          <div className='caracteristicas-text'>
            <h2>Flowing Conversations</h2>
            <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
          </div>
          <img src={flowing} alt="flowing image" />
        </div>

        <div className='caracteristicas-divs'>
          <div className='caracteristicas-text'>
            <h2>Your Users</h2>
            <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
          </div>
          <img src={users} alt="users image" />
        </div>

        <div className='container-down'>
            <h2>Ready To Build Your Community?</h2>
            <button>Get Started For Free </button>
        </div>
    </div>

  )
}
