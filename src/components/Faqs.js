import React from 'react'
import Faq from './Faq'

function Faqs() {

    const Faq_list = [
        {
            question: "Why do I join TEN ?",
            answer: "TEN would enable you to accelerate your aspirations by providing an opportunity to master the most desired skill-sets in today's market."
        },
        {
            question: "What is The Entrepreneurship Network (TEN) ?",
            answer: "The Entrepreneurship Network (TEN) is a community based Edu-Tech group whose objective is to provide quality learning and expertise. Our current customer segment, at present, stands at 500+ colleges and 15000+ students, with new institutions coming in all the time."
        },
        {
            question: "How does TEN works?",
            answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi quis molestiae autem exercitationem sed, asperiores provident aut, quaerat illo ex reiciendis sapiente voluptas quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, suscipit! Officiis architecto laboriosam harum officia!"
        }
    ]

    return (
        <div>
            <section className="faq">
                <div className="container">
                    <div className="title">
                        <h2 className="wow animate__animated animate__bounceIn animate__slow">Have Any Questions?</h2>
                        <p className="text">Do u have any doubt?</p>
                    </div>

                    <div className="row wow animate__animated animate__fadeInUp animate__slow">
                        {Faq_list.map((e) => {
                            return <Faq question={e.question} answer={e.answer} />
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faqs
