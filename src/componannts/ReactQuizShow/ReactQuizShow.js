import React from 'react';
import './ReactCss.css'
import { EyeIcon } from '@heroicons/react/24/solid'

const ReactruizShow = ({ r }) => {
    const handleAnswer = () => {
        const correctAns = r.correctAnswer;
        alert(correctAns)
    }

    const handleQuestionAnswer = (e) => {
        const correctAnswer = r.correctAnswer.length;
        // console.log(e.target.value.length)
        const clickAnswer = e.target.value.length;
        // console.log(correctAnswer, clickAnswer)
        if (clickAnswer === correctAnswer) {
            alert('Right Answer');
        }
        else {
            alert('Wrong Answer')
        }

    }

    return (
        < div >
            <div className='questions'>
                <h2 className='text-lg font-semibold'>{r.question}</h2><br />
                <EyeIcon onClick={handleAnswer} className="h-6 w-6 text-blue-500" />
                <div className="option-container text-sm font-semibold">
                    <span> <input onClick={handleQuestionAnswer} type="radio" value={r.options[0]} id="" />{r.options[0]}</span>
                    <span> <input onClick={handleQuestionAnswer} type="radio" value={r.options[1]} id="" />{r.options[1]}</span>
                    <span> <input onClick={handleQuestionAnswer} type="radio" value={r.options[2]} id="" />{r.options[2]}</span>
                    <span> <input onClick={handleQuestionAnswer} type="radio" value={r.options[3]} id="" />{r.options[3]}</span>
                </div>
            </div>
        </div >
    );
};

export default ReactruizShow;