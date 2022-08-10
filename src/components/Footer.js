import React from 'react'


function Footer(){
  return(
    <footer className='m-c footer'>
      <section className='d-f-c to-space-between m-c footer-box'>
        <div className='copyright'>
          <p>All Rights Reserved - <a href="https://frscodes.github.io/copyright/" class="copyright">FrsCodes 2021 ©</a></p>
        </div>

        <div className="other-link">
            <ul className='d-f-c to-space-between'>
                <li><a className="bzns" href="#">Business Policy</a></li>
                <li><a className="contactme" href="#">Support Me</a></li>
                <li><a className="contactme" href="#">Contact Me</a></li>
                <a href="https://github.com/frscodes/frscodes.github.io" target="_blank"><p className="version">V4</p></a>
            </ul>
        </div>

      </section>
    </footer>
  )
}

export default Footer