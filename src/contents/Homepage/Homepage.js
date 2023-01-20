import React from 'react'
import Percent from '../../components/PercentGraph/Percent'
import './Homepage.css'


function Homepage() {
  return (
    <div className='homepage'>
      <section className='box-1'>
        <div className='container'>
          <div className='title'>
            <h2>Faucibus Porttitor Metus</h2>
            <p>In nibh nullam egestas velit laoreet nullam elementum ipsum pharetra<br />
              suscipit leo augue pretium felis nisl vitae ipsum curabitur quis libero.</p>
            <a href='#'>TRISTIQUE VEHICULA</a>
          </div>
          {/* End title */}
        </div>
      </section>
      {/* End box-1 */}
      <section className='box-2'>
        <div className='container'>
          <article>
            <li>
              <a href='#'><i class='fas fa-hand-rock' /></a>
              <h3>Feugiat Fermentum</h3>
              <p>Ac orci proin porttitor lacus eget mi pellentesque non.</p>
            </li>
            {/* End article1-grid-item */}

            <li>
              <a href='#'><i class='fas fa-dove' /></a>
              <h3>Malesuada Accumsan</h3>
              <p>Sapien sed metus congue sodales vivamus scelerisque.</p>
            </li>
            {/* End article1-grid-item */}

            <li>
              <a href='#'><i class='fas fa-history' /></a>
              <h3>Mauris Placerat</h3>
              <p>Et interdum vulputate purus nisl fringilla sapien quis.</p>
            </li>
            {/* End article1-grid-item */}

            <li>
              <a href='#'><i class='fas fa-heartbeat' /></a>
              <h3>Elementum Rhoncus</h3>
              <p>Sollicitudin dui mauris dui nunc lorem tortor pharetra.</p>
            </li>
            {/* End article1-grid-item */}
          </article>

          <div className='item'>
            <li>
              <img src='https://via.placeholder.com/550x350' alt='550x350' />
              <a href='#'>
                <div className='detail'>
                  <p>Accumsan Placerat</p>
                  <i class='fas fa-angle-right' />
                </div>
              </a>
            </li>
            {/* End box2-grid-item */}

            <li>
              <img src='https://via.placeholder.com/550x350' alt='550x350' />
              <a href='#'>
                <div className='detail'>
                  <p>Scelerisque Etiam</p>
                  <i class='fas fa-angle-right' />
                </div>

              </a>
            </li>
            {/* End box2-grid-item */}

          </div>
          {/* End box-2-grid */}

        </div>
      </section>
      {/* End box-2 */}
      <section className='box-3'>
        <div className='container'>
          <div className="topic">
            <span>Quis leo hendrerit lectus morbi</span>
            <h2>Justo Mauris Tempus Pharetra</h2>
          </div>

          <article>
            <li>
              <a href="#"><i class='fas fa-hourglass-half'></i></a>
              <h3>Sociis Natoque Penatibus</h3>
              <p>Interdum at congue semper purus nullam quis odio id justo accumsan ullamcorper maecenas vel arcu nulla tincidunt elit ornare.</p>
            </li>

            <li>
              <a href="#"><i class='fas fa-paw'></i></a>
              <h3>Magnis Parturient Montes</h3>
              <p>Urna proin venenatis eros viverra ultrices fringilla lectus urna consequat erat eget scelerisque ligula felis nec neque nam.</p>
            </li>

            <li>
              <a href="#"><i class='fas fa-sliders-h'></i></a>
              <h3>Nascetur Ridiculus Aenean</h3>
              <p>Vitae ipsum vitae velit porttitor aliquam in quam aliquam ullamcorper sem a auctor dapibus nisi nunc vehicula nunc quis mattis.</p>
            </li>

            <li>
              <a href="#"><i class='fas fa-tty'></i></a>
              <h3>Ullamcorper Neque Phasellus</h3>
              <p>Pede turpis at elit nunc at urna sed ligula vivamus vel erat at diam imperdiet pharetra quisque justo turpis mattis ut vitae.</p>
            </li>

            <li>
              <a href="#"><i class='fas fa-table'></i></a>
              <h3>Aliquet Lacus Nulla Erat</h3>
              <p>Tortor aenean leo ipsum elementum non cursus eu interdum ut risus proin risus nibh viverra eget lobortis feugiat egestas in nisl.</p>
            </li>

            <li>
              <a href="#"><i class='fas fa-hand-holding-usd'></i></a>
              <h3>Aliquam Volutpat Curabitur</h3>
              <p>Fusce dignissim neque vitae justo aenean ac urna et leo posuere pretium nunc bibendum enim quis imperdiet elementum dui dolor.</p>
            </li>

          </article>
        </div>
      </section>
      {/* End box-3 */}
      <section className='box-4'>
        <div className='container'>
          <div className="topic">
            <span>Rutrum erat nec mollis augue mauris</span>
            <h2>Ac Pede Phasellus Commodo</h2>
          </div>

          <article>
            <li><Percent title='PORTTITOR' color='rgb(103, 123, 162)' percent={25} /></li>
            <li><Percent title='CONDIMENTUM' color='rgb(103, 123, 162)' percent={50} /></li>
            <li><Percent title='SOLLICITUDIN' color='rgb(103, 123, 162)' percent={75} /></li>
            <li><Percent title='VENENATIS' color='rgb(103, 123, 162)' percent={100} /></li>
          </article>
        </div>
      </section>
      {/* End box-4 */}
      {/* End container */}
    </div>
  )
}

export default Homepage
