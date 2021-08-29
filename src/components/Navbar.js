import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="brand-and-toggler">
                        <a href="index.html" className="navbar-brand">
                            The <span>Entrepreneurship</span> Network
                        </a>
                        <button type="button" className="navbar-toggler" id="navbar-toggler">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#intro" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#feature" className="nav-link">We're Hiring</a>
                            </li>
                            <li className="nav-item">
                                <a href="#team" className="nav-link">Online courses</a>
                            </li>
                            <li className="nav-item">
                                <a href="#pricing" className="nav-link">Our Package</a>
                            </li>
                            <li className="nav-item">
                                <a href="#testimonial" className="nav-link">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
