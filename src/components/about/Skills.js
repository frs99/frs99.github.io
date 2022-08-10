import React from 'react'

function Skills(skl){
  return(
    <div className='skills d-f-c'>
      <div className='img-skills d-f-c to-center'>
        <img src={skl.img}></img>
      </div>
      <p>{skl.name}</p>
    </div>
  )
}

export default Skills