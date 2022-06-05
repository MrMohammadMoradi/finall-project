import React from 'react'

function ColleagueCard({image}) {
    return (
        <div className='ColleagueCard m-3'>
            <a href="#">
                <img className='w-100 h-100 mt-2 justify-content-center' src={image} alt='ColleagueCardImage'/>
            </a>
        </div>
    )
}

export default ColleagueCard