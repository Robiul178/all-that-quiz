import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReactQuizShow from '../ReactQuizShow/ReactQuizShow';

const Reacct = () => {
    const reactQuiz = useLoaderData();
    return (
        <div>
            {
                reactQuiz.data.questions.map(r => <ReactQuizShow
                    r={r}
                ></ReactQuizShow>)
            }
        </div>
    );
};

export default Reacct;