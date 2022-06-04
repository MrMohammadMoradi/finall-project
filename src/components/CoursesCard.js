import React from 'react'

function CoursesCard({title, image, imageTeacher, nameTeacher, oldPrice, time, rate, newPrice}) {
    return (
        <div className='CoursesCard rounded bg-white mb-3 '>
            <a href='#' className='text-black'>
                <img className='CardBaner w-100 rounded-top' src={image} alt=''/>
                <h4 className=' my-3 mx-3'>
                    {title}
                </h4>
                <div className='Teacher d-flex mx-3 mt-5 mb-3'>
                    <img className=' rounded-circle mt-5' src={imageTeacher} alt=''/>
                    <p className='mt-5 me-2 fw-bold'>
                        {nameTeacher}
                    </p>
                </div>
                
                <div className='box d-flex'>
                    <span className='Line mx-3 w-75'></span>
                    <span className='OldPrice text-danger fw-bold'>
                        {oldPrice}
                    </span>
                </div>
                <div className='CourseInfo d-flex fw-bold mx-3 my-3'>
                    <span className='Time mt-2 mx-3'> {time} </span>
                    <i class="bi bi-clock mt-2"></i>
                    <span className='Rate mt-2 mx-3'> 
                        <i class="bi bi-star"></i>
                        <i class="bi bi-star-half"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>

                        {rate}
                    </span>
                    <span className='NewPrice bg-dark rounded text-white me-auto py-2 px-3'> {newPrice} </span>
                </div>
            </a>
        </div>
    )
}

export default CoursesCard