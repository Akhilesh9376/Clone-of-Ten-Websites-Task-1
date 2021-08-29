import React from 'react'
import Testimonial from './Testimonial'

function Testimonials() {

    const Testimonial_list = [
        {
            testimonial_desc: "Working with TEN is a great opportunity for the students who want to extend their career in digital marketing!",
            intern_name: "Akriti Malik,DM Intern"
        },
        {
            testimonial_desc: "Working with TEN as a digital marketing intern has been a great experience. I learnt a lot of new stuff and worked on different tasks which helped me understand the marketing field better.",
            intern_name: "Harsh Rajput,General Management Interm "
        },
        {
            testimonial_desc: "TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.",
            intern_name: "Anjali Srivastava,Content Intern"
        },
        {
            testimonial_desc: "I thoroughly enjoyed my internship during this pandemic situation and gained valuable experience under my belt. I know this internship will be instrumental in getting myself a job and it would be glowing reference on my CV. I was very hesitant at the time of joining TEN due to my inexperience, but now I feel so happy that I was able to be a part of it as it has made me so much more confident and empowered. As much as this organization changes, I hope that it’s class remains constant. Thank you team TEN!",
            intern_name: "Kshema Unni, Business Development Intern"
        }
    ]

    return (
        <div>
            <section className="testimonial" id="testimonial">
                <div className="container">
                    <div className="title">
                        <h2 className="wow animate__animated animate__bounceIn animate__slow">Some Testimonials Words</h2>
                        <p className="text">From our previous Intern</p>
                    </div>

                    <div className="row owl-carousel owl-theme wow animate__animated animate__fadeInUp animate__slow">
                        {Testimonial_list.map((e) => {
                            return <Testimonial testimonial_desc={e.testimonial_desc} intern_name={e.intern_name} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
