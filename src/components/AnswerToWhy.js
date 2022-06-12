import React from 'react'
import Title from './Title'
import AnswerCard from './AnswerCard'

import image from '../assets/Image/V-Image.jpg'


function AnswerToWhy() {

        const data = [
        {id: 0, image: image, number:1, title: "حرفه ای شو", description: "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزار های کاربردی می باشد."},
        {id: 1, image: image, number:2, title: "مهارت خود را بالا ببر", description: "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزار های کاربردی می باشد."},
        {id: 2, image: image, number:3, title: "صرفه جویی در زمان", description: "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزار های کاربردی می باشد."},
        {id: 3, image: image, number:4, title: "خود را بیازما", description: "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربرد های متنوع با هدف بهبود ابزار های کاربردی می باشد."},
    ]

    return (
        <div className='AnswerToWhy'>
            <div className='container py-3'>
                <Title title={"چرا آیلتس ایز؟"}
                    paragraph={"چرا باید آیلتس ایز را انتخاب کنیم؟"}/>
                
                <div className='d-flex flex-wrap'>
                    {
                        data.map(item => 
                            <AnswerCard image={item.image} number={item.number} title={item.title} description={item.description}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default AnswerToWhy