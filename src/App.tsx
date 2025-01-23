import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import icon from "./assets/icon.png"
import reactIcon from "./assets/react.svg"
import nodeIcon from "./assets/node.svg"
import mongoIcon from "./assets/mongodb.svg"
import typeIcon from "./assets/typescript.svg"
import javaIcon from "./assets/java.svg"
import gitIcon from "./assets/github.svg"
import lkIcon from "./assets/linkedin.svg"
import gmailIcon from "./assets/gmail.svg"
import instaIcon from "./assets/instagram.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
        <div className='card_profile_picture'>
          <img src={icon} alt="" />
        </div>
        <div className='card_profile_info'>
          <h1>Artur Raimundi</h1>
          <p>Fullstack web developer</p>
        </div>
      </div>
      <div className='card'>
        <div className='card_stacks'>
          <h2>Interests</h2>
          <div className='tecnologies'>
            <div className='tec_picture'>
              <img src={reactIcon} alt="" />
            </div>
            <div className='tec_picture'>
              <img src={nodeIcon} alt="" />
            </div>
            <div className='tec_picture'>
              <img src={mongoIcon} alt="" />
            </div>
            <div className='tec_picture'>
              <img src={typeIcon} alt="" />
            </div>
            <div className='tec_picture'>
              <img src={javaIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className='sec-two'>
        <div className='card_stacks'>
          <h2>Find me</h2>
          <div className='projects'>
            <div className='project'>
              <div className='proj-img'>
              <a href="github.com/arturraimundi"><img src={gitIcon} alt="" /></a>
              </div>
              <button onClick={() => window.location.href = 'https://github.com/arturraimundi'}>Repositories</button>
            </div>
            <div className='project'>
              <div className='proj-img'>
              <a href="https://br.linkedin.com/in/artur-francisco-raimundi-de-quadros-0ba350199?trk=people-guest_people_search-card"><img src={lkIcon} alt="" /></a>
              </div>
              <button onClick={() => window.location.href = 'https://br.linkedin.com/in/artur-francisco-raimundi-de-quadros-0ba350199?trk=people-guest_people_search-card'}>Linkedin</button>
            </div>
            <div className='project'>
              <div className='proj-img'>
              <a href="https://instagram.com/artur_raimundi"><img src={instaIcon} alt="" /></a>
              </div>
              <button onClick={() => window.location.href = 'https://instagram.com/artur_raimundi'}>Instagram</button>
            </div>
            <div className='project'>
              <div className='proj-img'>
              <a href="github.com/arturraimund"><img src={gmailIcon} alt="" /></a>
              </div>
              <button onClick={() => window.location.href = 'https://x.com/arturraimundi'}>Email</button>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default App
