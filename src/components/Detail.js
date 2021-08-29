import React from 'react'

function Detail(props) {
    return (
        <>
            <div className="detail-item wow animate__animated animate__fadeInLeft animate__slow">
                <span><i className="fas fa-chalkboard-teacher"></i></span>
                <h2>{props.title}</h2>
                <div className="line"></div>
                <p className="text">Our instructors are more adept at monitoring student problems and assessing their
                    level of understanding and progress, and they provide much more relevant, useful feedback.
                    We are experts in developing and testing hypotheses about learning difficulties or instructional strategies.</p>
            </div>
        </>
    )
}

export default Detail
