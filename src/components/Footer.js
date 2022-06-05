import React from 'react'
import ContactUs from './ContactUs'
import ReSources from './ReSources'

function Footer() {
    return (
        <div className='Footer text-white py-3'>
            <div className='container d-flex'>
                <ContactUs/>
                <ReSources/>
            </div>
            
        </div>
    )
}

export default Footer