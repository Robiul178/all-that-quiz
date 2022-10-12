import React from 'react';
import { Link } from 'react-router-dom';

import './QuizRTopic.css';

const QuizTopic = ({ quiztopic }) => {
    const { name, logo, total } = quiztopic;
    return (
        <div className='all-topic'>
            <div className='quiz-topic'>
                <img src={logo} alt="" />
                <div className="details">
                    <div>
                        <h1 className='text-sm font-bold'>{name}</h1>
                        <h2 className='text-sm'>Total Quiz:{total}</h2>
                    </div>
                    {/* <button className='quiz-btn'>Start Quiz</button> */}
                    <div>
                        <div className='button-div text-sm'>
                            <Link to='/react'><button className='quiz-btn react'>Start Quiz</button></Link>
                            <Link className='js' to='/javascript'><button className='quiz-btn'>Start Quiz</button></Link>
                            <Link className='css' to='/css'><button className='quiz-btn'>Start Quiz</button></Link>
                            <Link className='git' to='/git'><button className='quiz-btn'>Start Quiz</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizTopic