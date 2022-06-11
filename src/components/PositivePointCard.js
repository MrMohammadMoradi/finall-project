import React from 'react'

function PositivePointCard({image , title, description}) {
    return (
        <div className='PositivePointCard d-flex'>
            <img className='' src={image} alt=''/>
            <div className=''>
                <h5 className='my-2'>
                    {title}
                </h5>
                <p> className=''
                    {description}
                </p>
            </div>

        </div>
    )
}

export default PositivePointCard