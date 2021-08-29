import React from 'react'

function Package(props) {
    return (
        <>
            <div className="pricing-item">
                <h2>{props.title}</h2>
                <div className="price">
                    <span>₹ xyz</span>
                    <span className="text">Monthly</span>
                </div>
                <ul>
                    <li>Quality1</li>
                    <li>Quality2</li>
                    <li>Profit1</li>
                    <li>Profit2</li>
                </ul>
            </div>
        </>
    )
}

export default Package
