import React from 'react'
import Title from './Title'
import AnswerCard from './AnswerCard'


function AnswerToWhy() {
    return (
        <div className='AnswerToWhy'>
            <div className='container'>
                <Title title={"چرا آیلتس ایز؟"}
                    paragraph={"چرا باید آیلتس ایز را انتخاب کنیم؟"}/>

                <div>
                    <AnswerCard/>
                </div>
            </div>

        </div>
    )
}

export default AnswerToWhy