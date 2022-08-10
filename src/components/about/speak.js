import React from 'react'

import Profile from '../../media/profile.jpg';

import Skills from '../about/Skills';

function Speak(prps){
  return(
    <section className='box-about m-c'>
      <div className='title'>
          <h1>About me</h1>
          <div></div>
        </div>

        <div className='box-speak m-c d-f-c'>
          <div className='img-profile'>
            <img src={Profile}></img>
          </div>
          <p className='speak'>
          Hello, my name is Fares from Algeria and I am 22 years old.<p></p>
          I am a web developer, and I also enjoy designing interfaces and logos
          and learning everything .<p></p>
          I also push open source projects that help everyone.
          <p></p>
          I started learning programming from the phone and I do not own a computer<p></p>
          the programming for me is a love , and not just a job.<p></p>
          Today I am good at many thing 😎.
          </p>
        </div>

        <div className='title'>
          <h1>Skills</h1>
          <div></div>
        </div>

        <div className='box-speak m-c d-f-c'>
          <div className='img-profile'>
            <img src={Profile}></img>
          </div>
    
            <p className='speak'>
              I used to love to use the computer since my childhood, but unfortunately I did not have the money to buy a device.<p></p>
              I loved programming and design, but I couldn't do anything, However..<p></p>
              I slowly started learning programming by phone only.<p></p>
              until I bought a computer and started doing the thing I love.<p></p>
              These are some of the things I'm good at:
            </p>
        </div>

        <div className='box-skills d-f-c to-center'>
          <Skills
            name='HTML5'
            img='assets/img/icons/html-5.png'
          />

          <Skills
            name='CSS3'
            img='assets/img/icons/css-3.png'
          />

          <Skills
            name='JavaScript'
            img='assets/img/icons/js.png'
          />

          <Skills
            name='React'
            img='assets/img/icons/react.png'
          />

          <Skills
            name='Linux'
            img='assets/img/icons/linux.png'
          />

          <Skills
            name='Git'
            img='assets/img/icons/git.png'
          />

          <Skills
            name='Adobe Xd'
            img='assets/img/icons/xd.png'
          />

          <Skills
            name='Illustrator'
            img='assets/img/icons/illustrator.png'
          />

          <Skills
            name='Photoshop'
            img='assets/img/icons/photoshop.png'
          />

          <div className='skills d-f-c'>
            <div className='img-skills-wait d-f-c to-center'>
              <img src="assets/img/icons/time-left.png"></img>
            </div>
          </div>
        </div>
    </section>
  );
}
export default Speak