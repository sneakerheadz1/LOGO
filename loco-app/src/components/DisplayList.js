import React from 'react'
// import Display from './Display'

function DisplayList(props) {
    console.log("this is props", props.skool.address)
    
    return (
        <div className='display'>
            {/* <Display /> */}
            <div id='display-card'>

            <figure className ='image is 48x48' >
                <img src="" alt="" />
            </figure>
            <h5>School Name: </h5>
            <span>Address: {props.skool.address.street}  </span> 
            <span>State: {props.skool.address.state}  </span> 
            <span>Zip Code: {props.skool.address.zip} </span> 
           </div>

        </div>
    )
}

export default DisplayList
