import React from 'react'
import Course from './Course'

function Courses() {


    const Course_list = [
        {
            img_src : "./assets/hr.jpg",
            title : "Career in Human Resource",
        },
        {
            img_src : "./assets/sales (2).jpg",
            title : "Career in Sales",
        },
        {
            img_src : "./assets/content writting (1).jpg",
            title : "Career in Content Writting",
        },
        {
            img_src : "./assets/web-development (1).jpg",
            title : "Career in Web Development",
        },
        {
            img_src : "./assets/programming (1).jpg",
            title : "Career in Programming",
        }
    ]

    return (
        <div>
            <section className="team" id="team">
                <div className="container">
                    <div className="title">
                        <h2 className="wow animate__animated animate__bounceIn animate__slow">Our courses</h2>
                        <p className="text">We offers various courses and internships in following sectors </p>
                    </div>

                    <div className="row owl-carousel owl-theme wow animate__animated animate__fadeInUp animate__slow">
                        { Course_list.map((e) => {
                            return <Course img_src={e.img_src} title={e.title} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Courses
