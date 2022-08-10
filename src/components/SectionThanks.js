import React from 'react'

import Logo from '../media/first-logo.png';

function Thanks(){
  return(
    <section className='thanks m-c' >
      <h1>Thanks</h1>
      <p>
        Thank you for visiting my website and being on this page.<p></p>
        I really appreciate your time.<p></p>
        My greetings
      </p>
      <img src={Logo}></img>
    </section>
  )
}

export default Thanks