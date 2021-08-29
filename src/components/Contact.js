import React from 'react'

function Contact() {
    return (
        <div>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="title">
                        <h2 className="wow animate__animated animate__bounceIn animate__slow">Contact Us</h2>
                        <p className="text">We are always open to help you</p>
                    </div>

                    <div className="row wow animate__animated animate__fadeInUp animate__slow">
                        <div className="contact-left">
                            <h2>Send Message Here</h2>
                            <form>
                                <input type="text" className="form-control" placeholder="Name" />
                                <input type="email" className="form-control" placeholder="Email" />
                                <textarea placeholder="Message" rows="6"></textarea>
                                <button type="submit" className="submit-btn">Send Now</button>
                            </form>
                        </div>

                        <div className="contact-right">
                            <div>
                                <h2>Visit Office</h2>
                                <p className="text">Delhi</p>
                            </div>
                            <div>
                                <h2>Call Us</h2>
                                <p className="text">+918595986120</p>
                            </div>
                            <div>
                                <h2>Send Email</h2>
                                <p className="text">hr.contact.ten@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
