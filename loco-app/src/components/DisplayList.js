import React from 'react'
import Display from './Display'

function DisplayList(props) {
    return (
        <div className='display'>
            <Display school={props}/>
        </div>
    )
}

export default DisplayList
