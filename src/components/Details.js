import React from 'react'
import Detail from './Detail'

function Details() {
    return (
        <div>
            <section className="detail">
                <div className="container">
                    <h1 id="course">Our course benefits</h1>
                    <div className="row">
                        <Detail title="Hello1" />
                        <Detail title="Hello2" />
                        <Detail title="Hello3" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Details
