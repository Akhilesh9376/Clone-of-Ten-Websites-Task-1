import React from 'react'
import Package from './Package'

function Packages() {

    const Package_list = [
        {
            title: "General level"
        },
        {
            title: "Medium level"
        },
        {
            title: "High level"
        }
    ]

    return (
        <div>
            <section className="pricing" id="pricing">
                <div className="container">
                    <div className="title">
                        <h2 className="wow animate__animated animate__bounceIn animate__slow">Our Package</h2>
                        <p className="text">Lorem ipsum dolor sit amet consectetur</p>
                    </div>

                    <div className="row wow animate__animated animate__fadeInUp animate__slow">
                        {Package_list.map((e) => {
                            return <Package title={e.title} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Packages
