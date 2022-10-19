import React from 'react';
import './ReactCss.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const ReactruizShow = ({ r }) => {
    const handleAnswer = () => {
        const correctAns = r.correctAnswer;
        toast(correctAns)
    }

    const handleQuestionAnswer = (e) => {
        const correctAnswer = r.correctAnswer.length;
        const clickAnswer = e.target.value.length;
        if (clickAnswer === correctAnswer) {
            toast("Right Answer!")
        }
        else {
            toast('Wrong Answer')
        }

    }

    return (
        < div>
            <div className='questions'>
                <EyeIcon onClick={handleAnswer} className="h-6 w-6 text-yellow-500" /><ToastContainer></ToastContainer>
                <h2 className='text-lg font-semibold border'>Q.{r.question}</h2><br />
                <div className="option-container text-sm font-semibold">
                    <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={r.options[0]} id="" />{r.options[0]}</span><ToastContainer></ToastContainer>
                    <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={r.options[1]} id="" />{r.options[1]}</span><ToastContainer></ToastContainer>
                    <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={r.options[2]} id="" />{r.options[2]}</span><ToastContainer></ToastContainer>
                    <span> <input onClick={handleQuestionAnswer} name="option" type="radio" value={r.options[3]} id="" />{r.options[3]}</span><ToastContainer></ToastContainer>
                </div>
            </div>
        </div >
    );
};

export default ReactruizShow;