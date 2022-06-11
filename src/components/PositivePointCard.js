import React from 'react'

function PositivePointCard({image , title, description}) {
    return (
        <div className='PositivePointCard d-flex col-xl-4 col-md-6 col-12'>
            <img className='w-25 h-25 pt-5' src={image} alt=''/>
            <div className=' m-3'>
                <h5 className='my-2'>
                    {title}
                </h5>
                <p className=''> 
                    {description}
                </p>
                <button className=' text-white border-0'>
                    بیشتر بدانید 
                    <i class="bi bi-chevron-double-left"></i>
                </button>
            </div>

        </div>
    )
}

export default PositivePointCard