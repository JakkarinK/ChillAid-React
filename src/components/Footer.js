import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-grid'>

          <article className='socials'>
            <a href="."><h3 className='topic'><span>C</span>hill<span>A</span>id</h3></a>
            <p>Scelerisque facilisis sapien turpis facilisis libero eu viverra purus dui ac leo sed vitae
              diam morbi sed nibh in eget dolor phasellus rhoncus odio morbi elit nunc id elit donec elementum
              <b><a href='.'> […]</a></b>
            </p>
            <div className='social-icons'>
              <ul>
                <li><a href='.'><i class='fab fa-facebook' /></a></li>
                <li><a href='.'><i class='fab fa-google-plus-g' /></a></li>
                <li><a href='.'><i class='fab fa-linkedin' /></a></li>
                <li><a href='.'><i class='fab fa-twitter' /></a></li>
                <li><a href='.'><i class='fab fa-vk' /></a></li>
              </ul>
            </div>
            {/* End social-icons */}
          </article>
          {/* End social */}

          <article className='quick-link'>
            <h3>Volutpat Metus Nullam</h3>
            <nav>
              <li><a href='.'>Sagittis leo morbi quis</a></li>
              <li><a href='.'>Nulla vehicula felis laoreet</a></li>
              <li><a href='.'>Pulvinar proin et eros ac</a></li>
              <li><a href='.'>Mi vulputate accumsan fusce</a></li>
              <li><a href='.'>At massa in sed tortor sit amet</a></li>
            </nav>
          </article>
          {/* End quick-link */}

          <article className='pic-link'>
            <h3>Tincidunt Ullamcorper</h3>
            <div className='pic-link-grid'>
              <a href='.'>
                <img src='https://via.placeholder.com/75' alt='75x75' />
                <div className='hover-pic'>
                  <p><b><i class="fa-solid fa-plus"></i></b></p>
                </div>
              </a>
              <a href='.'>
                <img src='https://via.placeholder.com/75' alt='75x75' />
                <div className='hover-pic'>
                  <p><b><i class="fa-solid fa-plus"></i></b></p>
                </div>
              </a>
              <a href='.'>
                <img src='https://via.placeholder.com/75' alt='75x75' />
                <div className='hover-pic'>
                  <p><b><i class="fa-solid fa-plus"></i></b></p>
                </div>
              </a>
              <a href='.'>
                <img src='https://via.placeholder.com/75' alt='75x75' />
                <div className='hover-pic'>
                  <p><b><i class="fa-solid fa-plus"></i></b></p>
                </div>
              </a>
              <a href='.'>
                <img src='https://via.placeholder.com/75' alt='75x75' />
                <div className='hover-pic'>
                  <p><b><i class="fa-solid fa-plus"></i></b></p>
                </div>
              </a>
              <a href='.'>
                <img src='https://via.placeholder.com/75' alt='75x75' />
                <div className='hover-pic'>
                  <p><b><i class="fa-solid fa-plus"></i></b></p>
                </div>
              </a>
              <a href='.'>
                <img src='https://via.placeholder.com/75' alt='75x75' />
                <div className='hover-pic'>
                  <p><b><i class="fa-solid fa-plus"></i></b></p>
                </div>
              </a>
              <a href='.'>
                <img src='https://via.placeholder.com/75' alt='75x75' />
                <div className='hover-pic'>
                  <p><b><i class="fa-solid fa-plus"></i></b></p>
                </div>
              </a>
              <a href='.'>
                <img src='https://via.placeholder.com/75' alt='75x75' />
                <div className='hover-pic'>
                  <p><b><i class="fa-solid fa-plus"></i></b></p>
                </div>
              </a>
            </div>
            {/* End pic-link-grid */}
          </article>
          {/* End pic-link */}

          <article className='last-post'>
            <h3>Fusce Vel Lectus Nunc</h3>
            <ul>
              <li>
                <a href='.'>Lacinia donec tortor lectus varius vel egestas a dictum in odio mauris metus.</a>
                <p><span>Friday, 6th April 2045</span></p>
              </li>

              <li>
                <a href='.'>Lacinia donec tortor lectus varius vel egestas a dictum in odio mauris metus.</a>
                <p><span>Friday, 6th April 2045</span></p>
              </li>

            </ul>
          </article>
          {/* End last-post */}

        </div>
        {/* End footer-grid */}
      </div>
      {/* End container */}
    </div>
  )
}

export default Footer
