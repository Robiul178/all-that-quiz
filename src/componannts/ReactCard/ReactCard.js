import React from 'react';
import { Link } from 'react-router-dom';

const ReactCard = ({ quizItems }) => {
    console.log(quizItems[0])
    const { name, logo, total } = quizItems[0];
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
                                <Link to='/react'><button className='quiz-btn react'>Start Quiz </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactCard;