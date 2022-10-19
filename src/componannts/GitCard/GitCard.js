import React from 'react';
import { Link } from 'react-router-dom';

const GitCard = ({ quizItems }) => {
    const { name, logo, total } = quizItems[3];
    return (
        <div>
            <div className='all-topic mb-8'>
                <div className='quiz-topic border rounded-2xl'>
                    <img className='h-52 bg-black rounded-2xl' src={logo} alt="" />
                    <div className="details">
                        <div>
                            <h1 className='text-sm font-bold'>{name}</h1>
                            <h2 className='text-sm'>Total Quiz:{total}</h2>
                        </div>
                        <div>
                            <div className='button-div text-sm'>

                                <Link className='git' to='/git'><button className='quiz-btn'>Start Quiz</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GitCard;