import React from 'react'
import CoursesCard from './CoursesCard'

import i1 from '../assets/Image/Image.png' 
import Title from './Title'

function RecentCourses() {
    const CardInfo = [
        {id: 0, title : "عنوان دوره",
            image : i1, imageTeache : i1, nameTeacher : " مدرس دوره",
            old_price :"18,000",new_Price : "15,700",
            time : "01:42:34", rate : "3.7", },
        
        {id: 1,title : "عنوان دوره",
            image : i1, imageTeache : i1, nameTeacher : " مدرس دوره",
            old_price :"39,000",new_Price : "32,000",
            time : "02:01:34", rate : "4.5", },
            
        {id: 2, title : "عنوان دوره",
            image : i1, imageTeache : i1, nameTeacher : " مدرس دوره",
            old_price :"35,000",new_Price : "29,000",
            time : "02:22:34", rate : "3.5", }
    ]

    return (
        <div className='RecentCourses'>
            <div className="container">
                <div className='Title text-white py-5'>
                    <Title title={" آخرین دوره های آیلتس ایز"} 
                        paragraph={"چرا باید آیلتس ایز را انتخاب کنیم؟"}/>
                </div>
                <div className='CardSesion d-flex flex-wrap pb-5 '>
                    {
                        CardInfo.map(item =>
                            <CoursesCard title = {item.title} image = {item.image}
                                imageTeacher = {item.imageTeache} nameTeacher = {item.nameTeacher}
                                oldPrice = {item.old_price} newPrice = {item.new_Price}
                                time = {item.time} rate = {item.rate}
                                />
                            )
                    }
                </div>
            </div>
        
        </div>
    )
}

export default RecentCourses