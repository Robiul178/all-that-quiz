import React from 'react';
import { Link } from 'react-router-dom';

const JsCard = ({ quizItems }) => {
    const { name, logo, total } = quizItems[1];
    return (
        <div>
            <div className='all-topic'>
                <div className='quiz-topic border rounded-2xl mr-16'>
                    <img className='h-52 bg-black rounded-2xl' src={logo} alt="" />
                    <div className="details">
                        <div>
                            <h1 className='text-sm font-bold'>{name}</h1>
                            <h2 className='text-sm'>Total Quiz:{total}</h2>
                        </div>
                        <div>
                            <div className='border rounded border-black'>
                                <Link className='js' to='/javascript'><button className='quiz-btn'>Start Quiz</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JsCard;