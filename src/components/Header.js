import React from 'react'
import Menubar from './Menubar'

function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <h1><span>C</span>hill<span>A</span>id</h1>
                <Menubar />

            </div>
            {/* End container */}
        </div>
    )
}

export default Header
