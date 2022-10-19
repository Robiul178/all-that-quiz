import React from 'react';
import './Css.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CssQuizShow = ({ c }) => {
    const handleAnswer = () => {
        const correctAns = c.correctAnswer;
        toast(correctAns)
    }

    const handleQuestionAnswer = (e) => {
        const correctAnswer = c.correctAnswer.length;
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
            <h2 className='text-lg font-semibold border'>Q.{c.question}</h2><br />
            <div className="option-container text-sm font-semibold">
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={c.options[0]} id="" />{c.options[0]}</span><ToastContainer></ToastContainer>
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={c.options[1]} id="" />{c.options[1]}</span><ToastContainer></ToastContainer>
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={c.options[2]} id="" />{c.options[2]}</span><ToastContainer></ToastContainer>
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={c.options[3]} id="" />{c.options[3]}</span><ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default CssQuizShow;