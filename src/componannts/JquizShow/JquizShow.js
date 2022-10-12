import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Jquiz.css';

const JquizShow = ({ j }) => {
    const handleAnswer = () => {
        // alert('Correct Answer')
        const correctAns = j.correctAnswer;
        alert(correctAns)
    }
    return (
        <div className='questions'>
            <h2 className='text-sm font-semibold'>{j.question}</h2><br />
            <EyeIcon onClick={handleAnswer} className="eye-icon h-6 w-6 text-blue-500" />
            <div className="option-container text-sm font-semibold">
                <button className='option'>{j.options[0]}</button>
                <button className='option'>{j.options[1]}</button>
                <button className='option'>{j.options[2]}</button>
                <button className='option'>{j.options[3]}</button>
            </div>
        </div>
    );
};

export default JquizShow;