import React from 'react'
import Title from './Title'

function Blog() {
    return (
        <div className='Blog'>
            <div className='container py-3'>
                <div className='text-white heder d-flex'>  
                    <Title title={"چرا آیلتس ایز؟"}
                        paragraph={"چرا باید آیلتس ایز را انتخاب کنیم؟"}/>
                    <button className='fw-bold border-0 rounded-pill mb-3'>
                        نمایش همه مطالب
                    </button>
                </div>
                <div className='d-flex'>
                    
                </div>

            </div>

        </div>
    )
}

export default Blog