import React from 'react'
import Brand from './Brand'
import ContentCard from './ContentCard'
import TableOfContents from './TableOfContents'



function sidebar() {
    return (
        <div className='SideBar d-flex col-xl-4 col-md-3 col-12'>
            <Brand/>
            <ContentCard/>
            <TableOfContents/>
        </div>
    )
}

export default sidebar