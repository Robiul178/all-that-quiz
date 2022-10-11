import React from 'react';
import './QuizShowcase.css'

const QuizShowcase = ({ q }) => {
    console.log(q.options[0])
    return (
        <div className='questions'>
            <h2>Question:{q.question}</h2><br />
            <div className="option-container">
                <h3 className='option'>{q.options[0]}</h3>
                <h3 className='option'>{q.options[1]}</h3>
                <h3 className='option'>{q.options[2]}</h3>
                <h3 className='option'>{q.options[3]}</h3>
            </div>
        </div>
    );
};

export default QuizShowcase;