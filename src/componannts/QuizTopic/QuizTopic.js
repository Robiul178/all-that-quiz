import React from 'react';
import './QuizRTopic.css';

const QuizTopic = ({ quiztopic }) => {
    const { name, logo, total } = quiztopic;
    return (
        <div className='all-topic'>
            <div className='quiz-topic'>
                <img src={logo} alt="" />
                <div className="details">
                    <div>
                        <h1 className='text-lg font-bold'>{name}</h1>
                        <h2>Total Quiz:{total}</h2>
                    </div>
                    <button className='quiz-btn'>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic;