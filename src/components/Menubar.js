import React from 'react'

function Menubar() {
  return (
    <div className='menubar'>
      <nav>
        <li><a href='.'>Home</a></li>
        <li className='pages'>
            <a className='btn-pages' href='.'><i class="fa-sharp fa-solid fa-caret-down"></i> Pages</a>
            <div className='pages-menu'>
              <li><a href='.'>Gallery</a></li>
              <li><a href='.'>Full Width</a></li>
              <li><a href='.'>Sidebar Left</a></li>
              <li><a href='.'>Sidebar Right</a></li>
              <li><a href='.'>Basic Grid</a></li>
              <li><a href='.'>Fonts Icons</a></li>
          </div>
        </li>
        <li className='dropdown'>
            <a className='btn-dropdown' href='.'><i class="fa-sharp fa-solid fa-caret-down"></i> Dropdown</a>
            <div className='dropdown-menu'>
              <li><a href='.'>Level 2</a></li>
              <li className='dropdown-lv2'>
                  <a className='btn-dropdown-lv2' href='.'><i class="fa-sharp fa-solid fa-caret-right" /> Level 2 + Drop</a>
                  <div className='dropdown-lv2-menu'>
                    <li><a href='.'>Level 3</a></li>
                    <li><a href='.'>Level 3</a></li>
                    <li><a href='.'>Level 3</a></li>
                  </div>

              </li>
              <li><a href='.'>Level 2</a></li>
            </div>
        </li>
        <li><a href='.'>Link Text</a></li>
        <li><a href='.'>Link Text</a></li>
        <li><a href='.'>Link Text</a></li>
      </nav>
    </div>
  )
}

export default Menubar
