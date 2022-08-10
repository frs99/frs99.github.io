import React from 'react'

function LinkSrv(link){
  return(
    <div className='link-srv'>
      <h1>{link.title}</h1>
      <p>{link.info}</p>
      <i class="fas fa-external-link-alt"></i>
    </div>
  )
}

export default LinkSrv;