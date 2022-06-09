import React from 'react'

function Title({title, paragraph}) {
    return (
        <div className='Title'>
            <h2 className='my-3'> {title} </h2>
            <div className='SubTitle pb-3'>
                <h5 className=''> {paragraph} </h5>
                <span className='Line mt-2'/>
            </div>
        </div>
    )
}

export default Title