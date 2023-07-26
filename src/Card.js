import React from 'react';
import "./Card.css";
const card = ({id,name,email}) =>{
    return(
        <div className=' tc bg-light-gray dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img className='' alt='Robot' src={`https://robohash.org/${id}`}>
            </img>
            <div>
                <h2 className='f5'>{name}</h2>
                <p className='f7'>{email}</p>
            </div>
        </div>

    )

}

export default card;