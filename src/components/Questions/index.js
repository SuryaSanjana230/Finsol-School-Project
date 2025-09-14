import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';


const faqData = [
  {
    question: 'Where are we located?',
    answer: 'Our address is [Insert Address Here]. We are conveniently located near [Insert Nearby Landmark].',
  },
  {
    question: 'Is there a waitlist?',
    answer: 'Depending on the demand and the time of year, there may be a waitlist. We encourage early application to secure a spot for your child.',
  },
  {
    question: 'What curriculum do you follow?',
    answer: 'Our curriculum is based on a play-based learning approach that incorporates elements from various educational philosophies, including Montessori and Reggio Emilia. We emphasize hands-on activities, creativity, and exploration.',
  },
  {
    question: 'How do you support children with special needs?',
    answer: 'We strive to provide an inclusive environment and offer support for children with special needs through individualized attention and tailored learning plans.',
  },
  {
    question: 'Are there any additional fees?',
    answer: 'There is a one-time registration fee and an annual materials fee. These fees help cover administrative costs and supplies for the classroom.',
  },
];

export const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <p className="aboutstyle11">Frequently Asked Questions</p>
      <p className="aboutstyle12">Solve your doubts</p>
      <section className="faqstyle">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq ${activeIndex === index ? 'active' : ''}`}>
            <div className="question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <svg width="15" height="10" viewBox="0 0 42 25">
                <path d="M3 3L21 21L39 3" stroke="Black" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </div>
            <div className="answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
