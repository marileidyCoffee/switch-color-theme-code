import React from 'react';
const Card = (props)=>{
    return(
        <div className={`card ${props.socialMedia}`} >
           <p>{props.user}</p>
           <h2 className="number">{props.followers}</h2>
           <span>{props.socialMedia==='youtube'?'Subscribers':'Followers'}</span>
           <p className='metricas'>{props.mediaChange}</p>
        </div>
    )
    }
    
    export default Card