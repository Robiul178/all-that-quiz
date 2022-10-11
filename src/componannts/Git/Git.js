import React from 'react';
import { useLoaderData } from 'react-router-dom';
import GitQuizShow from '../GitQuizShow/GitQuizShow';

const Git = () => {
    const gitQuiz = useLoaderData();
    return (
        <div>
            {
                gitQuiz.data.questions.map(g => <GitQuizShow
                    g={g}
                ></GitQuizShow>)
            }
        </div>
    );
};

export default Git;