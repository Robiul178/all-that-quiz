import React from 'react';
import { Link } from 'react-router-dom';

const CssCard = ({ quizItems }) => {
    const { name, logo, total } = quizItems[2];
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
                            <div className='button-div text-sm'>

                                <Link className='css' to='/css'><button className='quiz-btn'>Start Quiz</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CssCard;