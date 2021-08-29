import React from 'react'

function Faq(props) {
    return (
        <>
            <div className="faq-item">
                <div className="faq-head">
                    <h3>{props.question}</h3>
                    <span><i className="fas fa-plus"></i></span>
                </div>
                <div className="faq-content">
                    <p className="text">{props.answer}</p>
                </div>
            </div>
        </>
    )
}

export default Faq
