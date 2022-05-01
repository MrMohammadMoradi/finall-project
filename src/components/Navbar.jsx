import React from 'react'
import SocialMedia from './SocialMedia'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent text-white">
                    
                    <SocialMedia/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar