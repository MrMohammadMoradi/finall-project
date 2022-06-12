import React from 'react'
import AnswerCard from './AnswerCard'
import Title from './Title'

function AnswerToWhy() {
    return (
        <div className='AnswerToWhy'>
            <div className='container'>
                <Title title={"چرا آیلتس ایز؟"}
                    paragraph={"چرا باید آیلتس ایز را انتخاب کنیم؟"}/>
                <AnswerCard/>
            </div>
        </div>
    )
}

export default AnswerToWhy