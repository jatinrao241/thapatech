import React from 'react';

const AvatarList = (props)=>{
    return (
        <>
            <div className="avatarstyle m-5 p-4 grow" data-aos="flip-right"> 
                <div>
                    <img src={`https://joeschmoe.io/api/v1/${props.image}`} alt="images"/>
                    <h3 className='text-white text-center pt-3'>{props.name}</h3>
                    <p className='text-warning text-center'>{props.work}</p>
                </div>
            </div>
        </>
    )
}

export default AvatarList;