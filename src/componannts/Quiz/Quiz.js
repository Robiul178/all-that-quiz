import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizShowcase from '../QuizShowcase/QuizShowcase';

const Quiz = () => {
    const questionFromApi = useLoaderData();
    // console.log(questionFromApi.data.questions)
    return (
        <div>
            {
                questionFromApi.data.questions.map(q => <QuizShowcase
                    q={q}
                ></QuizShowcase>)
            }
        </div>
    );
};

export default Quiz;