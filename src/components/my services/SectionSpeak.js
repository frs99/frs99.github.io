import React from 'react'

import { Routes, Route, Link } from "react-router-dom";

import LinkSrv from './LinkSrv';
import Profile from '../../media/profile.jpg';
function SpeakSrv(){
  return(
    <section className='box-services m-c'>
      <div className='title'>
          <h1>My services</h1>
          <div></div>
      </div>

      <div className='box-speak m-c d-f-c'>
        <div className='img-profile'>
          <img src={Profile}></img>
        </div>
        <p className='speak'>
        welcome<p></p>
        I am Fares. You may have some know things about me from a page about me, and I am glad that you are now on this page.<p></p>
        And most likely you are interested in working together.<p></p>
        I am happy to tell you that we can work together within the limits of services that I can provide for you.<p></p>
        You can see my portfolio and what I do, and you can view the business policy and how it is, and then you can contact me from the contact button.<p></p>
        </p>
      </div>

      <div className='box-link-srv d-f-c to-space-between m-c'>
      <Link to='/portfolio/' className='a-srv'>
        <LinkSrv
            title = "Portfolio"
            info = "See my work and what I can do."
          />
      </Link>
        
      <Link to='#' className='a-srv'>
        <LinkSrv
          title = "Business Policy"
          info = "How do we agree And the way it works?"
        />
      </Link>

      <Link to='#' className='a-srv'>
        <LinkSrv
          title = "Contact"
          info = "how do we communicate and where?"
        />
      </Link>
      </div>
    </section>
  )
}

export default SpeakSrv;