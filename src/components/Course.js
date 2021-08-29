import React from 'react'

function Course(props) {
    return (
        <>
            <div className="team-item">
                <div className="team-img">
                    <img src={props.img_src} alt="" />
                </div>
                <div className="team-info">
                    <h3>{props.title}</h3>
                    <span>Click here to know more</span>
                </div>
            </div>
        </>
    )
}

export default Course
