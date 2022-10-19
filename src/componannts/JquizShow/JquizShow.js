import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import './Jquiz.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JquizShow = ({ j }) => {
    const handleAnswer = () => {
        const correctAns = j.correctAnswer;
        toast(correctAns)
    }
    const handleQuestionAnswer = (e) => {
        const correctAnswer = j.correctAnswer.length;
        const clickAnswer = e.target.value.length;
        if (clickAnswer === correctAnswer) {
            toast("Right Answer!")
        }
        else {
            toast('Wrong Answer')
        }

    }
    return (
        <div className='questions'>
            <EyeIcon onClick={handleAnswer} className="h-6 w-6 text-yellow-500" /><ToastContainer></ToastContainer>
            <h2 className='text-lg font-semibold border'>Q.{j.question}</h2><br />
            <div className="option-container text-sm font-semibold">
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={j.options[0]} id="" />{j.options[0]}</span><ToastContainer></ToastContainer>
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={j.options[1]} id="" />{j.options[1]}</span><ToastContainer></ToastContainer>
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={j.options[2]} id="" />{j.options[2]}</span><ToastContainer></ToastContainer>
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={j.options[3]} id="" />{j.options[3]}</span><ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default JquizShow;