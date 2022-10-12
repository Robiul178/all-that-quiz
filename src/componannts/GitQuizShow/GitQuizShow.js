import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import './Git.css'


const GitQuizShow = ({ g }) => {
    const handleAnswer = () => {
        // alert('Correct Answer')
        const correctAns = g.correctAnswer;
        alert(correctAns)
    }
    return (
        <div>
            <div className='questions'>
                <h2 className='text-lg font-semibold'>{g.question}</h2><br />
                <EyeIcon onClick={handleAnswer} className="h-6 w-6 text-blue-500" />
                <div className="option-container text-sm font-semibold">
                    <button className='option'>{g.options[0]}</button>
                    <button className='option'>{g.options[1]}</button>
                    <button className='option'>{g.options[2]}</button>
                    <button className='option'>{g.options[3]}</button>
                </div>
            </div>
        </div>
    );
};

export default GitQuizShow;