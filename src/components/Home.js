import React from 'react'
import Hero from './Hero'
import Details from './Details'
import Hiring from './Hiring'
import Courses from './Courses'
import Faqs from './Faqs'
import Packages from './Packages'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Hero />
            <Details />
            <Hiring />
            <Courses />
            <Faqs />
            <Packages />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
