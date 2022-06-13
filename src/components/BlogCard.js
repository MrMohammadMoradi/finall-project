import React from 'react'

function BlogCard({image, category, title, date}) {
    return (
        <div className='BlogCard '>
            <a className='' href='#'>
                <img className='' src={image} alt=''/>
                <p className='category'>
                    {category}
                </p>
                <h5 className='title'>
                    {title}
                </h5>
                <div className='date-sesion d-flex'>
                    <i class="bi bi-clock"></i>
                    <p className=''>
                        {date}
                    </p>
                </div>
            </a>

        </div>
    )
}

export default BlogCard