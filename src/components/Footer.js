import React from 'react'
import ContactUs from './ContactUs'
import NewsLetter from './NewsLetter'
import ReSources from './ReSources'
import ShortcutLinks from './ShortcutLinks'

function Footer() {
    return (
        <div className='Footer text-white py-3'>
            <div className='container d-flex'>
                <ContactUs/>
                <ReSources/>
                <ShortcutLinks/>
                <NewsLetter/>
            </div>
            
        </div>
    )
}

export default Footer