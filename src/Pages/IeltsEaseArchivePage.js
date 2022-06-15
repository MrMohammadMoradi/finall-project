import React from 'react'
import Carosel from '../components/Carosel'
import MainText from '../components/MainText'
import Sidebar from '../components/SideBar.jsx'
import RecentCourses from '../components/RecentCourses'
import OurColleagues from '../components/OurColleagues'

function IeltsEaseArchivePage() {
    return (
        <div className='IeltsEaseArchivePage'>
            <Carosel/>
            <div className='container d-flex my-3'>
                <MainText/>
                <Sidebar/>
            </div>
            <RecentCourses/>
            <OurColleagues/>

            
        </div>
    )
}

export default IeltsEaseArchivePage