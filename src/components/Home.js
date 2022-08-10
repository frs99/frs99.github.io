import React from 'react'

import Social from './social';


import bigLogo from '../media/big-logo.png';

function Main(){
  document.title = 'FrsCodes'
  document.body.id = "page-home"
  return(
    <main className='main-home'>
      <section className="big-logo p-c">
        <div>
          <img src = {bigLogo}></img>
        </div>
        <div className='full-social d-f-c to-space-between'>
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
      </section>
    </main>
  );
}

export default Main