import React from 'react'


function Social(prps){
  return(
      <a href={prps.link} target="_blank">
        <div className='social d-f-c to-center'>
            <i class={`fab fa-${prps.icon}`}></i>
        </div>
      </a>
  )
}

export default Social