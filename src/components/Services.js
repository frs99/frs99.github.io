import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import Speak from './my services/SectionSpeak';
import ListServices from './my services/SectionServices';
import Thanks from './SectionThanks';

import BigLogo from '../media/big-logo.png';
function Services(){
  document.title = 'FrsCodes - Services'
  document.body.id = "page-services"
  return(
    <main className='main-services'>
      
      <section className='d-f-c to-center srv-logo'>
        <img src={BigLogo}></img>
      </section>

      <Speak />
      <ListServices />
      <Thanks />
    </main>
  )
}

export default Services;