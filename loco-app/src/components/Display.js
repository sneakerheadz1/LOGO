import React from 'react'
import DisplayList from './DisplayList'

function Display() {
    
    return (
        <div id='display-card'>

            <figure className ='image is 48x48' >
                <img src="" alt="" />
            </figure>
            <h4>School Name: </h4>
            <span>Address:  </span> 
            <span>State: </span> 
            <span>Zip Code: </span> 


            {/* <div className="card image is-48x48">
                <img src="" alt="" />
                <div className="container">
                <h4>School Name: </h4> 
                <span>Address: </span> 
                <span>State: </span> 
                <span>Zip Code: </span> 
            </div>
            </div> */}
            
        </div>
    )
}

export default Display
