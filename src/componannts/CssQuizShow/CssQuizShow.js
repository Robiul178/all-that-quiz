import React from 'react';
import './Css.css';
import { EyeIcon } from '@heroicons/react/24/solid';


const CssQuizShow = ({ c }) => {
    const handleButton = () => {
        // const option = Array.from(document.querySelectorAll('.option'));
        // console.log(option)
    }
    const handleAnswer = () => {
        // alert('Correct Answer')
        const correctAns = c.correctAnswer;
        alert(correctAns)
    }

    return (
        <div>
            <div className='questions'>
                <h2 className='text-lg font-semibold'>{c.question}</h2><br />
                <EyeIcon onClick={handleAnswer} className="eye-icon h-6 w-6 text-blue-500" />
                <div className="option-container text-sm font-semibold">
                    <button onClick={handleButton} className='option'>{c.options[0]}</button>
                    <button onClick={handleButton} className='option'>{c.options[1]}</button>
                    <button onClick={handleButton} className='option'>{c.options[2]}</button>
                    <button onClick={handleButton} className='option'>{c.options[3]}</button>
                </div>
            </div>
        </div>
    );
};

export default CssQuizShow;