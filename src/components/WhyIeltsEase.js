import React from 'react'
import Title from './Title'
import PositivePointCard from './PositivePointCard'

function WhyIeltsEase() {
    return (
        <div className='WhyIeltsEase'>
            <div className='container text-white mt-3 py-4'>
                <Title title={" آخرین دوره های آیلتس ایز"} 
                    paragraph={"چرا باید آیلتس ایز را انتخاب کنیم؟"}/>
                
                <div className='ReasonForWhy d-flex'>
                    <PositivePointCard/>
                </div>

            </div>
        </div>
    )
}

export default WhyIeltsEase