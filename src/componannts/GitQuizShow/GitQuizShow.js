import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import './Git.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GitQuizShow = ({ g }) => {
    const handleAnswer = () => {
        const correctAns = g.correctAnswer;
        toast(correctAns)
    }

    const handleQuestionAnswer = (e) => {
        const correctAnswer = g.correctAnswer.length;
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
            <h2 className='text-lg font-semibold border'>Q.{g.question}</h2><br />
            <div className="option-container text-sm font-semibold">
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={g.options[0]} id="" />{g.options[0]}</span><ToastContainer></ToastContainer>
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={g.options[1]} id="" />{g.options[1]}</span><ToastContainer></ToastContainer>
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={g.options[2]} id="" />{g.options[2]}</span><ToastContainer></ToastContainer>
                <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={g.options[3]} id="" />{g.options[3]}</span><ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default GitQuizShow;