import React from 'react';
import './QuizRTopic.css';

const QuizTopic = ({ quiztopic }) => {
    const { name, logo, total } = quiztopic;
    return (
        <div className='all-topic'>
            <div className='quiz-topic'>
                <img src={logo} alt="" />
                <div className="details">
                    <h1>{name}</h1>
                    <h2>{total}</h2>
                    <button>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;