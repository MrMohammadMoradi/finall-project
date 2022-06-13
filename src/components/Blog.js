import React from 'react'
import Title from './Title'
import BlogCard from './BlogCard'

import img from '../assets/Image/Image.png'

function Blog() {
//image, category, title, date
    const data = [
        {id: 0, image: img, category: " آکادمی ها", title: "زن و شوهر از دانشجویان دانشگاه هپی فارغ التحصیل شد ", data: "۲۳ خرداد ۱۳۹۷"},
        {id: 1, image: img, category: " دولت", title: "نکات مفید برای ایجاد یک بحث با کیفیت", data: "۲۳ خرداد ۱۳۹۷"},
        {id: 2, image: img, category: " طراحی", title: "بازتاب فصل فجر", data: "۲۳ خرداد ۱۳۹۷"},
        {id: 3, image: img, category: " طراحی", title: "شگفت انگیز است که دوستی هایی را که توسعه می یابند ببینید", data: "۲۳ خرداد ۱۳۹۷"}

    ]

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
                    <BlogCard/>
                </div>

            </div>

        </div>
    )
}

export default Blog