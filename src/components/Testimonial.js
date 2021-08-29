import React from 'react'

function Testimonial(props) {
    return (
        <div>
            <div className="testimonial-item">
                <div className="testimonial-img">
                    {/* <!-- <img src = "assets/white.jpg" alt = ""> --> */}
                </div>
                <p>{props.testimonial_desc}</p>
                <span>{props.intern_name}</span>
            </div>
        </div>
    )
}

export default Testimonial
