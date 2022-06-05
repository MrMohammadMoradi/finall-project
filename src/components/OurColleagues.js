import React from 'react'
import ColleagueCard from './ColleagueCard'

import media from '../assets/Image/media.jpg'
import media2 from '../assets/Image/media2.jpg'
import travel from '../assets/Image/travel.jpg'
import HTML from '../assets/Image/HTML.webp'
import consult from '../assets/Image/consult.png'

function OurColleagues() {

    const data  = [
        {id:0 , img : media},
        {id:1 , img : consult},
        {id:2 , img : media2},
        {id:3 , img : travel},
        {id:4 , img : HTML},
        {id:5 , img : consult},
        {id:6 , img : media}
    ]

    return (
        <div className='OurColleagues mt-5'>
            <div className='container my-5'>
                <h2 className='my-3'>همکاران ما</h2>
                <div className='SubTitle pb-5'>
                    <h5 className=''>بهترین کادر آموزشی برای فرزندان شما</h5>
                    <span className='Line mt-2'/>
                </div>
                <div className='Colleague mt-5 py-4 d-flex'>
                    
                    {
                        data.map(item =>
                            <ColleagueCard image={item.img}/>
                            )
                    }

                </div>
            </div>
        </div>
    )
}

export default OurColleagues