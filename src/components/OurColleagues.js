import React from 'react'
import ColleagueCard from './ColleagueCard'
import Title from './Title'


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
                <Title title={"همکاران ما"} paragraph={"بهترین کادر آموزشی برای فرزندان شما"}/>
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