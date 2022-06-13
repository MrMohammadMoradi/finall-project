import React from 'react'

function BlogCard({image, category, title, date}) {
    return (
        <div className='BlogCard col-lg-3 col-sm-6 col-12 '>
            <div className='bg-white m-3 rounded'>
                <a className='' href='#'>
                    <img className='w-100 rounded-top' src={image} alt=''/>
                    <div className='px-4 py-3'>
                        <p className='category fw-bold pt-4 mb-2'>
                            {category}
                        </p>
                        <h5 className='title text-black pb-3'>
                            {title}
                        </h5>
                        <div className='date-sesion d-flex pb-3'>
                            <i class="bi bi-clock text-danger "></i>
                            <p className=' pe-3  fw-bold'>
                                {date}
                            </p>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    )
}

export default BlogCard