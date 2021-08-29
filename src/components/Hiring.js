import React from 'react'

function Hiring() {
    return (
        <div>
            <section className="feature" id="feature">
                <div className="container">
                    <div className="row">
                        <div className="feature-left wow animate__animated animate__fadeInUp animate__slow">
                            <img src="assets/QRcode.png" alt="" />
                        </div>
                        <div className="feature-right wow animate__animated animate__fadeInUp animate__slow">
                            <div className="title">
                                <h2>We Are Hiring Interns </h2>
                                <p className="text">The Student Intern program is a structured and guided work-based learning program for students currently enrolled in India.</p>
                                <p className="text">There is a small registration fee, INR 100 /- (RUPEES ONE HUNDRED ONLY) applicable to all incoming interns  as part of this
                                    One-of-a-Kind Point based Program. This is required not just to ensure a seamless on-boarding and exit process but also to supply the
                                    interns with relevant study material and make them aware of how a corporate setup works.</p>
                                <p className="text">Scan the QR code to complete your payment and submit the below
                                    application form to start with your registration process.Please keep the payment transaction ID handy for submitting
                                    the form.</p>
                            </div>

                            <div className="feature-item">
                                <span><i className="fas fa-tablet-alt"></i></span>
                                <div>
                                    <h3>Check out few of our open internship positions below
                                        Refer the application form for more open positions</h3>
                                    <p className="text">Digital Marketing Interns<br />
                                        General Management Interns<br />
                                        Technical/Software Experts<br />
                                        Product Management Interns<br />
                                        Content Interns and more...</p>
                                    <p className="text">Note: This internship does not offer an opportunity to earn money,
                                        rather helps an individual grow by working on the job and
                                        earn a certificate upon successful completion.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hiring
