import React from 'react'
//import { Link } from 'react-router-dom'

import SocialMedia from './SocialMedia'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-0 pb-0">
            <div className="navInfo container-fluid pb-0">
                <button className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" 
                    id="navbarSupportedContent text-white">
                    
                    <p className='phonNumber text-white pe-5 me-4 mt-1 mb-0 fw-bold'>تلفن : 09153085282</p>

                    <ul className='list d-flex me-auto mt-1 mb-1 ms-5'>
                        <li className=' mx-3 my-1 mb-0'>
                            <a href='#' className='linkedToPage fw-bold'>
                                میز راهنما
                            </a>
                        </li>
                        <li className=' mx-3 my-1 mb-0'>
                            <a href='#' className='linkedToPage fw-bold'>
                                منابع ما
                            </a>
                        </li>
                        <li className=' mx-3'>
                            <a href='###'>
                                <input type='button'
                                    className='px-4 my-1 fw-bold border-0 rounded-pill'
                                    value='ثبت نام'
                                />
                                
                            </a>
                        </li>
                    </ul>

                    <SocialMedia className='me-auto'/>
                
                </div>
            </div>
        </nav>
    )
}

export default Navbar