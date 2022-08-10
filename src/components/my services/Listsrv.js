import React from 'react'

function Listsrv(List){
  return( 
    <div>
      <div className='link-srv List-box-srv m-c'>
        <h1>{List.title}</h1>
        <p>{List.info}</p>
        <i class="fas fa-external-link-alt"></i>
      </div>
    </div>
  )
}

export default Listsrv