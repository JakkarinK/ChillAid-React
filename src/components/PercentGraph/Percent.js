import React from 'react'
import './Percent.css'

function Percent(props) {
    return (
        <div className='percentGraph'>
            <div className="box">
                <svg fill='none' stroke='#f1f1f1' strokeWidth='10px' strokeDasharray='440' strokeDashoffset='440'>
                    <circle className='cc-outline' cx='70' cy='70' r='85' strokeDasharray={5} strokeDashoffset={1440}></circle>
                    <circle className='cc-bg' cx='70' cy='70' r='70' strokeDashoffset={0}></circle>
                    <circle className='cc' cx='70' cy='70' r='70' stroke={props.color} strokeLinecap='' strokeDashoffset={440 - (440 * (props.percent) / 100)}></circle>
                </svg>
                <div className="number">
                    <h2>{props.percent}<span>%</span></h2>
                </div>
            </div>
            <h2 className='title'>{props.title}</h2>
        </div>
    )
}

export default Percent
