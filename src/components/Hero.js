import React from 'react'
import Navbar from './Navbar'

function Hero() {
    return (
        <div>
            <header className="header" id="intro">
                <Navbar />
                <div className="hero-div center container">
                    <h1>A World of Knowledge at Your Fingertips</h1>
                    <p className="animate__animated animate__fadeInUp animate__slow">All our dreams can come true</p>

                    <div className="hero-btns animate__animated animate__fadeInUp animate__slow">
                        <a href="#team" className="nav-link"><button type="button" className="btn-white">our courses</button></a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Hero
