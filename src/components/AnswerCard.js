import React from 'react'

function AnswerCard({image , number, title, description}) {
    return (
        <div className='AnswerCard text-center mt-4 col-lg-3 col-sm-6 col-12'>
            <div className='p-3'>
                <img className='w-25 h-25' src={image} alt='imageAnswer'/>
                <h1 className='number' > {number} </h1>
                <h5 className='title' > {title} </h5>
                <p className='' > {description} </p>
            </div>
        </div>
    )
}

export default AnswerCard