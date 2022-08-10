import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import logo from '../media/first-logo.png'

function Header(){
  return(
    <header>
      <div className="bar">
        <div className="navbar">
          
          {/* for logo */}
          <div className="logo link d-f-c m-c">
            <img src={logo}></img>
          </div>
          {/* icons the responsive */}
          <div className="resp-nav">
            {/* icon open */}
            <i className="fas fa-bars" />
            {/* icon close */}
            <i className="fas fa-times d-n" />
          </div>

          {/* for lists*/}
          <div className="nav-navbar d-f-c m-c to-space-between">
            <nav>
              <ul className="ul-navbar">
                <li className="li-navbar"><Link to='/' className="a-navbar">Home</Link></li>
                <li className="li-navbar"><Link to='./About' className="a-navbar">About me</Link></li>
                <li className="li-navbar"><Link to='./Services' className="a-navbar">My servies</Link></li>
                <li className="li-navbar"><Link to='#' className="a-navbar">My portfolio</Link></li>
              </ul>
            </nav>

            {/* for other object */}
            <nav>
              <Link to='#' className="btn-a">contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header