import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import ListSrv from './Listsrv';

function ListServices(){
  return(
    <section className='list-srv m-c'>
      <div className='title'>
        <h1>What can i</h1>
        <div></div>
      </div>

      <Link to='#' className='a-srv'>
        <ListSrv
          title = "Website programming"
          info = "I can convert web page design To real interaction on web and mobile browsers"
        />
      </Link>
      
      <Link to='#' className='a-srv'>
        <ListSrv
          title = "Sites Design UX/UI"
          info = "I can design interactive pages and take care of user interfaces And attention to the user experience."
        />
      </Link>

      <Link to='#' className='a-srv'>
        <ListSrv
          title = "Logo Design"
          info = "I can design visual identities and transform ideas To a digital design that reflects the identity of your activity."
        />
      </Link>

    </section>
  )
}

export default ListServices