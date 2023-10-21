import React from 'react'

function Feedback() {
  return (
    <div className='feedback'>
      <div className="container">
        <div className="topic">
          <span>Enim eleifend dignissim bibendum</span>
          <h2>Id Tristique Id Metus Nulla</h2>
        </div>

        <article className="contacts">
          <ul>
            <li>
              <a className='icon' href="."><i class='fas fa-phone'></i></a>
              <div className="title">
                <h3><b>Give Us A Call:</b></h3>
                <span>+00 (123) 456 7890</span>
              </div>
            </li>
            <li>
              <a className='icon' href="."><i class='fas fa-envelope'></i></a>
              <div className="title">
                <h3><b>Send Us A Mail:</b></h3>
                <span>support@domain.com</span>
              </div>
            </li>
            <li>
              <a className='icon' href="."><i class='fas fa-map-marker-alt'></i></a>
              <div className="title">
                <h3><b>Come Visit Us:</b></h3>
                <span>Directions to <a href=".">our location</a></span>
              </div>
            </li>
          </ul>
        </article>

        <article className="email">
          <div className="title">
            <h3>Purus Nullam Arcu Integer</h3>
            <p>Elementum nisi ac volutpat vestibulum enim mi tincidunt eros
              sed justo magna odio sed lacus ut non ante sit amet est luctus dictum ut dolor ac.</p>
          </div>
          <form className='feedback-email'>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />
            <button type="submit">Submit</button>
          </form>
        </article>
      </div>

    </div>
  )
}

export default Feedback
