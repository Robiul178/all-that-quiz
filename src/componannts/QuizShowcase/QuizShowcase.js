import React from 'react';
import './QuizShowcase.css'

const QuizShowcase = ({ q }) => {
    console.log(q.options[0])
    return (
        <div className='question-container'>
            <h2>Question:{q.question}</h2>
            <div className="q-option">
                <h3>Option:{q.options[0]}</h3>
                <h3>Option:{q.options[1]}</h3>
                <h3>Option:{q.options[2]}</h3>
                <h3>Option:{q.options[3]}</h3>
            </div>
        </div>
    );
};

export default QuizShowcase;