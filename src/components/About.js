import React from 'react';

import Logo from '../media/big-logo.png';

import Social from './social';
import Speak from './about/speak';
import Thanks from './SectionThanks';
// import UpBtn from './UpBtn';


function About(){
  document.title = 'FrsCodes - About'
  document.body.id = "page-about"
  return(
    <main className='main-about'>
      <section className='box-hi d-f-c m-c'>
        <div>
          <div className='min-info'>
            <h1 className='hi'>Hi</h1>
            <p className='im'>Im</p>
            <h2 className='frscodes'>FrsCodes</h2>
            <p className='job'>Website developer and design lover</p>
          </div>
          <div className='social-about d-f-c to-space-between'>
            <div className='logo-about d-f-c to-center'>
              <img src={Logo}></img>
            </div>

            <Social
                icon="linkedin"
                link="https://www.linkedin.com/in/frscodes/"
              />

              <Social
                icon="github-square"
                link="https://github.com/faresdjefaflia"
              />

              <Social
                icon="behance-square"
                link="https://www.behance.net/frscodes"
              />

              <Social
                icon="twitter-square"
                link="https://twitter.com/frscodes"
              />
          </div>
        </div>
      </section>
      <Speak />
      <Thanks />
    </main>
  )
}

export default About