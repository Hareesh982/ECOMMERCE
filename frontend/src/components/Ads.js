import React from 'react'

function Ads(props) {
    return (
        <div className='col-md-3' >
            
                <img src={props.mobile_image} 
                className="card-img-top" alt="card1" style={{width:"100%",height:'400px'}} />
                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:'center'}}>{props.mobile_name}</h5>
                </div>
            
        </div>
    )
}

export default Ads