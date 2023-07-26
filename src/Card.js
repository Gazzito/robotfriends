import React from 'react';

const card = ({id,name,email}) =>{
    return(
        <div className='mw5 tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img className='' alt='Robot' src={`https://robohash.org/${id}`}>
            </img>
            <div>
                <h2 className='f5'>{name}</h2>
                <p className='f6'>{email}</p>
            </div>
        </div>

    )

}

export default card;